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
        <Styled.NavBarLink>
        <a href={RoutePath.HOME} className="nav__link">
            Home
          </a>
        <a href={RoutePath.ABOUT_US} className="nav__link">
            About us
          </a>
          <a href={RoutePath.LOGIN} className="nav__link">
            Login
          </a>
        <a href={RoutePath.CREATE_USER}>
          Don't have an account?
          <p>Sign up</p>
        </a>
        </Styled.NavBarLink>
      </Styled.NavBarRegister>
    </Styled.NavBarContainer>
  );
};

export default NavBarLoginRegister;
