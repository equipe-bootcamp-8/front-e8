import * as Styled from "./styles";
import { Product } from "../../types";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductsCard = ({ product }: ProductCardProps) => {
let Navigate = useNavigate();

  return (
    <Styled.ProductsCardList >
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button> See details</button>
      <button
      onClick={()=> {
        Navigate(`/productdetails/${product.id}`);
      }}> details test </button>
    </Styled.ProductsCardList>
  );
};

export default ProductsCard;
