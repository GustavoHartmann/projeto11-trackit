import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import logo from "../assets/images/logo-login.png";
import FormContainer from "./FormContainer";

export default function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputSenha, setInputSenha] = useState("");
  const [estadoBotao, setEstadoBotao] = useState(false);
  const [conteudoBotao, setConteudoBotao] = useState("Entrar");
  const navigate = useNavigate();

  function FazerLogin(e) {
    e.preventDefault();
    const Url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const promise = axios.post(Url, {
      email: inputEmail,
      password: inputSenha,
    });

    setEstadoBotao(true);
    setConteudoBotao(<ThreeDots color="white" />);

    promise.then((response) => {
      console.log(response.data);
      navigate("/hoje");
    });

    promise.catch((erro) => {
      setEstadoBotao(false);
      setConteudoBotao("Entrar");
      Swal.fire({
        icon: "error",
        title: erro.response.data.message,
      });
    });
  }

  return (
    <LoginContainer>
      <img src={logo} alt="logo" />
      <FormContainer>
        <form onSubmit={FazerLogin}>
          <input
            type="email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            placeholder="Email"
            required
            disabled={estadoBotao}
          />
          <input
            type="password"
            value={inputSenha}
            onChange={(e) => setInputSenha(e.target.value)}
            placeholder="Senha"
            required
            disabled={estadoBotao}
          />
          <button type="submit" disabled={estadoBotao}>
            {conteudoBotao}
          </button>
        </form>
        <Link to={"/cadastro"}>
          <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
      </FormContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 80%;

  margin: 35vw auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
