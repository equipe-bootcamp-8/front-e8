import styled, { css } from "styled-components";


export const Container = styled.div`
  ${() => css`
    width: 550px;
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
    margin-top: 3rem;
    width: 100%;
    height: 5rem;
  `}
`;
