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
                <h1>Your account has been activated!</h1>
              </Styled.FormHeader>
              <Styled.Copy>
                <p>Welcome, <strong>{user.name}</strong>.</p>
                <p>Click the button below to manage your store or use the navbar to access the other pages.</p>
                <Styled.Button
                   onClick={() => {
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
