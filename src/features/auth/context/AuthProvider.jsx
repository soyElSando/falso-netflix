import axios from "axios";
import { useReducer, useEffect } from "react";
import {
  authReducer,
  AUTH_STORAGE_KEY,
  AUTH_TYPES,
  initialAuthState,
  initializeAuthState,
} from "../reducers/authReducer";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const initializeAxiosInterceptors = () => {
    axios.interceptors.request.use();

    axios.interceptors.response.use(
      (response) => response,

      (error) => {
        if (error.response.status === 401) {
          logout();
        }
        return Promise.reject(error);
      }
    );
  };

  useEffect(() => {
    initializeAxiosInterceptors();
  }, []);

  const [state, dispatch] = useReducer(
    authReducer,
    initialAuthState,
    initializeAuthState
  );

  const login = (user) => {
    localStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify({ user, isAuth: true })
    );
    dispatch({ type: AUTH_TYPES.LOGIN, payload: { user } });
  };

  const logout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    dispatch({ type: AUTH_TYPES.LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user: state.user,
        isAuth: state.isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
