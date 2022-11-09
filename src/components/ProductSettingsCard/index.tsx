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
      <div>
      <h3>{product.code}</h3>
      </div>
 <div>
 <h3>{product.name}</h3>
 </div>
     <div>
     <h3>{product.categoryName}</h3>
     </div>
     <div>
     <h3>{product.price}</h3>
     </div>
     <div>
     <img src={product.image}/> 
     </div>
  
      <section>
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
      </section>
    </styled.ProductSettingsCardContainer>
  );
};

export default ProductSettingsCard;
