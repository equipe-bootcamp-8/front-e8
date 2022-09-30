import styled from "styled-components";

export const ProductsCardList = styled.div`
  width: 23rem;
  height: 25rem;
  border: none black solid;
  border-radius: 0.563rem;
  text-align: center;
  margin: 10rem 3rem 0 10rem;
  transition: all 0.3s;
  background: #F8F8F8;
  box-shadow: 0px 4px 4px #000000;
  img {
    border-radius: 0.563rem 0.563rem 0 0 ;
  }
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
    width: 90%;
    height: 3rem;
    border: none;
    border-radius: .5rem;
    background-color: #3c41f5;
    color: white;
    cursor: pointer;
  }
`;
