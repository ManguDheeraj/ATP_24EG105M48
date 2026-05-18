import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://blog-backend-4-794v.onrender.com/api",
  withCredentials: true,
});

export const getErrorMessage = (err, fallback = "Something went wrong") => {
  return err.response?.data?.message || fallback;
};
