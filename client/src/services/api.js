import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: async (email, password) => {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  },
  register: async (userData) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
};

export default api;
