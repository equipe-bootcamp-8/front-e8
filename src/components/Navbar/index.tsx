import { LogoIcon } from "assets/icons";
import { useState } from "react";
import "./styles.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");


    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
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