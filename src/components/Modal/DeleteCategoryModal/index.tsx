import { TrashIcon } from "assets/icons";
import CloseIcon from "assets/icons/closeicon.svg";
import { ModalOverlay } from "assets/styles/globalstyles";
import ButtonLarge from "components/ButtonLarge";
import { useCategories } from "contexts/categories";
import toast from "react-hot-toast";
import api from "services";

import { Category } from "types";

import * as Styled from "./styles";

interface DeleteCategoryModalProps {
  categoryId?: string;
  handleOpenDeleteModal: () => void;
  setCategory: React.Dispatch<React.SetStateAction<Category | undefined>>;
}

const DeleteCategoryModal = ({
  categoryId,
  handleOpenDeleteModal,
  setCategory,
}: DeleteCategoryModalProps) => {
  const { handleGetCategories } = useCategories();

  const handleDeleteCategory = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/categories/${categoryId}`, headers).then(() => {
      handleGetCategories();
      setCategory(undefined);
      handleOpenDeleteModal();
      toast.success("Category deleted succesfully!");
    });
  };

  return (
    <ModalOverlay>
      <Styled.DeleteModalContainer>
        <Styled.ModalHeader>
          <h2>Confirmation</h2>
          <img
            src={CloseIcon}
            alt="close-icon"
            onClick={() => {
              handleOpenDeleteModal();
            }}
          />
        </Styled.ModalHeader>
        <section>
          <TrashIcon />
          <h3>This action cannot be undone.</h3>
        </section>

        <Styled.ButtonList>
          <ButtonLarge
            value={"Delete"}
            variant="delete"
            onClick={handleDeleteCategory}
          />
          <ButtonLarge
            onClick={() => {
              setCategory(undefined);
              handleOpenDeleteModal();
            }}
            value="Cancel"
            variant="cancel"
          />
        </Styled.ButtonList>
      </Styled.DeleteModalContainer>
    </ModalOverlay>
  );
};

export default DeleteCategoryModal;
