import * as Styled from "./styles";

const ProductsCard = () => {
  return (
    <Styled.ProductsCardList>
      <img src="https://www.infomoney.com.br/wp-content/uploads/2022/01/FJkLjuCXMAYC1MO.jpg?resize=916%2C515&quality=50&strip=all" alt="img-test" />
      <h3>Product Name</h3>
      <h5>Product Category</h5>
      {/* <p>Product descri aslkjdh çasldjas alsdkjasd asldkjasd asldkjasd ...</p> */}
      <button> See details</button>
    </Styled.ProductsCardList>
  );
};

export default ProductsCard;
