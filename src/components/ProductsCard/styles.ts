import styled, { css } from "styled-components";

export const ProductsCardList = styled.div`
  ${({theme }) => css`
  cursor: pointer;
  width: 23rem;
  height: 35rem;
  border: none black solid;
  border-radius: 0.563rem;
  text-align: center;
  margin: 4rem 1rem 0 5rem;
  transition: all 0.3s;
  background: #F8F8F8;
  box-shadow: 0px 4px 4px #000000;
  text-align: left;
  img {
    border-radius: 0.563rem 0.563rem 0 0 ;
    width: 23rem;
    height: 25rem;
    object-fit: cover;
  }
  :hover {
    transform: scale(1.1);
  }

  h3 { 
    margin: .5rem 0 0 1rem;
  }

  div {
    margin: 1rem 1rem 0 1rem;
    display: flex;
    justify-content: space-between;
    h4 { 
      color: ${theme.colors.textLight};
    }
  }
  button {
    margin: 1.4rem 0 0 0;
    width: 90%;
    height: 3rem;
    border: none;
    border-radius: .5rem;
    background-color: #3c41f5;
    color: white;
    cursor: pointer;
  }
  `}

`;
