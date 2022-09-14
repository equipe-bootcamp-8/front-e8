import { SearchIcon } from "assets/icons";
import ProductsCard from "components/ProductsCard";
import * as Styled from "./styles";

const ProductsList = () => {
  return (
    <div>
      <Styled.LaterMenu />
      <Styled.HeaderProductList>
        <Styled.SearchProductList>
          <div>
            <SearchIcon />
          </div>
          <input type="text" />
        </Styled.SearchProductList>
        <button>Sort By</button>
      </Styled.HeaderProductList>
      <ProductsCard />
    </div>
  );
};

export default ProductsList;
