import { useContext, useState, createContext, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setuser] = useState(null)

useEffect(() => {
  if(token)
  {
    const decoded = jwtDecode(token)
    setuser(decoded)
  }
  else{
    setuser(null)
  }
  
}, [token])

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);

  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
   
  };

  return (
    <AuthContext.Provider value={{ token,user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
