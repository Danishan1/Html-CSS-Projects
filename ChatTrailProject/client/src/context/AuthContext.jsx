import React, { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const response = await axios.post("https://localhost:3000/auth/login", {
      username,
      password,
    });
    setUser(response.data);
  };

  const logout = async () => {
    await axios.post("https://localhost:3000/auth/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
