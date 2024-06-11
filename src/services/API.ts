import axios, { type AxiosInstance } from 'axios';

export const BASE_URL: string = '/';

export const API: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});
