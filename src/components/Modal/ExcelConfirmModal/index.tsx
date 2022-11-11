import CloseIcon from "assets/icons/closeicon.svg";
import ButtonLarge from "components/ButtonLarge";
import { useProducts } from "contexts/products";
import * as S from "./styles";

export default function ExcelConfirmModal({
  handleOpenModal,
  handleUpdateExcel,
  setState,
}: any) {
  const { handleGetProducts } = useProducts();
  return (
    <S.Modal>
      <S.ModalContainer>
        <S.ModalHeader>
          <h2>Update prices?</h2>
          <img
            src={CloseIcon}
            alt="close-icon"
            onClick={() => handleOpenModal()}
          />
        </S.ModalHeader>

        <S.ButtonsContainer>
          <ButtonLarge
            value={"Send"}
            type="submit"
            onClick={(e) => {
              handleUpdateExcel(e);
              setState(true)
            }}
          />
          <ButtonLarge
            value={"Cancel"}
            variant="cancel"
            onClick={() => handleOpenModal()}
          />
        </S.ButtonsContainer>
      </S.ModalContainer>
    </S.Modal>
  );
}
