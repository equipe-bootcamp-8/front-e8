import styled, { css } from "styled-components";

export const DetailsContainer = styled.div`
  ${({ theme }) => css`
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.baseBg1};
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 0;
    gap: 4rem;
  `}
`;

export const ProductHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    }
  `}
`;

export const ProductImage = styled.img`
  ${({ theme }) => css`
    width: 45rem;
    height: 45rem;
    border-radius: 2rem;
  `}
`;

export const ProductContainer = styled.div`
  ${({ theme }) => css`
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 45rem;
    height: 35rem;
    border-radius: 12px;
    border: 2px solid #adadb1;
    background-color: #ffeded;
    h3 {
      font-weight: 400;
    }
  `}
`;

export const ProductDetails = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    width: 45rem;
    height: 20rem;
    border-radius: 12px;
    border: 2px solid #adadb1;
    background-color: #ffeded;
    p {
      font-size: 2rem;
      padding: 1.5rem;
    }
  `}
`;
