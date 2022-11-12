import styled, { css } from "styled-components";
import bg from "../../assets/imgs/bglogin.png"

export const Background = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10vh);
`;

export const Container = styled.form`
  ${() => css`
    width: 50rem;
    height: 30rem;
    background: #bfcde9;
    border-radius: 10px;
    padding: 2rem;
  `}
`;

export const FormHeader = styled.section`
  ${({theme}) => css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    img {
      color: ${theme.colors.textColor};
      width: 3rem;
      cursor: pointer;
}
  `}
`;

export const Copy = styled.div`
  ${() => css`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 2rem;
    gap: 1rem;
  `}
`;

export const Button = styled.button`
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
    margin-top: 3rem;
    width: 100%;
    height: 5rem;
  `}
`;

