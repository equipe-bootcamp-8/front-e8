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
          <h1>Reset Password</h1>
          <img
            src={CloseIcon}
            alt="close-icon"
            onClick={() => {
              handleOpenModal();
            }}
          />
        </Styled.FormHeader>
        <Styled.Copy>
          <p>We send a reset email</p>
        <p>By clicking on the link, you will be directed to the site to change your password.</p>
          <Styled.ConfirmButton>Resend reset email</Styled.ConfirmButton>
        </Styled.Copy>
      </Styled.Container>
    </ModalOverlay>
  );
};

export default ResetPasswordModal;
