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
