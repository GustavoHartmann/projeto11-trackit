import styled from "styled-components";

const FormContainer = styled.div`
  width: 100%;

  font-size: 20px;

  margin-top: 30px;

  input {
    width: 100%;
    height: 45px;

    font-size: 20px;

    color: #666666;

    border: 1px solid #d4d4d4;
    border-radius: 5px;

    margin-bottom: 10px;
    padding-left: 10px;
  }

  input::placeholder {
    font-style: italic;

    color: #dbdbdb;
  }

  input:focus {
    outline-color: #666666;
  }

  button {
    width: 100%;
    height: 45px;

    font-size: 20px;

    background-color: #52b6ff;
    color: white;

    border: none;
    border-radius: 5px;

    margin-bottom: 35px;
  }

  p {
    text-align: center;
    text-decoration: underline;

    font-size: 14px;

    color: #52b6ff;
  }
`;

export default FormContainer;
