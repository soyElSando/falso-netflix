export const AUTH_TYPES = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
  };
  
  export const AUTH_STORAGE_KEY = "auth";
  
  export const initialAuthState = {
    user: null,
    isAuth: false,
  };
  
  export const initializeAuthState = () => {
    return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY)) || initialAuthState;
  };
  
  export const authReducer = (state, action) => {
    switch (action.type) {
      case AUTH_TYPES.LOGIN:
        return {
          ...state,
          user: action.payload.user,
          isAuth: true,
        };
  
      case AUTH_TYPES.LOGOUT:
        return initialAuthState;
  
      default:
        return state;
    }
  };
  