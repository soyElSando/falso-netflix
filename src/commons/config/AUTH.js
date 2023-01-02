import axios from "axios";

export const AUTHAPI = {
  api: axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
      "access-control-allow-credentials": "true",
    },
  }),
  paths: {
    login: "/auth/login",
    logout: "/auth/logout",
    register: "/auth/register",
  },
};
