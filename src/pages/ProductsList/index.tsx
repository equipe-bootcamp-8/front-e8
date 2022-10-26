import { SearchIcon } from "assets/icons";
import ProductsCard from "components/ProductsCard";
import * as Styled from "./styles";
import meeting from "../../assets/imgs/meeting.png";
import { useProducts } from "contexts/products";
import { useState } from "react";
import { useCategories } from "contexts/categories";
import { Category, Product } from "types";

// interface ProductsListProps {
//   logged?: boolean | any;
// }

const ProductsList = () => {
  const { products } = useProducts();
  const { categories } = useCategories();
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0] || ({} as Category)
  );

  const filteredProductsByCategory: Product[] = products.filter(
    (element) =>
      selectedCategory && element.categoryName === selectedCategory.name
  );

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
      <Styled.FilterContainer>
        <Styled.Filter>
          <h3>Selected Filters</h3>
          <p>Preço</p>
          <input type="range" name="preco" id="preco" />
          <p>Coleção</p>
          {categories.length > 0 &&
            categories.map((element) => (
              <Styled.ButtonsContainer>
                <label htmlFor={element.name}>
                  <input
                    type="checkbox"
                    placeholder={element.name}
                    id={element.name}
                    onChange={() => {
                      console.log(element.name);
                      setSelectedCategory(element);
                    }}
                  />
                  {element.name}
                </label>
              </Styled.ButtonsContainer>
            ))}
          <input type="button" value="Filtrar" />
        </Styled.Filter>
        <section>
          <Styled.HeaderProductList>
            <Styled.SearchProductList>
              <div>
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search by NFT name..."
                onChange={(event) => setSearch(event.target.value)}
              />
            </Styled.SearchProductList>
          </Styled.HeaderProductList>
          <Styled.ProductList>
            {products
              .filter((element) => {
                if (search === "") {
                  return element;
                } else if (
                  element.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return element;
                }
              })
              .map((element) => (
                <ProductsCard product={element} key={element.id} />
              ))}
          </Styled.ProductList>
        </section>
      </Styled.FilterContainer>
    </div>
  );
};

export default ProductsList;