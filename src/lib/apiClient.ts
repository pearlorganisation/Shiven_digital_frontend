import axios, { AxiosError,  type InternalAxiosRequestConfig } from "axios";
import type { Store } from "@reduxjs/toolkit";  
import type { RootState } from "../store/store";  
import { clearUser } from "@/store/slice/authSlice";

let storeInstance: Store<RootState>;

export const setStore = (store: Store<RootState>) => {
  storeInstance = store;
};

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // ✅ send cookies automatically
});

let isRefreshing = false;
let failedQueue: {
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
  config: InternalAxiosRequestConfig;
}[] = [];

// Helper to process queued requests
const processQueue = (error: unknown, tokenRefreshed: boolean) => {
  failedQueue.forEach(({ resolve, reject, config }) => {
    if (tokenRefreshed) {
      resolve(api(config)); // retry request
    } else {
      reject(error);
    }
  });
  failedQueue = [];
};

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // If unauthorized
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (!storeInstance) {
        console.error("Store not set for axios");
        return Promise.reject(error);
      }

      if (isRefreshing) {
        
        // Queue other requests while refreshing
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject, config: originalRequest });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Try refreshing session
        await api.post("/auth/refresh-token");

        processQueue(null, true);
        return api(originalRequest); // retry original request
      } catch (refreshError) {
        processQueue(refreshError, false);
        storeInstance.dispatch(clearUser()); // logout if refresh fails
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
