import { SearchIcon } from "assets/icons";
import ProductsCard from "components/ProductsCard";
import * as Styled from "./styles";
import meeting from "../../assets/imgs/meeting.png";
import { useProducts } from "contexts/products";
import { useState } from "react";

// interface ProductsListProps {
//   logged?: boolean | any;
// }

const ProductsList = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");

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
          <input type="text" placeholder="Search by NFT name..." onChange={(event) => setSearch(event.target.value)} />
        </Styled.SearchProductList>
        <button>Sort By</button>
      </Styled.HeaderProductList>
      <Styled.ProductList>
        {products
          .filter((element) => {
            if (search === "") {
              return element;
            } else if (element.name.toLowerCase().includes(search.toLowerCase())) {
              return element;
            }
          })
          .map((element) => (
            <ProductsCard product={element} key={element.id} />
          ))}
      </Styled.ProductList>
    </div>
  );
};

export default ProductsList;
