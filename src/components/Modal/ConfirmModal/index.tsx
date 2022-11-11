import CloseIcon from "assets/icons/closeicon.svg";
import ButtonLarge from "components/ButtonLarge";
import * as S from "./styles";

export default function ConfirmModal({
  handleOpenModal,
  handleUpdateExcel,
  openModal2,
  setState,
}: any) {
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
              openModal2()
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
