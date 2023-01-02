import { AUTHAPI } from "../config/AUTH";


export const initAuthInterceptors = () => {
    AUTHAPI.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  
    AUTHAPI.api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
        }
  
        if (error.response.status === 403) {
        }
  
        return Promise.reject(error);
      }
    );
  };
  