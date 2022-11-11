import { useAuth } from "contexts/auth";
import SendEmailVerification from "services/email";
import * as Styled from "./styles";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


const RegisterValidation = () => {
  const { user } = useAuth();
  
  const userData = {
    name: user.name,
    id: user.id,
    email: user.email,
};

  console.log(user);
  return (
    <div>
      <Styled.Background>
        <Styled.Container>
          <Styled.FormHeader>
            <h1>Thanks for signing up!</h1>
          </Styled.FormHeader>
          <Styled.Copy>
            <p>We send you a confirmation email.</p>
            <p>Please confirm your email to complete account activation.</p>
            <Styled.SendEmailButton onClick={() => (SendEmailVerification(userData))}>
              Resend confirmation email
            </Styled.SendEmailButton>
          </Styled.Copy>
        </Styled.Container>
      </Styled.Background>
    </div>
  );
};

export default RegisterValidation;
