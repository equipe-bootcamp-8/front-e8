import { LogoIcon, LogoutIcon } from "assets/icons";

import { useState } from "react";
import toast from "react-hot-toast";
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
          <a href={RoutePath.SETTINGS} className="nav__link">
            Settings
          </a>
        </li>
        <a  onClick={() => {
            logout();
            toast.success("GoodBye!");
          }} className="nav__out">
        <LogoutIcon />
      </a>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
   
  );
}

export default Navbar;

function logout() {
  throw new Error("Function not implemented.");
}
