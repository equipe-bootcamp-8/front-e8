import { useForm } from "react-hook-form";
import * as Styled from "./styles";
import * as yup from "yup";
import { useState } from "react";
import toast from "react-hot-toast";
import { useCategories } from "contexts/categories";
import { Category } from "types";
import api from "services";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonLarge from "components/ButtonLarge";
import CloseIcon from "assets/icons/closeicon.svg";

/* HOOKFORM */
interface CategoryModalProps {
  handleOpenModal: () => void;
  category?: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category | undefined>>;
}

interface CategoryData {
  name?: string;
}

const newCategorieschema = yup.object().shape({
  name: yup.string().required("Category name is required"),

});

const updateCategorieschema = yup.object().shape({
  name: yup.string(),
});

const CategoryModal = ({
  handleOpenModal,
  category,
  setCategory,
}: CategoryModalProps) => {
  const { categories, handleGetCategories } = useCategories();
 
  /* useForm */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryData>({
    resolver: yupResolver(category ? updateCategorieschema : newCategorieschema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewCategory = (data: CategoryData) => {
    api
      .post(`/categories`, data, headers)
      .then(() => {
        toast.success("Category added succesfully!");
        handleGetCategories();
        handleOpenModal();
        setCategory(undefined);
      })
      .catch(() => toast.error("Select a category!"));
  };

  const handleUpdateCategory = (data: CategoryData) => {
    api.patch(`/categories/${category?.id}`, data, headers).then(() => {
      toast.success("Category updated succesfully!");
      handleGetCategories();
      handleOpenModal();
      setCategory(undefined);
    });
  };

  return (
    <Styled.Modal>
      <Styled.ModalContainer
        onSubmit={
          category
            ? handleSubmit(handleUpdateCategory)
            : handleSubmit(handleNewCategory)
        }
      >
        <Styled.ModalHeader>
          <h2>{category ? "Update Category" : "Register a new category"}</h2>
          <img
            src={CloseIcon}
            alt="close-icon"
            onClick={() => {
              setCategory(undefined);
              handleOpenModal();
            }}
          />
        </Styled.ModalHeader>

        <Styled.InputContainer>
          <label>Category Name</label>
          <Styled.Input
            defaultValue={category ? category.name : ""}
            placeholder="Name"
            {...register("name")}
          />
        </Styled.InputContainer>

        <Styled.ButtonsContainer>
          <ButtonLarge value={"Send"} type="submit" />
          <ButtonLarge
            value={"Cancel"}
            variant="cancel"
            onClick={() => {
              handleOpenModal();
              setCategory(undefined);
            }}
          />
        </Styled.ButtonsContainer>
      </Styled.ModalContainer>
    </Styled.Modal>
  );
};

export default CategoryModal;