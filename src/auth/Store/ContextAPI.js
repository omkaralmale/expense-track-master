import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  token: "",
  isLogIn: false,
  login: (token) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [authState, setAuthState] = useState({
    token: "",
    isLogIn: false,
  });

  useEffect(() => {
    const initialToken = localStorage.getItem("token");
    const isUserLoggedIn = localStorage.getItem("isLogInLocal");
    setAuthState({
      token: initialToken,
      isLogIn: isUserLoggedIn === "1",
    });
  }, []);

  const loginHandler = (token) => {
    setAuthState({
      token: token,
      isLogIn: true,
    });
    // console.log(token);
    localStorage.setItem("token", token);
    localStorage.setItem("isLogInLocal", "1");
  };

  const logoutHandler = () => {
    setAuthState({
      token: "",
      isLogIn: false,
    });
    localStorage.removeItem("token");
    localStorage.setItem("isLogInLocal", "0");
  };

  return (
    <AuthContext.Provider
      value={{
        token: authState.token,
        isLogIn: authState.isLogIn,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
