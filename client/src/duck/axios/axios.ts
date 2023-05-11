import axiosLib from "axios";

export const axios = axiosLib.create({
  baseURL: import.meta.env.VITE_API_URL,
});