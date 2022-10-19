import styled, { css } from "styled-components";
import backgroundDetails from "../../assets/imgs/product-detailsbg.png";

export const DetailsContainer = styled.div`
  ${({ theme }) => css`
    margin: 0;
    padding: 0;
    background-image: url(${backgroundDetails});
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    height: calc(100vh - 10vh);
    width: 100vw;
    overflow-y: hidden;
  `}
`;

export const ProductHeader = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    gap: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;

    div {
      height: 50vh;
      display: flex;
      flex-direction: column;

      h1 {
        margin: 2rem 0 2rem 0;
      }

      h5 {
        margin: 7rem 0 0;
      }

      p {
        margin: -2rem 0;
      }

      h2 {
        margin: 3rem 0;
      }
    }
  `}
`;

export const ProductImage = styled.img`
  ${({ theme }) => css`
    width: 35rem;
    height: 35rem;
    margin: 7rem 12rem 0 -20rem;
    border-radius: 2rem;
  `}
`;

export const ProductDetails = styled.div`
  ${({ theme }) => css`
    margin: 2rem 5rem 0 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      width: 60%;
    }

    h1 {
    }
  `}
`;


