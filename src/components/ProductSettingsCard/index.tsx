import * as styled from "./styles";

const ProductSettingsCard = () => {
  return (
    <styled.ProductSettingsCardContainer>
      <img /> 
      <h3>Product</h3>
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
