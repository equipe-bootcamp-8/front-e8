import { TrashIcon } from "assets/icons";
import CloseIcon from "assets/icons/closeicon.svg";
import { ModalOverlay } from "assets/styles/globalstyles";
import ButtonLarge from "components/ButtonLarge";
import { useProducts } from "contexts/products";
import toast from "react-hot-toast";
import api from "services";

import { Product } from "types";

import * as Styled from "./styles";

interface DeleteProductModalProps {
  productId?: string;
  handleOpenDeleteModal: () => void;
  setProduct: React.Dispatch<React.SetStateAction<Product | undefined>>;
}

const DeleteProductModal = ({
  productId,
  handleOpenDeleteModal,
  setProduct,
}: DeleteProductModalProps) => {
  const { handleGetProducts } = useProducts();

  const handleDeleteProduct = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/products/${productId}`, headers).then(() => {
      handleGetProducts();
      setProduct(undefined);
      handleOpenDeleteModal();
      toast.success("Product deleted succesfully!");
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
            onClick={handleDeleteProduct}
          />
          <ButtonLarge
            onClick={() => {
              setProduct(undefined);
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

export default DeleteProductModal;
