import type { THttpMethod } from "@/core/types";
import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { axiosInstance } from "@/core/config/axios.client";

export type ApiError = {
  status?: number;
  message: string;
  data?: any;
};

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export async function sendRequest<T>(
  method: THttpMethod,
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<T> {
  try {
    const res = await axiosInstance.request<ApiResponse<T>>({
      method,
      url: endpoint,
      ...config,
    });

    return res.data.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw <ApiError>{
          status: error.response.status,
          message: error.response.data?.message ?? "Server error",
          data: error.response.data?.errors,
        };
      }
      if (error.request) {
        throw <ApiError>{ message: "No response from server" };
      }
      throw <ApiError>{ message: error.message };
    }

    throw <ApiError>{ message: "Unexpected error", data: error };
  }
}
