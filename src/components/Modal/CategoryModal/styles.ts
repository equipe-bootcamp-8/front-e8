import styled, { css, keyframes } from "styled-components";

export const Modal = styled.section`
  ${() => css`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const ModalHeader = styled.div`
  ${({ theme }) => css`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  height: 5rem;
  border-radius: 8px 8px 0 0;
  background-color: ${theme.colors.baseDarkBlue};
img {
  width: 3rem;
  cursor: pointer;
}
  h2 {
    color: ${theme.colors.textColor2};
  }
  `}
`;

export const ModalContainer = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    margin-bottom: 15rem;
    width: 45rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: ${theme.colors.textColor};
    border-radius: 10px;
  `}
`;


export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    padding: 0 2rem;
    gap: 2rem;
    align-items: center;
    label { 
      font-size: 1.8rem;
    }
   
  `}
`;

export const Input = styled.input`
  ${({ theme}) => css`
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



export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
  display: flex;
  justify-content: space-evenly;
  gap: 4rem;
  `}
`;