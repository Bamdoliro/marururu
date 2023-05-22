import axios from "axios";
import { tokenExpired } from "./tokenExpired";

const maru = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

maru.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

maru.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { status, code, message } = error.response.data;
    if (message) {
      if (status === 401 && code === "EXPIRED_TOKEN") {
        tokenExpired();
      }
    }
    return Promise.reject(error);
  }
);
export { maru };
