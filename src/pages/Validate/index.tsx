import * as styled from "./styles";

const Validate = () => {
  return (
    <div>
      <styled.Background>
        <styled.Container>
        <h1>Thanks for signing up!</h1>
          <styled.Copy>
          <p>
        We send you a confirmation email.
        </p>
        <p>
        Please confirm your email to complete account activation.
        </p>
        <styled.ConfirmButton>Resend confirmation email</styled.ConfirmButton>
          </styled.Copy>
        
        </styled.Container>
      </styled.Background>
    </div>
  );
};

export default Validate;
