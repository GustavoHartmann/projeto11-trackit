import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

export default function Habito({ h }) {
  const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const { objUsuario } = useContext(AuthContext);

  function deletarHabito() {
    const config = {
      headers: {
        Authorization: `Bearer ${objUsuario.token}`,
      },
    };
    const Url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}`;

    Swal.fire({
      title: "Você tem certeza disso?",
      text: "Não é possível reverter essa ação",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#52B6FF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Deletar!",
    }).then((result) => {
      if (result.isConfirmed) {
        const promise = axios.delete(Url, config);

        promise.then(() => {
          Swal.fire(
            "Deletado!",
            "Seu hábito foi deletado com sucesso!",
            "success"
          );
        });

        promise.catch((erro) => {
          Swal.fire({
            icon: "error",
            title: erro.response.data.message,
          });
        });
      }
    });
  }

  return (
    <HabitoContainer>
      <h2>{h.name}</h2>
      <ion-icon name="trash-outline" onClick={deletarHabito}></ion-icon>
      <div>
        {dias.map((d, index) => (
          <DiasDoHabito key={index} selecionado={h.days.includes(index)}>
            {d}
          </DiasDoHabito>
        ))}
      </div>
    </HabitoContainer>
  );
}

const HabitoContainer = styled.div`
  width: 100%;

  background-color: white;

  border-radius: 5px;

  padding: 10px;
  margin: 30px 0 10px 0;

  position: relative;

  ion-icon {
    font-size: 15px;

    color: #666666;

    position: absolute;
    top: 10px;
    right: 10px;
  }

  h2 {
    margin-bottom: 20px;
  }

  div {
    display: flex;
  }
`;

const DiasDoHabito = styled.div`
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

  display: flex;
  align-items: center;
  justify-content: center;
`;
