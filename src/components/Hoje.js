import axios from "axios";
import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import Footer from "./Footer";
import HabitoHoje from "./HabitoHoje";
import Header from "./Header";

export default function Hoje() {
  const [habitos, setHabitos] = useState([]);
  const [arrayHabitosfeitos, setArrayHabitosfeitos] = useState([]);
  const porcentagemTotal = 100;

  const { objUsuario, valorPorcentagem, setValorPorcentagem } =
    useContext(AuthContext);
  const dia = dayjs().locale(ptBr).format("dddd, DD/MM");

  useEffect(() => {
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const config = {
      headers: {
        Authorization: `Bearer ${objUsuario.token}`,
      },
    };

    const promise = axios.get(url, config);

    promise.then((response) => {
      setHabitos(response.data);
      const arrayFeitos = response.data.filter((h) => h.done);
      setArrayHabitosfeitos(arrayFeitos);
      const porcentagem =
        (arrayFeitos.length / response.data.length) * porcentagemTotal;
      setValorPorcentagem(porcentagem.toFixed());
    });

    promise.catch((erro) => {
      Swal.fire({
        icon: "error",
        title: erro.response.data.message,
      });
    });
  }, []);

  return (
    <>
      <Header />
      <TelaHojeContainer feito={arrayHabitosfeitos.length === 0}>
        <h1>{dia[0].toUpperCase() + dia.substring(1)}</h1>
        {arrayHabitosfeitos.length === 0 ? (
          <h3>Nenhum hábito concluído ainda</h3>
        ) : (
          <h3>{valorPorcentagem}% dos hábitos concluídos</h3>
        )}
        {habitos.map((h) => (
          <HabitoHoje
            key={h.id}
            habito={h}
            setHabitos={setHabitos}
            setArrayHabitosfeitos={setArrayHabitosfeitos}
          />
        ))}
      </TelaHojeContainer>
      <Footer />
    </>
  );
}

const TelaHojeContainer = styled.div`
  width: 90%;

  margin: 90px auto;

  h3 {
    color: ${(props) => (props.feito ? "#bababa" : "#8FC549")};

    margin: 5px 0 30px 0;
  }
`;
