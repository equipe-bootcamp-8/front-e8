import styled, { css } from "styled-components";

export const ModalOverlay = styled.div`
  ${() => css`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const SearchProduct = styled.div`
  border: 1px #b6b6b6 solid;
  width: 25rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 1rem;
  div {
    margin: 0 0.5rem 0 1rem;
  }
  input {
    border: none;
    width: 21rem;
    margin: 0 1rem 0 1.3rem;
    outline: none;
    font-size: 1.6rem;
  }
`;

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    min-width: 90vw;
    height: calc(100vh - 21vh);
    color: ${theme.colors.textColor};
    display: flex;
  `}
`;

export const EditEntitiesContainer = styled.div`
  ${() => css`
    width: 80%;
    height: 77%;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    margin-left: 2rem;
    margin-right: 2rem;
    box-sizing: border-box;
  `}
`;