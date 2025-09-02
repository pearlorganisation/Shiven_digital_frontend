import axios, { AxiosError } from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL,
  withCredentials: true, // ✅ important for cookies
});

let isRefreshing = false;
let failedQueue: Array<(ok: boolean) => void> = [];

const processQueue = (error: Error | null) => {
  failedQueue.forEach((cb) => cb(!error));
  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as typeof error.config & {
      _retry?: boolean;
    };

    if (error.response?.status === 404 && !originalRequest._retry) {
      if (isRefreshing) {
        // wait for refresh to finish
        return new Promise((resolve, reject) => {
          failedQueue.push((ok) => {
            if (ok) resolve(api(originalRequest!));
            else reject(error);
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        console.log("Trying to refresh token...");

        await axios.post(`${baseURL}/user/refresh-token`, {}, { withCredentials: true });

        processQueue(null);
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed", refreshError);
        processQueue(refreshError as Error);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
