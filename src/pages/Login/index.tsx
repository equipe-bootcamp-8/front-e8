import * as Styled from "./styles";
import LoginModal from "components/LoginModal";

const Login = () => {
  return (
    <div>
      <Styled.Background>
        <LoginModal />
      </Styled.Background>
    </div>
  );
};

export default Login;
