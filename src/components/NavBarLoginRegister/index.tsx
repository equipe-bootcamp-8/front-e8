import { LogoIcon } from "assets/icons";
import { RoutePath } from "types/routes";
import * as Styled from "./styles";

const NavBarLoginRegister = () => {
  return (
    <Styled.NavBarContainer>
      <Styled.NavBarRegister>
        <div>
          <LogoIcon />
        </div>
        <a href={RoutePath.CREATE_USER}>
          Don't have an account?
          <p>Sign up</p>
        </a>
  
      </Styled.NavBarRegister>
    </Styled.NavBarContainer>
  );
};

export default NavBarLoginRegister;
