import { useContext } from "react";
import styled from "styled-components";
import logo from "../assets/images/logo-header.png";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const { objUsuario } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <img
        src={objUsuario.image}
        alt="imagem do perfil"
        data-identifier="avatar"
      />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;

  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  img:last-child {
    width: 50px;
    height: 50px;

    border-radius: 50%;

    object-fit: cover;
  }
`;
