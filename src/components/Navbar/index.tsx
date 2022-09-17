import * as styled from "./styles";
import { LogoIcon } from "../../assets/icons/index";
import { useState } from "react";


function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState<boolean>(true);

  return (
    <styled.NavbarContainer extendNavbar={extendNavbar}>
    <styled.NavbarInnerContainer>
      <styled.RightContainer>
        <styled.NavbarLinkContainer>
          <styled.NavbarLink to="/"> Home</styled.NavbarLink>
          <styled.NavbarLink to="/products"> Products</styled.NavbarLink>
          <styled.NavbarLink to="/login"> Login </styled.NavbarLink>
          <styled.NavbarLink to="/about"> About Us</styled.NavbarLink>
          <styled.NavbarLink to="/settings"> Settings</styled.NavbarLink>
          <styled.OpenLinksButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
          </styled.OpenLinksButton>
        </styled.NavbarLinkContainer>
      </styled.RightContainer>
      <styled.LeftContainer>
        <LogoIcon />
      </styled.LeftContainer>
    </styled.NavbarInnerContainer>
    {extendNavbar && (
      <styled.NavbarExtendedContainer>
        <styled.NavbarLinkExtended to="/"> Home</styled.NavbarLinkExtended>
        <styled.NavbarLinkExtended to="/products"> Products</styled.NavbarLinkExtended>
        <styled.NavbarLinkExtended to="/login"> Login </styled.NavbarLinkExtended>
        <styled.NavbarLinkExtended to="/about"> About Us</styled.NavbarLinkExtended>
          <styled.NavbarLinkExtended to="/settings"> Settings</styled.NavbarLinkExtended>
      </styled.NavbarExtendedContainer>
    )}
  </styled.NavbarContainer>
);
}

export default Navbar;
