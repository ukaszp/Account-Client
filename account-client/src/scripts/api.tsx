// api.js
import axios from 'axios';
import useAuthStore from './authLoginStore';
import {API_BASE_URL} from '../config'

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const { token } = useAuthStore.getState();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;