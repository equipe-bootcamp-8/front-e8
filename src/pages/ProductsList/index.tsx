import { SearchIcon } from "assets/icons";
import ProductsCard from "components/ProductsCard";
import * as Styled from "./styles";
import meeting from "../../assets/imgs/meeting.png";
import { useProducts } from "contexts/products";

// interface ProductsListProps {
//   logged?: boolean | any;
// }

const ProductsList = () => {
  const { products } = useProducts();

  // logged(false);

  return (
    <div>
      <Styled.LaterMenu>
        <img src={meeting} alt="Metting foto" />
        <Styled.LaterMenuLetters>
          <h1>CloudWalk</h1>
          <hr />
          <h2>E-commerce Manager</h2>
          <br />
          <h4>
            Register new products, create <hr />
            promotions and update information on <hr />a single platform.
          </h4>
        </Styled.LaterMenuLetters>
      </Styled.LaterMenu>
      <Styled.HeaderProductList>
        <Styled.SearchProductList>
          <div>
            <SearchIcon />
          </div>
          <input type="text" />
        </Styled.SearchProductList>
        <button>Sort By</button>
      </Styled.HeaderProductList>
      <Styled.ProductList>
      {products.map((element) =>
       <ProductsCard 
       product={element}
       key={element.id}
       />
      )}
      </Styled.ProductList>
    </div>
  );
};

export default ProductsList;
