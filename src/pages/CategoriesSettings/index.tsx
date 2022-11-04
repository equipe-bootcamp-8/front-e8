import CategorySettingsCard from "components/CategorySettingsCard";
import CategoryModal from "components/Modal/CategoryModal";
import DeleteCategoryModal from "components/Modal/DeleteCategoryModal";
import SettingsMenu from "components/SettingsMenu";
import { useCategories } from "contexts/categories";
import { useState } from "react";
import { Category } from "types";
import * as styled from "./styles";
import * as gStyled from "../../assets/styles/globalStyles";
import backgroundProduct from "../../assets/imgs/product-settingsbg.png";

const CategoriesSettings = () => {
  const { categories } = useCategories();
  const [category, setCategory] = useState<Category | undefined>(undefined);


  /* ----MODAL---    */
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };
  /* --------- */

  return (
    <gStyled.SettingsContainer style={{backgroundImage: `url(${backgroundProduct})`}}>
      <SettingsMenu path={"categories"} />
      <styled.EditEntitiesContainer>
        <h2>Manage Categories</h2>
        <styled.AddEntitieCard onClick={handleOpenModal}>
          <p>Create Category</p>
        </styled.AddEntitieCard>
        <styled.Bar />
        <styled.Header>
        <h2>Name</h2>
        <h2>Action</h2>
        </styled.Header>
        <styled.Bar />
        <styled.EntitiesEditList>
           {categories.map((element) => (
            <CategorySettingsCard
              handleOpenModal={handleOpenModal}
              handleOpenDeleteModal={handleOpenDeleteModal}
              setCategory={setCategory}
              category={element}
              key={element.id}
            />
          ))} 
        </styled.EntitiesEditList>
      </styled.EditEntitiesContainer>
       {openModal && (
        <CategoryModal
          setCategory={setCategory}
          category={category}
          handleOpenModal={handleOpenModal}
        />
      )}
      {openDeleteModal && (
        <DeleteCategoryModal
          setCategory={setCategory}
          categoryId={category?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
      )} 
    </gStyled.SettingsContainer>
  );
};

export default CategoriesSettings;
