import styled, { css } from "styled-components";
import backgroundDetails from "../../assets/imgs/product-detailsbg.png";

export const DetailsContainer = styled.div`
  ${({ theme }) => css`
  margin:0;
  padding:0;
	background-color: #fafafa;
	height: calc(100vh - 72.5px);
	width: 100vw;
    
  `}
`;

export const ProductHeader = styled.div`
  ${({ theme }) => css``}
  margin-top: 2rem;
  gap: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ProductDetails = styled.div`
  ${({ theme }) => css``}
  margin: 2rem 5rem 0 5rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductImage = styled.img`
  ${({ theme }) => css`
    width: 35rem;
    height: 35rem;
  `}
`;
