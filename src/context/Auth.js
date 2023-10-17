import React, { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();

const AuthProvider = (props) => {
  let data = {};

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
