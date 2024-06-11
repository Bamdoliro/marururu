import axios from 'axios';

export const maru = axios.create({
  baseURL: 'https://maru-base.com',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
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
    return Promise.reject(error);
  }
);
