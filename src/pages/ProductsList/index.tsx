import { SearchIcon } from "assets/icons";
import ProductsCard from "components/ProductsCard";
import * as Styled from "./styles";
import meeting from "../../assets/imgs/meeting.png";
import { useProducts } from "contexts/products";
import { useState } from "react";
import { Product } from "types";


// interface ProductsListProps {
//   logged?: boolean | any;
// }

 const ProductsList = () => {
  const { products } = useProducts();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  
  // logged(false);

  return (
    <div>
      <Styled.LaterMenu>
        <img src={meeting} alt="Metting foto" />
        <Styled.LaterMenuLetters>
          <h1>
            CloudWalk
            <hr />
            E-Commerce Manager
          </h1>
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
