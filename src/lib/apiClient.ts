import axios, { AxiosError } from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import type { Store } from "@reduxjs/toolkit";  
import type { RootState } from "../store/store";  
import { TokenResponseSchema } from "@/schemas/user/userSchema";
import { logout, setAccessToken } from "@/store/slice/authSlice";

let storeInstance: Store<RootState>;  

// --- State for managing token refresh ---
let isRefreshing = false; // Flag to indicate if a token refresh is in progress
let failedRequestsQueue: Array<(token: string) => void> = []; // Queue to hold requests waiting for the new token

const processQueue = (error: Error | null, token: string | null = null) => {
  failedRequestsQueue.forEach((prom) => {
    if (error) {
      console.error("Failed to refresh token for queued request", error);
      prom(""); 
    } else if (token) {
      prom(token); 
    }
  });

  failedRequestsQueue = [];  
};

export const setStore = (store: Store<RootState>) => {
  storeInstance = store; // Set store dynamically
};

const baseURL = import.meta.env.VITE_API_URL;
const api = axios.create({
  baseURL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (!storeInstance) {
      console.warn("Axios interceptor: Redux store not set yet!");
      return config;
    }
    const state = storeInstance.getState();
    const accessToken = state.auth.accessToken;

    if (accessToken) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    }; // Add type assertion for _retry

    if (!storeInstance) {
      console.error(
        "Axios interceptor: Redux store not set during response error!"
      );
      return Promise.reject(error);
    }

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      // --- Check if a refresh is already in progress ---
      if (isRefreshing) {
        // If already refreshing, add this request to the queue and wait
        return new Promise((resolve) => {
          failedRequestsQueue.push((token: string) => {
            if (token && originalRequest.headers) {
              originalRequest.headers["Authorization"] = `Bearer ${token}`;
              resolve(api(originalRequest)); // Retry the request with the new token
            } else {
              // Handle case where token refresh failed while waiting
              resolve(Promise.reject(error)); // Or handle logout
            }
          });
        });
      }

      // --- This is the first request to fail, initiate the refresh ---
      originalRequest._retry = true; // Mark as retried to prevent infinite loops
      isRefreshing = true; // Set the refreshing flag

      try {
        const state = storeInstance.getState();
        const refreshToken = state.auth.refreshToken;
        const userId = state.auth.userData?._id;
        const userName = state.auth.userData?.userName;

        // Basic check if refresh token exists
        if (!refreshToken || !userId) {
          console.error("Missing refresh token data, logging out.");
          storeInstance.dispatch(logout());
          isRefreshing = false;
          processQueue(new Error("Missing refresh token data"), null);
          return Promise.reject(error);
        }

        console.log("Attempting token refresh...");

        const refreshResponse = await axios.post(
          `${baseURL}/user/refresh-token`,
          { refreshToken, userId, userName },
          { withCredentials: true }
        );

        const parsedData = TokenResponseSchema.parse(refreshResponse.data);

        if (!parsedData.success) {
          console.error("Failed to parse refresh token response:", parsedData);
          throw new Error("Invalid refresh token response structure");
        }

        const { data: newTokens } = parsedData;
        const newAccessToken = newTokens.accessToken;

        console.log("Token refresh successful!"); // Log success

        // --- Update store with new token ---
        storeInstance.dispatch(setAccessToken(newTokens));

        // --- Update header of the original request ---
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        }

        // --- Process the queue with the new token ---
        console.log("Processing queue with new token...", failedRequestsQueue); // Log processing
        processQueue(null, newAccessToken);

        return api(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed", refreshError);
        storeInstance.dispatch(logout());
        processQueue(refreshError as Error, null);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false; // Always reset the flag
      }
    }

    return Promise.reject(error);
  }
);

export default api;
