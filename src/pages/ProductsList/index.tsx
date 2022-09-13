import ProductsCard from "components/ProductsCard";
import * as Styled from "./styles";

const ProductsList = () => {
  return (
    <div>
      <Styled.LaterMenu />
      <div>
        <div>
          <i className="bi bi-search"></i>
          <input type="text" />
        </div>
        <button>Sort By</button>
      </div>
      <ProductsCard />
    </div>
  );
};

export default ProductsList;
