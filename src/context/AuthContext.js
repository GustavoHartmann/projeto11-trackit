import { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [objUsuario, setObjetoUsuario] = useState({});
  const [valorPorcentagem, setValorPorcentagem] = useState(0);

  return (
    <AuthContext.Provider
      value={{
        objUsuario,
        setObjetoUsuario,
        valorPorcentagem,
        setValorPorcentagem,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
