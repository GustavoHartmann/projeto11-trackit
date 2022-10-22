import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./Cadastro";
import GlobalStyles from "./GlobalStyles";
import Habitos from "./Habitos";
import Hoje from "./Hoje";
import Login from "./Login";
import AuthProvider from "../context/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/habitos" element={<Habitos />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
