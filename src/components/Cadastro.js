import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo-login.png";
import FormContainer from "./FormContainer";

export default function Cadastro() {
  return (
    <CadastroContainer>
      <img src={logo} alt="logo" />
      <FormContainer>
        <form>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Senha" />
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Foto" />
          <button type="submit">Entrar</button>
        </form>
        <Link to={"/"}>
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </FormContainer>
    </CadastroContainer>
  );
}

const CadastroContainer = styled.div`
  width: 80%;

  margin: 35vw auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
