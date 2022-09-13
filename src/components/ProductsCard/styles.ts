import styled from "styled-components";

export const ProductsCardList = styled.div`
  width: 17rem;
  height: 20rem;
  border: none black solid;
  border-radius: 3rem;
  text-align: center;
  margin: 10rem 3rem 0 10rem;
  transition: all 0.5s;

  :hover {
    transform: scale(1.2);
  }
  h3 {
    margin: 1.4rem 0 0 0;
  }

  h5 {
    margin: 1.4rem 0 0 0;
  }

  p {
    margin: 1.4rem 0 0 0;
  }

  button {
    margin: 1.4rem 0 0 0;
    width: 14rem;
    height: 3rem;
    border: none;
    border-radius: 1rem;
    background-color: #3c41f5;
    color: white;
    cursor: pointer;
  }
`;
