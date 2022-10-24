import axios from "axios";
import { useContext } from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import styled from "styled-components";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

export default function HabitoHoje({
  habito,
  setHabitos,
  setArrayHabitosfeitos,
}) {
  const { objUsuario, setValorPorcentagem } = useContext(AuthContext);
  const porcentagemTotal = 100;

  function marcarOuDesmarcarHabitoComoFeito() {
    if (habito.done) {
      desmarcarHabitoComoFeito();
    } else {
      marcarHabitoComoFeito();
    }
  }

  function marcarHabitoComoFeito() {
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/check`;
    const config = {
      headers: {
        Authorization: `Bearer ${objUsuario.token}`,
      },
    };
    const promise = axios.post(url, {}, config);

    promise.then(() => {
      const urlGet =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
      const promessa = axios.get(urlGet, config);

      promessa.then((response) => {
        setHabitos(response.data);
        const arrayFeitos = response.data.filter((h) => h.done);
        setArrayHabitosfeitos(arrayFeitos);
        const porcentagem =
          (arrayFeitos.length / response.data.length) * porcentagemTotal;
        setValorPorcentagem(porcentagem.toFixed());
      });

      promessa.catch((erro) => {
        Swal.fire({
          icon: "error",
          title: erro.response.data.message,
        });
      });
    });

    promise.catch((erro) => {
      Swal.fire({
        icon: "error",
        title: erro.response.data.message,
      });
    });
  }

  function desmarcarHabitoComoFeito() {
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/uncheck`;
    const config = {
      headers: {
        Authorization: `Bearer ${objUsuario.token}`,
      },
    };
    const promise = axios.post(url, {}, config);

    promise.then(() => {
      const urlGet =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
      const promessa = axios.get(urlGet, config);

      promessa.then((response) => {
        setHabitos(response.data);
        const arrayFeitos = response.data.filter((h) => h.done);
        setArrayHabitosfeitos(arrayFeitos);
        const porcentagem =
          (arrayFeitos.length / response.data.length) * porcentagemTotal;
        setValorPorcentagem(porcentagem.toFixed());
      });

      promessa.catch((erro) => {
        Swal.fire({
          icon: "error",
          title: erro.response.data.message,
        });
      });
    });

    promise.catch((erro) => {
      Swal.fire({
        icon: "error",
        title: erro.response.data.message,
      });
    });
  }

  return (
    <HabitoHojeContainer feito={habito.done}>
      <InfoHabitoContainer
        feito={habito.done}
        igual={habito.highestSequence === habito.currentSequence}
        data-identifier="today-infos"
      >
        <h2>{habito.name}</h2>
        <p>
          Sequência atual: <b>{habito.currentSequence} dias</b>
        </p>
        <p>
          Seu recorde: <b>{habito.highestSequence} dias</b>
        </p>
      </InfoHabitoContainer>
      <AiFillCheckSquare onClick={marcarOuDesmarcarHabitoComoFeito} data-identifier="done-habit-btn"/>
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

  svg {
    font-size: 90px;

    color: ${(props) => (props.feito ? "#8FC549" : "#ebebeb")};
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

  b {
    color: ${(props) => (props.feito ? "#8FC549" : "#666666")};
  }

  p:last-child b {
    color: ${(props) => (props.feito && props.igual ? "#8FC549" : "#666666")};
  }
`;
