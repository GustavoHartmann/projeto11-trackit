import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./Cadastro";
import GlobalStyles from "./GlobalStyles";
import Hoje from "./Hoje";
import Login from "./Login";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/hoje" element={<Hoje />} />
      </Routes>
    </BrowserRouter>
  );
}
