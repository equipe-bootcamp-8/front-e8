import ProductsCard from "components/ProductsCard";
import * as Styled from "./styles";

const ProductsList = () => {
  return (
    <div>
      <Styled.LaterMenu />
      <div>
        <input type="text" />
      </div>

      <ProductsCard />
    </div>
  );
};

export default ProductsList;
