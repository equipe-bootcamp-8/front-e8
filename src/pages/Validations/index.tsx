import { useAuth } from "contexts/auth";
import { useNavigate } from "react-router-dom";
import SendEmailVerification from "services/email";
import * as Styled from "./styles";

const urlParams = new URLSearchParams(window.location.search);
const idUrl = urlParams.get("id");

const RegisterValidation = () => {
  const { user } = useAuth();
  const userData = {
    name: user.name,
    id: user.id,
    email: user.email,
  };

  let Navigate = useNavigate();

  console.log(user);
  return (
    <div>
      <Styled.Background>
        {idUrl ? (
          <>
            <Styled.Container>
              <Styled.FormHeader>
                <h1>Your account has been activated!</h1>
              </Styled.FormHeader>
              <Styled.Copy>
                <p>Welcome, <strong>{user.name}</strong>.</p>
                <p>Click the button below to manage your store or use the navbar to access the other pages.</p>
                <Styled.Button
                   onClick={() => {
                    Navigate(`/settings`);
                  }}
                >
                 Manage my store
                </Styled.Button>
              </Styled.Copy>
            </Styled.Container>
          </>
        ) : (
          <>
            <Styled.Container>
              <Styled.FormHeader>
                <h1>Thanks for signing up!</h1>
              </Styled.FormHeader>
              <Styled.Copy>
                <p>We send you a confirmation email.</p>
                <p>Please confirm your email to complete account activation.</p>
                <Styled.Button
                  onClick={() => SendEmailVerification(userData)}
                >
                  Resend confirmation email
                </Styled.Button>
              </Styled.Copy>
            </Styled.Container>
          </>
        )}
      </Styled.Background>
    </div>
  );
};

export default RegisterValidation;
