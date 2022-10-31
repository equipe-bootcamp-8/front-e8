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

        <h1>Description</h1>
        <styled.Description>

          <p>{product.description}</p>
        </styled.Description>
      </styled.ProductHeader>
      <styled.ProductContainer>
        <styled.ProductDetails>
        <div>
          <h3>Code</h3>
          <h2>{product.code}</h2>
        </div>
        <h1>{product.name}</h1>
        <div>
          <h3>Category</h3>
          <h1>{product.categoryName}</h1>
        </div>
        <div>
          <h4>Current price</h4>
          <h2>{product.price}</h2>
        </div>
        </styled.ProductDetails>
       
      </styled.ProductContainer>

    </styled.DetailsContainer>
  );
};

export default ProductDetails;
