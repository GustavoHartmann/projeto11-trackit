import axios from "axios";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

export default function ModalCriarHabito({
  mostrarModalCriarHabito,
  setMostrarModalCriarHabito,
  setHabitos,
}) {
  const [arrayDiasSelecionados, setArrayDiasSelecionados] = useState([]);
  const [inputHabito, setInputHabito] = useState("");
  const [estadoBotao, setEstadoBotao] = useState(false);
  const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const { objUsuario } = useContext(AuthContext);

  function selecionarDias(e) {
    dias.forEach((d, index) => {
      if (d === e.target.innerText) {
        if (!arrayDiasSelecionados.includes(index)) {
          setArrayDiasSelecionados([...arrayDiasSelecionados, index]);
        } else {
          const arrayDiasSelecionadosFiltrados = arrayDiasSelecionados.filter(
            (n) => n !== index
          );
          setArrayDiasSelecionados(arrayDiasSelecionadosFiltrados);
        }
      }
    });
  }

  function enviarHabitoCriado() {
    const habitoCriado = { name: inputHabito, days: arrayDiasSelecionados };
    const config = {
      headers: {
        Authorization: `Bearer ${objUsuario.token}`,
      },
    };
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const promise = axios.post(url, habitoCriado, config);

    setEstadoBotao(true);

    promise.then(() => {
      const promessa = axios.get(url, config);

      promessa.then((response) => setHabitos(response.data));

      promessa.catch((erro) => {
        Swal.fire({
          icon: "error",
          title: erro.response.data.message,
        });
      });
      setMostrarModalCriarHabito(false);
      setArrayDiasSelecionados([]);
      setInputHabito("");
      setEstadoBotao(false);
    });

    promise.catch((erro) => {
      Swal.fire({
        icon: "error",
        title: erro.response.data.message,
      });
      setEstadoBotao(false);
    });
  }

  return (
    <ModalCriarHabitoContainer mostrar={mostrarModalCriarHabito}>
      <input
        type="text"
        placeholder="nome do hábito"
        value={inputHabito}
        onChange={(e) => setInputHabito(e.target.value)}
        disabled={estadoBotao}
      />
      <div>
        {dias.map((d, index) => (
          <BotaoDia
            key={index}
            onClick={selecionarDias}
            selecionado={arrayDiasSelecionados.includes(index)}
            disabled={estadoBotao}
          >
            {d}
          </BotaoDia>
        ))}
      </div>
      <BotoesContainer>
        <button
          onClick={() => {
            setMostrarModalCriarHabito(false);
            setArrayDiasSelecionados([]);
            setInputHabito("");
          }}
          disabled={estadoBotao}
        >
          Cancelar
        </button>
        <button onClick={enviarHabitoCriado} disabled={estadoBotao}>
          {estadoBotao ? <ThreeDots color="white" /> : "Salvar"}
        </button>
      </BotoesContainer>
    </ModalCriarHabitoContainer>
  );
}

const ModalCriarHabitoContainer = styled.div`
  width: 100%;

  background-color: white;

  margin-top: 20px;
  padding: 20px;

  border-radius: 5px;

  display: ${(props) => (props.mostrar === true ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-end;

  div:nth-child(2) {
    width: 100%;
  }
`;

const BotaoDia = styled.button`
  width: 60px;
  height: 30px;

  font-size: 18px;

  color: ${(props) => (props.selecionado === true ? "white" : "#d4d4d4")};
  background-color: ${(props) =>
    props.selecionado === true ? "#52B6FF" : "white"};

  border: ${(props) =>
    props.selecionado === true ? "none" : "1px solid #d4d4d4"};
  border-radius: 5px;

  margin: 0 5px 5px 0;
`;

const BotoesContainer = styled.div`
  width: 60%;

  margin-top: 20px;

  display: flex;
  justify-content: space-between;

  button:first-child {
    width: auto;
    height: auto;

    font-size: 16px;

    background: none;
    color: #52b6ff;

    border: none;
    border-radius: 5px;
  }

  button:last-child {
    width: 84px;
    height: 35px;

    font-size: 16px;

    color: white;
    background-color: #52b6ff;

    border: none;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
