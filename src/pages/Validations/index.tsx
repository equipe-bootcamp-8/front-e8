import { useAuth } from "contexts/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "services";
import SendEmailVerification from "services/email";
import * as Styled from "./styles";

const RegisterValidation = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const idUrl = urlParams.get("id");
  const { user } = useAuth();
  const navigate = useNavigate();

  const userData = {
    name: user.name,
    id: user.id,
    email: user.email,
  };

  const confirmEmail = () => {
    if (idUrl === user.id) {
      const token = localStorage.getItem("token");

      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const data = {
        active: true,
      };

      api
        .patch(`/users/${user.id}`, data, headers)
        .then(() => {
          toast.success("Confirmed email!");
          navigate("/settings");
        })
        .catch(() => toast.error("Invalid Link!"));
    }
  };

  return (
    <div>
      <Styled.Background>
        {idUrl ? (
          <>
            <Styled.Container>
              <Styled.FormHeader>
                <h1>Clique no Ok pra validar email</h1>
              </Styled.FormHeader>
              <Styled.Copy>
                <p>We send you a confirmation email.</p>
                <p>Please confirm your email to complete account activation.</p>
                <Styled.SendEmailButton onClick={() => confirmEmail()}>
                  Confirm email!
                </Styled.SendEmailButton>
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
                <Styled.SendEmailButton
                  onClick={() => SendEmailVerification(userData)}
                >
                  Resend confirmation email
                </Styled.SendEmailButton>
              </Styled.Copy>
            </Styled.Container>
          </>
        )}
      </Styled.Background>
    </div>
  );
};

export default RegisterValidation;
