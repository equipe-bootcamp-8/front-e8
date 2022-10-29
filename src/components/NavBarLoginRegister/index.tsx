import { LogoIcon } from "assets/icons";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import * as S from "./styles";
import { Link } from "react-router-dom";


const NavBarLoginRegister = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
    
  return (
    <S.Container>
        <S.Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }} >
            <S.LogoContainer>
            <Link to="/home">
                <LogoIcon />
            </Link>
            </S.LogoContainer>
      
          <S.MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </S.MobileIcon>
          
            <S.Menu  open={showMobileMenu}>
                <S.MenuItem>
                    <S.MenuItemLink  to="/products" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    HOME
                    </S.MenuItemLink>
                </S.MenuItem>
                <S.MenuItem>
                <S.MenuItemLink to="/" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                     LOGIN
                    </S.MenuItemLink>
                </S.MenuItem>
                <S.MenuItem>
                <S.MenuItemLink  to="/register" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    SING UP
                    </S.MenuItemLink>
                </S.MenuItem>
                <S.MenuItem>
                <S.MenuItemLink to="/about-us" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                ABOUT US
                    </S.MenuItemLink>
                </S.MenuItem>
            </S.Menu>
            </IconContext.Provider>
        </S.Wrapper>

    </S.Container>
  )
}

export default NavBarLoginRegister;
