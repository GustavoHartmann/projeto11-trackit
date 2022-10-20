import styled from "styled-components";

export default function HabitoHoje() {
  return (
    <HabitoHojeContainer>
      <InfoHabitoContainer>
        <h2>Ler 1 capítulo de livro</h2>
        <p>Sequência atual: 3 dias</p>
        <p>Seu recorde: 5 dias</p>
      </InfoHabitoContainer>
      <ion-icon name="checkbox"></ion-icon>
    </HabitoHojeContainer>
  );
}

const HabitoHojeContainer = styled.div`
  width: 100%;

  background-color: white;

  border-radius: 5px;

  padding: 10px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ion-icon {
    font-size: 69px;

    color: #EBEBEB;
  }
`;
const InfoHabitoContainer = styled.div`
    h2 {
        margin-bottom: 10px;
    }

    p {
        font-size: 13px;
        
        color: #666666;

        margin: 5px 0;
    }
`;
