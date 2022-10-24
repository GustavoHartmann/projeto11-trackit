import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function Historico() {
  return (
    <>
      <Header />
      <TelaHistoricoContainer>
        <h1>Histórico</h1>
        <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
      </TelaHistoricoContainer>
      <Footer />
    </>
  );
}

const TelaHistoricoContainer = styled.div`
  width: 90%;

  margin: 90px auto;

  h3 {
    color: #666666;

    margin-top: 20px;

    line-height: 22px;
  }
`;
