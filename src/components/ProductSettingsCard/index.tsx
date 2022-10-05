import { Product } from "types";
import * as styled from "./styles";

interface SettingsProductCardProps {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product | undefined>>;
}


const ProductSettingsCard = ({
  product, setProduct
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
