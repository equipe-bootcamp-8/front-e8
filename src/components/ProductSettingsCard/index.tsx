import { Product } from "types";
import * as styled from "./styles";

interface SettingsProductCardProps {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product | undefined>>;
  handleOpenModal: () => void;
  handleOpenDeleteModal: () => void;
}


const ProductSettingsCard = ({
  product, setProduct, handleOpenModal, handleOpenDeleteModal
}: SettingsProductCardProps) => {
  return (
    <styled.ProductSettingsCardContainer>
      <h3>{product.code}</h3>
      <h3>{product.name}</h3>
      <h3>{product.categoryName}</h3>
      <h3>{product.price}</h3>
      <img src={product.image} alt={product.name} />
      <div>
        <styled.ProductSettingsEditCardButton
          onClick={() => {
            setProduct(product);
            handleOpenModal();
          }}
        >
          Edit
        </styled.ProductSettingsEditCardButton>
        <styled.ProductSettingsDeleteCardButton
          onClick={() => {
            setProduct(product);
            handleOpenDeleteModal();
          }}
        >
          Delete
        </styled.ProductSettingsDeleteCardButton>
      </div>
    </styled.ProductSettingsCardContainer>
  );
};

export default ProductSettingsCard;
