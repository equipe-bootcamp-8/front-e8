import styled, { css } from "styled-components";

export const DeleteModalContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 20vh;
    border-radius: 8px;
    background-color: ${theme.colors.baseBg1};
    margin: 0;
    padding: 0;
    text-align: center;
    color: ${theme.colors.textColor};
    gap: 3rem;
    section {
      display: flex;
      margin-left: 3rem;
      gap: 1rem;
    }
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
  background-color: ${theme.colors.baseBgRed};
img {
  width: 3rem;
  cursor: pointer;
}
  h2 {
    color: ${theme.colors.textColor2};
  }
  `}
`;


export const ButtonList = styled.div`
  ${() => css`
  display: flex;
      justify-content: space-around;
      width: 100%;
  `}
`;