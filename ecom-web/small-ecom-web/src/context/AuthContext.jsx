import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isLogin, setIsLogin] = useState(
    JSON.parse(localStorage.getItem("isLogin")) || false
  );

  const login = () => {
    localStorage.setItem("isLogin", true);
    setIsLogin(true);
  };

  const logout = () => {
    localStorage.removeItem("isLogin");
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};