import { AUTHAPI } from "../../commons";

export const loginService = async (email, password) => {
  const res = await AUTHAPI.api.post(AUTHAPI.paths.login, { email, password });
  return res;
};

export const logoutService = async () => {
    const res = await AUTHAPI.api.post(AUTHAPI.paths.logout);
    return res;
  };