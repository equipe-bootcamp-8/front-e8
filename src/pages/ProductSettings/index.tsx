import ProductSettingsCard from "components/ProductSettingsCard";
import SettingsMenu from "components/SettingsMenu";
import * as styled from "./styles";


interface ProductSettingsProps {
  logged?: boolean | any;
}

const ProductSettings = ({ logged }: ProductSettingsProps) => {
  logged(true);
  return (
    <styled.SettingsContainer>
      <SettingsMenu path={"products"} />
      <styled.EditEntitiesContainer>
        <h2>Manage Products</h2>
        <styled.SearchInputContainer>
          <input
          /*  value={searchInputValue}
              onChange={(e) => setSearchInputValue(e.target.value)}
              placeholder="Procure pelo sabor" */
          />
        </styled.SearchInputContainer>
        <styled.EntitiesEditList>
          <styled.AddEntitieCard>
            <h2>+</h2>
            <p>Add Product</p>
          </styled.AddEntitieCard>

          <ProductSettingsCard />
        </styled.EntitiesEditList>
      </styled.EditEntitiesContainer>
    </styled.SettingsContainer>
  );
};

export default ProductSettings;
