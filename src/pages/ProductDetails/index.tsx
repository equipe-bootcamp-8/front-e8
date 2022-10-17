import { SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "services";
import { Product } from "types";
import * as styled from "./styles";

const ProductDetails = () => {
  const [product, setProduct] = useState<Product>({} as Product);
  const { productId } = useParams();

  const handleGetProductById = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get(`/products/${productId}`, headers)
      .then((res: { data: SetStateAction<Product> }) => {
        setProduct(res.data);
      });
  };

  useEffect(() => {
    handleGetProductById();
  }, []);

  return (
    <styled.DetailsContainer>
      <styled.ProductHeader>
        <styled.ProductImage src={product?.image} />
        <div>
          <h5>{product.categoryName}</h5>
          <h1>{product.name}</h1>
          <p>Preço</p>
          <h2>{product.price} C$</h2>
        </div>
      </styled.ProductHeader>
      <styled.ProductDetails>
        <div>
          <p>{product.description}</p>
        </div>
        <h1>
          {product.available
            ? "Disponivel em estoque"
            : "Nao esta disponivel em estoque"}
        </h1>
      </styled.ProductDetails>
    </styled.DetailsContainer>
  );
};

export default ProductDetails;
