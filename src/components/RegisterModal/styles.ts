import styled, { css } from "styled-components";
import { RegisterProps } from ".";

export const FormOverlay = styled.div`
  width: 100%;

  p {
    width: 400px;
    padding: 10px 0 0 30px;
    font-size: 17px;
  }
`;

export const a = styled.div`
  color: #bdbdbd;
  width: 400px;
  padding: 10px 0 0 30px;
  font-size: 17px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Body = styled.div`
  margin: 0px 0 0 0px;
`;

export const FormLogin = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 420px;
  height: 450px;
  background-color: #003aaa25;
  border-radius: 34px;

  label {
    font-size: 17px;
  }

  input::placeholder {
    color: #cccccc;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

 
`;

export const CreateButton = styled.button`
  ${() => css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 323px;
    min-height: 50px;
    background-color: #107c10;
    border-radius: 10px;
    color: white;
    font-size: 17px;
    border: none;
    cursor: pointer;
    margin-bottom: 30px;
 `}
`;

export const Title = styled.div`
  width: 323px;
  margin-bottom: 33px;
  padding-top: 20px;
`;

export const FormInternal = styled.div`
  margin-bottom: 26px;

  label {
    padding: 10px 0;
    display: flex;
    align-items: initial;
    justify-content: initial;
  }

  .error {
    text-align: justify;
    color: #ab1e00;
    margin-top: 5px;
    max-width: 323px;
    font-size: 12px;
  }
`;

export const Input = styled.input<RegisterProps>`
  ${({ erro }) => css`
    width: 323px;
    height: 45px;
    border-radius: 10px;
    padding: 10px;
    border: ${erro ? "2px solid red" : "none"};

    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${erro && "red !important"};
    }
    :-ms-input-placeholder {
      color: ${erro && "red !important"};
    }
  `}
`;
