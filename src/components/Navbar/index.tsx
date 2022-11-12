import { LogoIcon, LogoutIcon } from "assets/icons";
import { useAuth } from "contexts/auth";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { logout } = useAuth();

  return (
    <S.Container>
      <S.Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <S.LogoContainer>
            <Link to="/home">
              <LogoIcon />
            </Link>
          </S.LogoContainer>

          <S.MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </S.MobileIcon>

          <S.Menu open={showMobileMenu}>
            <S.MenuItem>
              <S.MenuItemLink
                to="/home"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                HOME
              </S.MenuItemLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuItemLink
                to="/settings"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                SETTINGS
              </S.MenuItemLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuItemLink
                to="/about-us"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                ABOUT US
              </S.MenuItemLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuItemLink
                to="/home"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <div onClick={() => logout()}>
                  <LogoutIcon />
                </div>
              </S.MenuItemLink>
            </S.MenuItem>
          </S.Menu>
        </IconContext.Provider>
      </S.Wrapper>
    </S.Container>
  );
};

export default Navbar;
