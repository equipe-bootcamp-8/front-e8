import { useForm } from "react-hook-form";
import * as Styled from "./styles";
import * as yup from "yup";
import { useState } from "react";
import toast from "react-hot-toast";
import { useProducts } from "contexts/products";
import { Product, Category } from "types";
import api from "services";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonLarge from "components/ButtonLarge";
import { useCategories } from "contexts/categories";
import CloseIcon from "assets/icons/closeicon.svg";
import { ModalOverlay } from "assets/styles/globalStyles";

/* HOOKFORM */
interface ProductModalProps {
  handleOpenModal: () => void;
  product?: Product;
  category?: Category;
  setProduct: React.Dispatch<React.SetStateAction<Product | undefined>>;
}

interface ProductData {
  code?: string;
  name?: string;
  description?: string;
  categoryName?: string;
  price?: number;
  image?: string;
  available?: boolean;
}

const newProductSchema = yup.object().shape({
  code: yup.number().required("Code is required"),

  name: yup.string().required("Product name is required"),

  description: yup.string().required("Product description is required"),

  price: yup.number().required("Price is required"),

  image: yup
    .string()
    .url("Invalid URL format")
    .required("Product cover image is required"),

  available: yup
    .boolean()
    .required("Choose if the product is available or not."),
});

const updateProductSchema = yup.object().shape({
  code: yup.number(),

  name: yup.string(),

  description: yup.string(),

  price: yup.number(),

  image: yup.string(),

  available: yup.boolean(),
});

const ProductModal = ({
  handleOpenModal,
  product,
  setProduct,
}: ProductModalProps) => {
  const { handleGetProducts } = useProducts();
  const { categories, handleGetCategories } = useCategories();
  const [categoryName, setcategoryName] = useState<string>(
    product ? product.categoryName : ""
  );

  /* useForm */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductData>({
    resolver: yupResolver(product ? newProductSchema : updateProductSchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewProduct = (data: ProductData) => {
    data.categoryName = categoryName;
    api
      .post(`/products`, data, headers)
      .then(() => {
        toast.success("Product added succesfully!");
        handleGetProducts();
        handleOpenModal();
        setProduct(undefined);
      })
      .catch(() => toast.error("Select a category!"));
  };

  const handleUpdateProduct = (data: ProductData) => {
    data.categoryName = categoryName;
    api.patch(`/products/${product?.id}`, data, headers).then(() => {
      toast.success("Product updated succesfully!");
      handleGetProducts();
      handleOpenModal();
      setProduct(undefined);
    });
  };

  return (
    <ModalOverlay>
      <Styled.ModalContainer
        onSubmit={
          product
            ? handleSubmit(handleUpdateProduct)
            : handleSubmit(handleNewProduct)
        }
      >
        <Styled.ModalHeader>
          <h2>{product ? "Update" : "Register"}</h2>
         
         <Styled.ButtonsContainer>
          <ButtonLarge
            value={"Cancel"}
            variant="cancel-blue"
            onClick={() => {
              handleOpenModal();
              setProduct(undefined);
            }}
          />
           <ButtonLarge value={"Send"} type="submit" />
        </Styled.ButtonsContainer> 
        </Styled.ModalHeader>
        
        <Styled.Form>
           <Styled.FormHeader>
          <img
            src={CloseIcon}
            alt="close-icon"
            onClick={() => {
              handleOpenModal();
              setProduct(undefined);
            }}
          />
          </Styled.FormHeader> 

        <div>
        <Styled.InputContainer>
          <label>Product Code</label>
          <Styled.Input
            defaultValue={product ? product.code : ""}
            placeholder="Code"
            {...register("code")}
          />
        </Styled.InputContainer>

        <Styled.InputContainer>
          <label>Product Name</label>
          <Styled.Input
            defaultValue={product ? product.name : ""}
            placeholder="Name"
            {...register("name")}
          />
        </Styled.InputContainer>

        <Styled.InputContainer>
          <label>Price</label>
          <Styled.Input
            defaultValue={product ? product.price : ""}
            placeholder="Price"
            {...register("price")}
          />
        </Styled.InputContainer>

        <Styled.InputContainer>
          <label>Product Category</label>
          <Styled.Select
            value={categoryName}
            onChange={(e) => setcategoryName(e.target.value)}
          >
            <option>Select a category </option>
            {categories.map((element) => (
              <option value={element.name}>{element.name}</option>
            ))}
          </Styled.Select>
        </Styled.InputContainer>

        <Styled.InputContainer>
          <label>Description</label>
          <Styled.DescriptionInput
            
            defaultValue={product ? product.description : ""}
            placeholder="Description"
            {...register("description")}
          />
        </Styled.InputContainer>

        <Styled.InputContainer>
          <label>Product Image</label>
          <Styled.Input
      
            defaultValue={product ? product.image : ""}
            placeholder="Image URL"
            {...register("image")}
          />
        </Styled.InputContainer>

        <Styled.InputContainer>
          <label>Product is available?</label>
          <input
            type="checkbox"
            placeholder="Available"
            defaultChecked={product ? product.available : true}
            {...register("available")}
          />
        </Styled.InputContainer>
        </div>
  
        </Styled.Form>
        
 
      </Styled.ModalContainer>
    </ModalOverlay>
  );
};

export default ProductModal;