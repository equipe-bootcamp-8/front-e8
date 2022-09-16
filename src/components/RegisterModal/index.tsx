
import * as Styled from "./styles";


const RegisterModal = () => {
  return (
    <div>
      <Styled.FormOverlay>
        <Styled.FormLogin>
          <Styled.Title>
            <h2>Create your account</h2>
          </Styled.Title>
          <Styled.FormInternal>
            <label>E-mail address*</label>
            <input type="text" placeholder="Enter your email address" />
            <label>Company name</label>
            <input type="text" placeholder="Enter your email address" />
            <label>Password</label>
            <input type="text" placeholder="Enter your password" />
          </Styled.FormInternal>
        <button>Create</button>
        </Styled.FormLogin>
        <p>By signing up you agree to the Terms of Service and Privacy Policy</p>
      </Styled.FormOverlay>
    </div>
  );
};

export default RegisterModal;
