import styled from "styled-components";
import Footer from "./Footer";
import HabitoHoje from "./HabitoHoje";
import Header from "./Header";

export default function Hoje() {
  return (
    <>
      <Header />
      <HojeContainer>
        <h1>Segunda, 17/05</h1>
        <h3>Nenhum hábito concluído ainda</h3>
        <HabitoHoje />
        <HabitoHoje />
        <HabitoHoje />
      </HojeContainer>
      <Footer />
    </>
  );
}

const HojeContainer = styled.div`
  width: 90%;

  margin: 90px auto;

  h3 {
    color: #bababa;

    margin: 5px 0 30px 0;
  }
`;
