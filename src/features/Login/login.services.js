import { AUTHAPI } from "../../commons";

export const loginService = async (email, password) => {
  //const res = await AUTHAPI.api.post(AUTHAPI.paths.login, { email, password });
  setTimeout(()=>{res.data=email},500)
  return res.data;
};

export const logoutService = async () => {
    //const res = await AUTHAPI.api.post(AUTHAPI.paths.logout);
    setTimeout(()=>{res.data="ok"},500)
    return res.data;
  };