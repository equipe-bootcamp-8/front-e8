import { Category } from "types";
import * as styled from "./styles";

interface SettingsCategoryCardProps {
  category: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category | undefined>>;
  handleOpenModal: () => void;
  handleOpenDeleteModal: () => void;
}


const CategorySettingsCard = ({
  category, setCategory, handleOpenModal, handleOpenDeleteModal
}: SettingsCategoryCardProps) => {
  return (
    <styled.CategorySettingsCardContainer>
      <h3>{category.name}</h3>
      <div>
        <styled.CategorySettingsEditCardButton
        onClick={() => {
          setCategory(category);
          handleOpenModal();
        }}
        >
          Edit
        </styled.CategorySettingsEditCardButton>
        <styled.CategorySettingsDeleteCardButton
         onClick={() => {
          setCategory(category);
          handleOpenDeleteModal();
        }}
        >
          Delete
        </styled.CategorySettingsDeleteCardButton>
      </div>
    </styled.CategorySettingsCardContainer>
  );
};

export default CategorySettingsCard;
