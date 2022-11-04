import { SearchIcon } from "assets/icons";
import ProductsCard from "components/ProductsCard";
import * as Styled from "./styles";
import meeting from "../../assets/imgs/meeting.png";
import { useProducts } from "contexts/products";
import { useEffect, useState } from "react";
import { useCategories } from "contexts/categories";
import { Category } from "types";
import * as gStyled from "../../assets/styles/globalStyles";

const ProductsList = () => {
  const { products } = useProducts();
  const { categories } = useCategories();
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<any>(
    categories[0] || ({} as Category)
  );

  console.log(categories);

  useEffect(() => {}, []);

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
                    type="radio"
                    placeholder={element.name}
                    id={element.name}
                    name="filterCategories"
                    onChange={() => {
                      setSelectedCategory(element);
                    }}
                  />{" "}
                  {element.name}
                </label>
              </Styled.ButtonsContainer>
            ))}
          <input type="button" value="Filtrar" />
          <button onClick={() => setSelectedCategory([])}>Clear</button>
        </Styled.Filter>
        <section>
          <Styled.HeaderProductList>
            <gStyled.SearchProduct>
              <div>
                <SearchIcon />
              </div>
              <input type="text" placeholder="Search by NFT name..." onChange={(event) => setSearch(event.target.value)} />
            </gStyled.SearchProduct>
          </Styled.HeaderProductList>
          <Styled.ProductList>
            {products
              .filter((element) => {
                if (element.name.toLowerCase().includes(search.toLowerCase())) {
                  return element;
                } else return false;
              })
              .filter((element) => {
                if (!selectedCategory.name) {
                  return element;
                }
                if (selectedCategory.name === element.categoryName) {
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
