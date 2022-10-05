import styled from "styled-components";

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
  width: 90vw;
  height: 9%;
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

export const SearchProductList = styled.div`
  border: 1px #b6b6b6 solid;
  width: 25rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 1rem;
  div {
    margin: 0 0.5rem 0 1rem;
  }
  input {
    border: none;
    width: 21rem;
    margin: 0 1rem 0 1.3rem;
    outline: none;
    font-size: 1.6rem;
  }
`;

export const LaterMenuLetters = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: center;
  h1 {
    margin: 1rem 0;
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

export const ProductList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;