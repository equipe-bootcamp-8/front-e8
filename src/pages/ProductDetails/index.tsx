import { SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "services";
import { Product } from "types";
import * as styled from "./styles";




const ProductDetails = () => {
const [product, setProduct] = useState<Product>({} as Product);
const {productId} = useParams();


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
    <div>
<styled.DetailsContainer>
        <styled.ProductHeader>
        <styled.ProductImage src={product?.image} />
         <h1>{product.name}</h1>
        </styled.ProductHeader>
        <styled.ProductDetails> 
        <div>
    <h2>{product.price}</h2>
    <h5>{product.categoryName}</h5>
    <p>{product.description}</p>
      </div> 
      </styled.ProductDetails>
    </styled.DetailsContainer>
    </div>
    
  )
}

export default ProductDetails;