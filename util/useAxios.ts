import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

interface UseAxiosResponse<T> {
  loading: boolean;
  error: string | null;
  response: T | null;
  get: (url: string, config?: AxiosRequestConfig) => Promise<void>;
  post: (url: string, data?: any, config?: AxiosRequestConfig) => Promise<void> | object;
}

function useAxios<T = any>(): UseAxiosResponse<T> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<T | null>(null);

  const get = async (url: string, config?: AxiosRequestConfig) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get<T>(url, config);
      setResponse(res.data);
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
      setResponse(res.data);
      return res; // Return the response directly
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
      throw err; // Re-throw the error to handle it in the calling function
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, get, post };
}

export default useAxios;