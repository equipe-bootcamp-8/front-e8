import styled, { css } from "styled-components";

export const LaterMenu = styled.div`
  width: 100%;
  height: 30rem;
  background-color: #3c41f5;
  display: flex;
  
  img {
    width: 50rem;
    height: 33.35rem;
  }
`;

export const HeaderProductList = styled.header`
  width: 70vh;
  margin: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 10rem;
    height: 4rem;
    background-color: #3c41f5;
    color: white;
    border: none;
    border-radius: 0.7rem;
    cursor: pointer;
    transition: all 0.6s;
  }
  button:hover {
    transform: scale(1.1);
  }
`;

export const LaterMenuLetters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  h1 {
    color: #fff;
    text-align: left;

    hr {
      border: none;
    }
  }

  h4 {
    margin: 1rem 0;
    hr {
      border: none;
    }
  }
`;

export const FilterContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  section:nth-child(2) {
    display: flex;
    flex-direction: column;
    width: 80%;
    @media screen and (max-width: 1280px) {
      width: 70%;
    }
  }
`;

export const ProductList = styled.div`
  margin: 0 0 5rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  
`;

export const Filter = styled.section`
  ${({ theme }) => css`
    width: 10%;
    margin: 0 3rem;
    padding: 4rem 0.7rem 0 0;
    border-right: 1px black solid;
    @media screen and (max-width: 1280px) {
      width: 15%;
    }

    h3 {
      margin: 0 0 1rem -1.5rem;
    }

    p {
      margin: 2rem 0 0.5rem 0;
    }

    button {
      margin: 0.438rem 0;
      border-radius: 0.625rem;
      background-color: ${theme.colors.bgGreen};
      color: white;
      width: 10rem;
      height: 3rem;
      border: 1px black solid;
      cursor: pointer;
      transition: all 0.5s;
    }

    button:hover {
      transform: scale(1.08);
    }
  `}
`;

export const ButtonsContainer = styled.div`
  margin: 0.6rem 0 0.5rem 0;

  button {
    width: 16rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 3rem;
    border: 1px black solid;
    border-radius: 0.8rem;
    background-color: #3c41f5;
    color: white;
    transition: 0.5s all;
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.1);
  }

  button:focus {
    background-color: #3c4167;
    transform: scale(1.1);
  }
`;

export const ClearButton = styled.button`
  ${() => css`
   
  `}
`;
