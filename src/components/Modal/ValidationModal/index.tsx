import CloseIcon from "assets/icons/closeicon.svg";
import { ModalOverlay } from "assets/styles/globalStyles";
import * as Styled from "./styles";

/* interface ValidationModalProps {
  handleOpenModal: () => void;
} */



const ValidationModal = (/* { handleOpenModal }: ValidationModalProps */) => {
  return (
    <ModalOverlay>
      <Styled.Container>
        <Styled.FormHeader>
          <h1>Thanks for signing up!</h1>
       {/*    <img
            src={CloseIcon}
            alt="close-icon"
            onClick={() => {
              handleOpenModal(); 
            }}
          /> */}
        </Styled.FormHeader>
        <Styled.Copy>
          <p>We send you a confirmation email.</p>
          <p>Please confirm your email to complete account activation.</p>
          <Styled.ConfirmButton>Resend confirmation email</Styled.ConfirmButton>
        </Styled.Copy>
      </Styled.Container>
    </ModalOverlay>
  );
};

export default ValidationModal;
