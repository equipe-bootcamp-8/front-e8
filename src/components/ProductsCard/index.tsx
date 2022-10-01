import * as Styled from "./styles";
import { Product } from "../../types";

interface SettingsProductCardProps {
  product: Product | any;
}

const ProductsCard = ({ product }: SettingsProductCardProps) => {
  return (
    <Styled.ProductsCardList>
      <img src={product.image} alt={product.name} />
      <h3>{ProductsCard.name}</h3>
      <p>{product.description}</p>
      <button> See details</button>
    </Styled.ProductsCardList>
  );
};

export default ProductsCard;
