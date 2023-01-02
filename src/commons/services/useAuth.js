import { useContext } from "react";
import { AuthContext } from "../../features";

export const useAuth = () => {
  const { login, logout, user, isAuth } = useContext(AuthContext);
  return { login, logout, user, isAuth };
};
