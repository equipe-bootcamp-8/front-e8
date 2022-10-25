import * as Styled from "./styles";
import { Product } from "../../types";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  list: Product[];
}

const ProductsCard = ({ product, list }: ProductCardProps) => {
  let Navigate = useNavigate();

  return (
    <Styled.ProductsCardList
      onClick={() => {
        Navigate(`/productdetails/${product.id}`);
      }}
    >
      {list.map((element) => (
        <>
          <img src={element.image} alt={element.name} />
          <h3>{element.name}</h3>
          <h3>Product Category</h3>
          <div>
            <h4>Price:</h4>
            <h3>${element.price}</h3>
          </div>
        </>
      ))}
    </Styled.ProductsCardList>
  );
};

export default ProductsCard;
