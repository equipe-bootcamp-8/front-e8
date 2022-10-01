import { Product } from "types";
import * as styled from "./styles";

interface SettingsProductCardProps {
  product: Product | any; 
}


const ProductSettingsCard = ({
  product
}: SettingsProductCardProps) => {
  return (
    <styled.ProductSettingsCardContainer>
      <img src={product.image}/> 
      <h3>{product.name}</h3>
      <div>
        <styled.ProductSettingsEditCardButton>
          Edit
        </styled.ProductSettingsEditCardButton>
        <styled.ProductSettingsDeleteCardButton>
          Delete
        </styled.ProductSettingsDeleteCardButton>
      </div>
    </styled.ProductSettingsCardContainer>
  );
};

export default ProductSettingsCard;
