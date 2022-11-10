import styled, { css } from "styled-components";

export const ModalHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px 0 0 8px;
    min-width: 30rem;
    padding: 1rem;
    height: 55rem;
    background-color: ${theme.colors.baseMainBlue};
    h2 {
      color: ${theme.colors.textColor2};
      font-size: 4rem;
      font-weight: 100;
    }
  `}
`;

export const ModalContainer = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseDarkBlue};
    margin-bottom: 15rem;
    width: 45rem;
    height: 55rem;
    display: flex;
    flex-direction: row;
    color: ${theme.colors.textColor};
    border-radius: 10px;
  `}
`;

export const Form = styled.div`
  ${({ theme }) => css`
    height: 55rem;
    min-width: 45rem;
    background-color: ${theme.colors.baseDarkBlue};
    border-radius: 0 8px 8px 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `}
`;

export const FormHeader = styled.section`
  ${({theme}) => css`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding: 1rem;
    img {
      width: 3rem;
      cursor: pointer;
      color: white;
    }
  `}
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 0 1rem 1rem;
    background-color: ${theme.colors.baseDarkBlue};
    color: ${theme.colors.textColor2};
    padding: 0 1rem;
    gap: 2rem;
    align-items: center;
    label {
      font-size: 2rem;
      font-weight: 600;
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    all: unset;
    min-width: 30rem;
    padding: 0 1rem;
    box-sizing: border-box;
    min-height: 3rem;
    background-color: ${theme.colors.baseForm};
    border: 1px solid ${theme.colors.baseLine};
    border-radius: 8px;
    color: ${theme.colors.baseLine};
  `}
`;

export const DescriptionInput = styled.textarea`
  ${({ theme }) => css`
    overflow-wrap
    all: unset;
    min-width: 30rem;
    padding: 0 1rem;
    box-sizing: border-box;
    min-height: 10rem;
    background-color: ${theme.colors.baseForm};
    border: 1px solid ${theme.colors.baseLine};
    border-radius: 8px;
    color: ${theme.colors.baseLine};

  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    padding: 0.8rem 1rem;
    box-sizing: border-box;
    min-width: 30rem;
    height: 4rem;
    background-color: ${theme.colors.textColorInput};
    border: 1px solid ${theme.colors.baseLine};
    border-radius: 8px;
    color: ${theme.colors.textColor};
  `}
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 2rem;
    margin-bottom: 5rem;
    button {
      width: 25rem;
    }
  `}
`;
