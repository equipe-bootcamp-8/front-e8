import { SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "services";
import { Product } from "types";
import * as styled from "./styles";


interface ProductDetailsProps {
    logged?: boolean | any;
}

const ProductDetails = ({ logged }: ProductDetailsProps) => {
const [product, setProduct] = useState<Product>({} as Product);
const {productId} = useParams();
logged(true);

const handleGetProductById = () => {
  const token = localStorage.getItem("token");
  
  const headers = { 
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  
  api.
  get(`/products/${productId}`, headers)
  .then((res: { data: SetStateAction<Product>; }) => {
    setProduct(res.data);
  });
}

useEffect(() => {
  handleGetProductById();
},
[]);

  return (
    <styled.DetailsContainer>
    <img src={product?.image} />
    <h1>{product.name}</h1>
    <h2>{product.price}</h2>
    <h5>{product.categoryId}</h5>
    <p>{product.description}</p>

    </styled.DetailsContainer>
  )
}

export default ProductDetails;