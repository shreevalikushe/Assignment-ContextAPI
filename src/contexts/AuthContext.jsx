import React, { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  //   export const logOut = () => {
  //     setAuth(false);
  //   };
  //   export const logIn = () => {
  //     setAuth(true);
  //   };
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {" "}
      {children}
    </AuthContext.Provider>
  );
};
