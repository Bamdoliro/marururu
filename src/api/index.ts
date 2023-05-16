import axios from "axios";

const maru = axios.create({
  baseURL: "http://localhost:8088/",
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
  (error) => {
    return Promise.reject(error);
  }
);
export { maru };
