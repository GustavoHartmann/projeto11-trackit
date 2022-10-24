import { useContext } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

export default function Footer() {
  const { valorPorcentagem } = useContext(AuthContext);

  return (
    <FooterContainer valorPorcentagem={valorPorcentagem === 100}>
      <Link to={"/habitos"} data-identifier="habit-page-action">
        <p>Hábitos</p>
      </Link>
      <Link to={"/hoje"}>
        <CircularProgressbar value={valorPorcentagem} text="Hoje" />
      </Link>
      <Link to={"/historico"} data-identifier="historic-page-action">
        <p>Histórico</p>
      </Link>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  height: 70px;

  background: white;

  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  bottom: 0;
  right: 0;

  p {
    font-size: 18px;

    color: #52b6ff;
  }

  .CircularProgressbar {
    width: 91px;
    height: 91px;

    background-color: #52b6ff;

    border-radius: 50%;

    padding: 5px;

    position: absolute;
    bottom: 20px;
    right: 175px;
  }

  .CircularProgressbar text {
    fill: white;

    font-size: 22px;

    text-anchor: middle;
  }

  .CircularProgressbar .CircularProgressbar-path {
    stroke: white;
  }
`;
