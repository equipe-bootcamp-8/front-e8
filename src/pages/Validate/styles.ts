import styled, { css } from "styled-components";
import bglogin from "../../assets/imgs/bglogin.png";

export const Background = styled.div`
  background-image: url(${bglogin});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10vh);
`;

export const Container = styled.div`
  ${() => css`
    width: 750px;
    height: 427px;
    left: 308px;
    top: 171px;
    background: #bfcde9;
    border-radius: 10px;
    padding: 3rem;
  `}
`;

export const Copy = styled.div`
  ${() => css`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 2rem;
    gap: 3rem;
    width: 332px;
    height: 247px;
  `}
`;

export const ConfirmButton = styled.button`
  ${({theme}) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: ${theme.colors.baseMainBlue};
    color: ${theme.colors.textColor2};
    font-size: 1.9rem;
    border-radius: 12px;
    margin-top: 4rem;
    width: 100%;
    height: 5rem;
  `}
`;
