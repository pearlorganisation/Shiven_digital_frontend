import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import type { Store } from "@reduxjs/toolkit";
import { clearUser } from "@/store/slice/authSlice";

let storeInstance: Store | null = null;

export const setStore = (store: Store) => {
  storeInstance = store;
};

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// 👉 separate raw axios instance (no interceptors)
const refreshApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue: {
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
  config: InternalAxiosRequestConfig;
}[] = [];

const processQueue = (error: unknown, tokenRefreshed: boolean) => {
  failedQueue.forEach(({ resolve, reject, config }) => {
    if (tokenRefreshed) {
      resolve(api(config));
    } else {
      reject(error);
    }
  });
  failedQueue = [];
};

// --- Response interceptor ---
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (!storeInstance) {
        console.error("⚠️ Store not set in apiClient");
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject, config: originalRequest });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // 🚨 use refreshApi (no interceptors) instead of api
        await refreshApi.post("/auth/refresh-token");

        processQueue(null, true);
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, false);

        storeInstance.dispatch(clearUser()); // ✅ logout user
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
