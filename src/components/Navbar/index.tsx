import { LogoIcon, LogoutIcon } from "assets/icons";
import { useAuth } from "contexts/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import * as S from "./styles";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { logout } = useAuth();

    
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
                    <S.MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <Link to="/products">HOME</Link>
                    </S.MenuItemLink>
                </S.MenuItem>
                <S.MenuItem>
                <S.MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                     <Link to="/settings">SETTINGS</Link>
                    </S.MenuItemLink>
                </S.MenuItem>
                <S.MenuItem>
                <S.MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <Link to="/about-us">ABOUT US</Link>
                    </S.MenuItemLink>
                </S.MenuItem>
                <S.MenuItem>
                <S.MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                  <a onClick={() => {
            logout();
            toast.success("GoodBye!");
          }}> 
                    <LogoutIcon />
                  </a>
                    </S.MenuItemLink>
                </S.MenuItem>

            </S.Menu>
            </IconContext.Provider>
        </S.Wrapper>

    </S.Container>
  )
   
}

export default Navbar;
