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

  const [inputValue, setInputValue] = useState<boolean>(false);

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
  }, [maxPrice]);

  console.log(filteredProducts);
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
          <p>Price</p>
          <input
            type="radio"
            name="price"
            id="priceone"
            onChange={() => {
              setMinPrice(0);
              setMaxPrice(350);
            }}
          />
          <label htmlFor="priceone"> Até 350,00</label> <br />
          <input
            type="radio"
            name="price"
            id="pricetwo"
            onChange={() => {
              setMinPrice(351);
              setMaxPrice(600);
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
            }}
          />
          <label htmlFor="pricefour"> Acima de 1000,00</label> <br />
          <p>Colection</p>
          {categories.length > 0 &&
            categories.map((element) => (
              <Styled.ButtonsContainer>
                <label htmlFor={element.name}>
                  <button
                    onClick={() => {
                      setSelectedCategory(element);
                    }}
                  >
                    {element.name}
                  </button>
                </label>
              </Styled.ButtonsContainer>
            ))}
          <button
            onClick={() => {
              setSelectedCategory([]);
              setMaxPrice(maxPrice);
              setMinPrice(0);
              setInputValue(false);
            }}
          >
            Clear
          </button>
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
                if (minPrice <= element.price && element.price <= maxPrice) {
                  return element;
                }
                // if (maxPrice) {
                //   return element;
                // }
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
