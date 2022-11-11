import { SearchIcon } from "assets/icons";
import ProductsCard from "components/ProductsCard";
import * as Styled from "./styles";
import meeting from "../../assets/imgs/meeting.png";
import { useProducts } from "contexts/products";
import { useEffect, useState } from "react";
import { useCategories } from "contexts/categories";
import { Category, Product } from "types";
import * as gStyled from "../../assets/styles/globalStyles";

const ProductsList = () => {
  const { products } = useProducts();
  const { categories } = useCategories();
  const [search, setSearch] = useState("");

  const [minPrice, setMinPrice] = useState(
    products[0]?.price || ({} as Product)
  );

  const [maxPrice, setMaxPrice] = useState(
    products[0]?.price || ({} as Product)
  );

  const [currentFilter, setCurrentFilter] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState<any>(
    categories[0] || ({} as Category)
  );

  const [filteredProducts, setFilteredProducts] = useState([{}]);

  useEffect(() => {
    const filterProducts = () => {
      return products.filter((element) => {
        if (minPrice <= element.price && element.price <= maxPrice) {
          return element;
        }
      });
    };
    setFilteredProducts(filterProducts());
  }, [maxPrice, minPrice, products]);

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

          <h3>Filters</h3>
          <p>Price Range</p>

          <input
            type="radio"
            name="price"
            id="priceone"
            onChange={() => {
              setMinPrice(1);
              setMaxPrice(350);
              setCurrentFilter(1);
            }}
          />
          <label htmlFor="priceone"> Up to 350,00</label> <br />
          <input
            type="radio"
            name="price"
            id="pricetwo"
            onChange={() => {
              setMinPrice(351);
              setMaxPrice(600);
              setCurrentFilter(1);
            }}
          />
          <label htmlFor="pricetwo"> 350,00 - 600,00</label> <br />
          <input
            type="radio"
            name="price"
            id="pricethree"
            onChange={() => {
              setMinPrice(601);
              setMaxPrice(1000);
              setCurrentFilter(1);
            }}
          />
          <label htmlFor="pricethree"> 600,00 - 1000,00</label> <br />
          <input
            type="radio"
            name="price"
            id="pricefour"
            onChange={() => {
              setMinPrice(1001);
              setMaxPrice(9999999);
              setCurrentFilter(1);
            }}
          />

          <label htmlFor="pricefour"> Over 1000,00</label> <br />
          <p>Collection</p>

          {categories.length > 0 &&
            categories.map((element) => (
              <Styled.ButtonsContainer>
                <label htmlFor={element.name}>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      setSelectedCategory(element);
                    }}
                  >
                    {element.name}
                  </button>
                </label>
              </Styled.ButtonsContainer>
            ))}
          <Styled.ClearButton
            type="reset"
            onClick={() => {
              setSelectedCategory([]);
              setMinPrice(0);
              setMaxPrice(999999999);
            }}
          >
            Clear
          </Styled.ClearButton>
        </Styled.Filter>
        <section>
          <Styled.HeaderProductList>
            <gStyled.SearchProduct>
              <div>
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search by NFT name..."
                onChange={(event) => setSearch(event.target.value)}
              />
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
              .filter((element) => {
                if (currentFilter == 0) {
                  return element;
                }
                if (minPrice <= element.price && element.price <= maxPrice) {
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
