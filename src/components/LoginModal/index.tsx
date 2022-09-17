import * as Styled from "./styles";

const LoginModal = () => {
  return (
    <div>
      <div>
        <Styled.FormLogin>
          <Styled.Title>
            <h2>Log in to your account</h2>
          </Styled.Title>
          <Styled.FormInternal>
            <label>E-mail</label>
            <input type="text" placeholder="Enter your email address" />
            <label>Password</label>
            <input type="text" placeholder="Enter your password" />
          </Styled.FormInternal>
          <button>Log in</button>
        </Styled.FormLogin>
      </div>
    </div>
  );
};

export default LoginModal;
