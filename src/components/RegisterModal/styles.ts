import styled from "styled-components";

export const FormOverlay = styled.div`
  width: 100%;

  p {
    width: 400px;
    padding: 10px 0 0 30px;
    font-size: 17px;
  }
`;


export const FormLogin = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 420px;
  height: 486px;
  background-color: #003aaa25;
  border-radius: 34px;

  label {
    font-size: 17px;
  }

  input {
    width: 323px;
    height: 45px;
    border-radius: 10px;
    padding: 10px;
    border: none;
  }

  input::placeholder {
    color: #cccccc;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  button {
    width: 323px;
    height: 50px;
    background-color: #107C10;
    border-radius: 10px;
    color: white;
    font-size: 17px;
    border: none;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  width: 323px;
  margin-bottom: 33px;
  margin-top: -20px;
`;

export const FormInternal = styled.div`
  margin-bottom: 26px;

  label {
    padding: 10px 0;
    display: flex;
    align-items: initial;
    justify-content: initial;
  }
`;
