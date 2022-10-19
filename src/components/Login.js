import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo-login.png";
import FormContainer from "./FormContainer";

export default function Login() {
  return (
    <LoginContainer>
      <img src={logo} alt="logo" />
      <FormContainer>
        <form>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
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
