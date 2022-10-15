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
  const [categoryName, setCategoryName] = useState<string>(
    product ? product.categoryName : ""
  );

  /* useForm */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductData>({
    resolver: yupResolver(product ? updateProductSchema : newProductSchema),
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
    <Styled.Modal>
      <Styled.ModalContainer
        onSubmit={
          product
            ? handleSubmit(handleUpdateProduct)
            : handleSubmit(handleNewProduct)
        }
      >
        <h2>{product ? "Update Product" : "Register a new product"}</h2>

        <Styled.Input
          defaultValue={product ? product.code : ""}
          placeholder="Code"
          {...register("code")}
        />

        <Styled.Input
          defaultValue={product ? product.name : ""}
          placeholder="Name"
          {...register("name")}
        />

        <Styled.Input
          defaultValue={product ? product.description : ""}
          placeholder="Description"
          {...register("description")}
        />

        <Styled.Select
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        >
          <option>Select a category </option>
          {categories.map((element) => (
            <option value={element.name}>{element.name}</option>
          ))}
        </Styled.Select>

        <Styled.Input
          defaultValue={product ? product.price : ""}
          placeholder="Price"
          {...register("price")}
        />

        <Styled.Input
          defaultValue={product ? product.image : ""}
          placeholder="Image URL"
          {...register("image")}
        />

        <input
          type="checkbox"
          placeholder="Available"
          defaultChecked={product ? product.available : true}
          {...register("available")}
        />

        <div>
          <ButtonLarge value={"Send"} type="submit" />
          <ButtonLarge
            value={"Cancel"}
            variant="cancel"
            onClick={() => {
              handleOpenModal();
              setProduct(undefined);
            }}
          />
        </div>
      </Styled.ModalContainer>
    </Styled.Modal>
  );
};

export default ProductModal;
