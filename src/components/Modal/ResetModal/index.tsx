import CloseIcon from "assets/icons/closeicon.svg";
import { ModalOverlay } from "assets/styles/globalStyles";
import * as Styled from "./styles";

interface resetPasswordModalProps {
  handleOpenModal: () => void;
}

const ResetPasswordModal = ({ handleOpenModal }: resetPasswordModalProps) => {
  return (
    <ModalOverlay>
      <Styled.Container>
        <Styled.FormHeader>
          <h1>Thanks for signing up!</h1>
          <img
            src={CloseIcon}
            alt="close-icon"
            onClick={() => {
              handleOpenModal();
            }}
          />
        </Styled.FormHeader>
        <Styled.Copy>
          <p>We send you a confirmation email.</p>
      
          <Styled.ConfirmButton>Resend reset link</Styled.ConfirmButton>
        </Styled.Copy>
      </Styled.Container>
    </ModalOverlay>
  );
};

export default ResetPasswordModal;
