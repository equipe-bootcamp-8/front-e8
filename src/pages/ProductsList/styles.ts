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
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Filter = styled.section`
  width: 15%;
  margin: 0 3rem;
  padding: 4rem 0.7rem 0 0;
  border-right: 1px black solid;

  h3 {
    margin: 0 0 1rem -1.5rem;
  }

  p {
    margin: 2rem 0 0.5rem 0;
  }
`;

export const ButtonsContainer = styled.div`
  margin: 0.6rem 0 0.5rem 0;

  button {
    padding: 1rem;
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
`;
