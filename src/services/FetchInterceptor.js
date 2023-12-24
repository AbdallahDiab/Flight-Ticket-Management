import axios from "axios";
import { notification } from "antd";

const unauthorizedCode = [400, 401, 403];

const service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 60000,
});

// Config
const TOKEN_PAYLOAD_KEY = "authorization";

// API Request interceptor
service.interceptors.request.use(
  (config) => {
    const jwtToken = localStorage.getItem("token") || null;

    if (jwtToken) {
      config.headers[TOKEN_PAYLOAD_KEY] = jwtToken;
    }

    return config;
  },
  (error) => {
    // Do something with request error here
    notification.error({
      message: "Error",
    });
    Promise.reject(error);
  }
);

// API response interceptor
service.interceptors.response.use(
  (response) => {
    return response;
  }
  //   (error) => {
  //     let notificationParam = {
  //       message: "",
  //     };

  //     // Remove token and redirect
  //     if (unauthorizedCode.includes(error.response.status)) {
  //       notificationParam.message = "Authentication Fail";
  //       notificationParam.description = "Please login again";
  //       localStorage.removeItem(AUTH_TOKEN);

  //       //   store.dispatch(signOutSuccess());
  //     }

  //     if (error.response.status === 404) {
  //       notificationParam.message = "Not Found";
  //     }

  //     if (error.response.status === 500) {
  //       notificationParam.message = "Internal Server Error";
  //     }

  //     if (error.response.status === 508) {
  //       notificationParam.message = "Time Out";
  //     }

  //     notification.error(notificationParam);

  //     return Promise.reject(error);
  //   }
);

export default service;
