import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import Footer from "./Footer";
import Habito from "./Habito";
import Header from "./Header";
import ModalCriarHabito from "./ModalCriarHabito";

export default function Habitos() {
  const [mostrarModalCriarHabito, setMostrarModalCriarHabito] = useState(false);
  const [habitos, setHabitos] = useState([]);
  console.log(habitos);

  const { objUsuario } = useContext(AuthContext);

  useEffect(() => {
    const Url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
      headers: {
        Authorization: `Bearer ${objUsuario.token}`,
      },
    };
    const promise = axios.get(Url, config);

    promise.then((response) => setHabitos(response.data));

    promise.catch((erro) => {
      Swal.fire({
        icon: "error",
        title: erro.response.data.message,
      });
    });
  }, []);

  function gerarModal() {
    setMostrarModalCriarHabito(true);
  }

  return (
    <>
      <Header />
      <TelaHabitosContainer>
        <h1>Meus hábitos</h1>
        <button onClick={gerarModal}>+</button>
        <ModalCriarHabito
          mostrarModalCriarHabito={mostrarModalCriarHabito}
          setMostrarModalCriarHabito={setMostrarModalCriarHabito}
        />
        {habitos.length === 0 ? (
          <h3>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </h3>
        ) : (
          habitos.map((h, idx) => <Habito key={idx} h={h} />)
        )}
      </TelaHabitosContainer>
      <Footer />
    </>
  );
}

const TelaHabitosContainer = styled.div`
  width: 90%;

  margin: 90px auto;

  position: relative;

  & > button {
    width: 40px;
    height: 35px;

    font-size: 27px;

    color: white;
    background-color: #52b6ff;

    border: none;
    border-radius: 5px;

    position: absolute;
    top: 0px;
    right: 0px;
  }

  h3 {
    color: #666666;

    margin: 40px 0 30px 0;

    line-height: 22px;
  }
`;
