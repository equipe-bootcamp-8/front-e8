import * as Styled from "./styles";
import LoginModal from "components/LoginModal";


interface LoginProps {
  logged?: boolean | any;
}

const Login = ({ logged }: LoginProps) => {
  logged(false);

  return (
    <div>
      <Styled.Background>
        <LoginModal />
      </Styled.Background>
    </div>
  );
};

export default Login;
