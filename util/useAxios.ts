import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import useAuthStore from "@/auth/authStore";
import { router } from "expo-router";

interface UseAxiosResponse<T> {
  loading: boolean;
  error: string | null;
  get: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse<T, any> | undefined>;
  post: (url: string, data?: any, config?: AxiosRequestConfig) => Promise<void> | object;
}

function useAxios<T = any>(): UseAxiosResponse<T> {
  const { user } = useAuthStore()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const get = async (url: string, config?: AxiosRequestConfig) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get<T>(url, config);
      return res
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const post = async (url: string, data?: any, config?: AxiosRequestConfig) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post<T>(url, data, config);
      // console.log()
      return res; // Return the response directly
    } catch (err: any) {
      console.log("ERR:", JSON.stringify(err.response.data))
      setError(err.response?.data?.message || "An error occurred");
      if (err.response?.data?.message === "Unauthorized") return router.replace("/(auth)/signin")
      throw err; // Re-throw the error to handle it in the calling function
    } finally {
      setLoading(false);
    }
  };
  

  return { loading, error, get, post };
}

export default useAxios;