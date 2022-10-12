import styled, { css, keyframes } from "styled-components";

export const Modal = styled.section`
  ${({ theme}) => css`
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

export const ModalContainer = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg1};
    padding: 1.5rem;
    width: 40rem;
    height: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    color: ${theme.colors.textColor};
    border-radius: 10px;
    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    all: unset;
    padding: 0.8rem 1rem;
    box-sizing: border-box;
    width: 18.625rem;
    height: 3rem;
    background-color: ${theme.colors.baseLine};
    border: 1px solid ${theme.colors.baseLine};
    border-radius: 8px;
    color: ${theme.colors.textColor};
  `}
`;

export const Input = styled.input`
  ${({ theme}) => css`
    all: unset;
    padding: 0 1rem;
    box-sizing: border-box;
    width: 18.625rem;
    min-height: 3rem;
    background-color: ${theme.colors.baseForm};
    border: 1px solid ${theme.colors.baseLine};
    border-radius: 8px;
    color: ${theme.colors.baseLine};
  `}
`;

