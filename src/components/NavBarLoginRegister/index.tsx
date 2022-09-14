import { LogoIcon } from "assets/icons";
import * as Styled from "./styles";

const NavBarLoginRegister = () => {
  return (
    <Styled.NavBarContainer>
      <Styled.NavBarRegister>
        <div>
          <LogoIcon />
        </div>
        <a href="/register">
          Don't have an account?
          <p>Sign up</p>
        </a>
      </Styled.NavBarRegister>
    </Styled.NavBarContainer>
  );
};

export default NavBarLoginRegister;
