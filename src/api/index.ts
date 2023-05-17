import { ACCESS_KEY, REQUEST_KEY } from "@/constants/token";
import axios from "axios";
import { Storage } from "./storage";
import { tokenExpired } from "./tokenExpired";

const maru = axios.create({
  baseURL: "http://localhost:8088/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

maru.interceptors.request.use(
  (config) => {
    config.headers[REQUEST_KEY] = `Bearer ${Storage.getItem(ACCESS_KEY)}`;
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
    console.log(status, code, message);

    if (message) {
      if (status === 401 && code === "EXPIRED_TOKEN") {
        tokenExpired();
      }
    }
    return Promise.reject(error);
  }
);
export { maru };
