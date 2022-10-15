import { LogoIcon } from "assets/icons";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import * as Styled from "./styles";

const NavBarLoginRegister = () => {
  const navigate = useNavigate();
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
        <Styled.SingUp onClick={() => navigate("/register")}>
          <p>Sign up</p>
        </Styled.SingUp>
        </Styled.NavBarLink>
      </Styled.NavBarRegister>
    </Styled.NavBarContainer>
  );
};

export default NavBarLoginRegister;
