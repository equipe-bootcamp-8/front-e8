import * as Styled from "./styles";
import { Product } from "../../types";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductsCard = ({ product }: ProductCardProps) => {
  let Navigate = useNavigate();

  return (
    <Styled.ProductsCardList
      onClick={() => {
        if (localStorage.getItem("token")) Navigate(`/productdetails/${product.id}`);
      }}
    >
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <h3>{product.categoryName}</h3>
      <div>
        <h4>Price:</h4>
        <h3>${product.price}</h3>
      </div>
    </Styled.ProductsCardList>
  );
};

export default ProductsCard;
