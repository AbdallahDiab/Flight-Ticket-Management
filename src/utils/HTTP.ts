import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { validURL } from "@utils";
import { message } from "@components";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface HttpArgs {
  method: HttpMethod;
  endpoint: string;
  data?: unknown;
  auth?: boolean;
  contentType?: string;
  headers?: Record<string, string>;
  options?: AxiosRequestConfig & {
    throwError?: boolean;
    return_full_response?: boolean;
    handlePermissionError?: boolean;
  };
}

const HTTP_REQUEST = async ({
  method,
  endpoint,
  data = {},
  auth = true,
  contentType = "application/json",
  headers = {},
  options = {
    throwError: false,
  },
}: HttpArgs) => {
  let auth_header: Record<string, string> = {};

  if (auth) {
    const token = window.localStorage.getItem("giza_system_access_token");
    auth_header = auth ? { Authorization: `Bearer ${token}` } : {};
  }

  try {
    const res = await axios({
      method,
      headers: {
        ...auth_header,
        ...headers,
        "Content-Type":
          data instanceof FormData
            ? "multipart/form-data"
            : contentType || "application/json",
      },
      url: validURL(endpoint)
        ? endpoint
        : `${import.meta.env.VITE_DB_BASE_URL}/${endpoint}`,
      data: data,
      ...options,
    }).then((res: AxiosResponse) => {
      if (options.return_full_response) return res;
      return res?.data || res;
    });
    return res;
  } catch (err: any) {
    message.error(err.response.data);

    // if (err?.response?.status === 401) {
    //   let redirect = "";
    //   if (
    //     window.location.pathname !== "/login" &&
    //     window.location.pathname !== "/logout"
    //   ) {
    //     redirect = `?redirect=${window.location.pathname}`;
    //   }
    //   if (window.location.pathname !== "/login") {
    //     window.location.href = `/login${redirect}`;
    //   }
    //   window.localStorage.removeItem("giza_system_access_token");
    //   return err.response;
    // }
    // if (
    //   err?.response?.status === 403 &&
    //   (options.handlePermissionError || method !== "GET")
    // ) {
    //   window.location.href = "/403";
    //   return;
    // }

    return Promise.reject(err.response?.data || err.message);
  }
};

export const GET = (config: Omit<HttpArgs, "method">) =>
  HTTP_REQUEST({
    method: "GET",
    ...config,
  });

export const POST = (config: Omit<HttpArgs, "method">) =>
  HTTP_REQUEST({
    method: "POST",
    ...config,
  });

export const PATCH = (config: Omit<HttpArgs, "method">) =>
  HTTP_REQUEST({
    method: "PATCH",
    ...config,
  });

export const PUT = (config: Omit<HttpArgs, "method">) =>
  HTTP_REQUEST({
    method: "PUT",
    ...config,
  });

export const DELETE = (config: Omit<HttpArgs, "method">) =>
  HTTP_REQUEST({
    method: "DELETE",
    ...config,
  });
