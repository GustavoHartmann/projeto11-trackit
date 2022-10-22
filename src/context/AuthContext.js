import { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [objUsuario, setObjetoUsuario] = useState({});

  return (
    <AuthContext.Provider value={{ objUsuario, setObjetoUsuario }}>
      {children}
    </AuthContext.Provider>
  );
}
