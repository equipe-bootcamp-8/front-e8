import { LogoIcon } from "assets/icons";
import DarkMode from "components/DarkMode";
import { useState } from "react";
import { RoutePath } from "types/routes";
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
    <nav className="nav">
      <a href={RoutePath.HOME} className="nav__brand">
        <LogoIcon />
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href={RoutePath.HOME} className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href={RoutePath.ABOUT_US} className="nav__link">
            About us
          </a>
        </li>
        <li className="nav__item">
          <a href={RoutePath.PRODUCTS} className="nav__link">
            Products
          </a>
        </li>
        <li className="nav__item">
          <a href={RoutePath.LOGIN} className="nav__link">
            Login
          </a>
        </li>
        <li className="nav__item">
          <a href={RoutePath.CREATE_USER} className="nav__link">
            Register
          </a>
        </li>
        <li className="nav__item">
          <a href={RoutePath.SETTINGS} className="nav__link">
            Settings
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <DarkMode toggleTheme={ function (): void {
        throw new Error("Function not implemented.");
      } } />
    </nav>
  );
}

export default Navbar;