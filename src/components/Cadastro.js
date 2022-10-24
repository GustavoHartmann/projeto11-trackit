import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import logo from "../assets/images/logo-login.png";
import FormContainer from "./FormContainer";

export default function Cadastro() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputSenha, setInputSenha] = useState("");
  const [inputNome, setInputNome] = useState("");
  const [inputFoto, setInputFoto] = useState("");
  const [estadoBotao, setEstadoBotao] = useState(false);
  const navigate = useNavigate();

  function cadastrarUsuario(e) {
    e.preventDefault();
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const promise = axios.post(url, {
      email: inputEmail,
      name: inputNome,
      image: inputFoto,
      password: inputSenha,
    });

    setEstadoBotao(true);

    promise.then(() => navigate("/"));

    promise.catch((erro) => {
      setEstadoBotao(false);
      Swal.fire({
        icon: "error",
        title: erro.response.data.message,
      });
    });
  }

  return (
    <CadastroContainer>
      <img src={logo} alt="logo" />
      <FormContainer>
        <form onSubmit={cadastrarUsuario}>
          <input
            type="email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            placeholder="Email"
            required
            disabled={estadoBotao}
            data-identifier="input-email"
          />
          <input
            type="password"
            value={inputSenha}
            onChange={(e) => setInputSenha(e.target.value)}
            placeholder="Senha"
            required
            disabled={estadoBotao}
            data-identifier="input-password"
          />
          <input
            type="text"
            value={inputNome}
            onChange={(e) => setInputNome(e.target.value)}
            placeholder="Nome"
            required
            disabled={estadoBotao}
            data-identifier="input-name"
          />
          <input
            type="url"
            value={inputFoto}
            onChange={(e) => setInputFoto(e.target.value)}
            placeholder="Foto"
            required
            disabled={estadoBotao}
            data-identifier="input-photo"
          />
          <button type="submit" disabled={estadoBotao}>
            {estadoBotao ? <ThreeDots color="white" /> : "Cadastrar"}
          </button>
        </form>
        <Link to={"/"} data-identifier="back-to-login-action">
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </FormContainer>
    </CadastroContainer>
  );
}

const CadastroContainer = styled.div`
  width: 80%;

  margin: 70px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
