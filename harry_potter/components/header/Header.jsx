import style from "./header.module.css";
import mobileMenuImg from "../../assets/img/menu-ico.svg";
import logo from "../../assets/img/logo.jpg";
import { useState } from "react";
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = (
    <ul>
      <li>
        <a href="">link 1</a>
      </li>
      <li>
        <a href="">link 2</a>
      </li>
      <li>
        <a href="">link 3</a>
      </li>
      <li>
        <a href="">link 4</a>
      </li>
      <li>
        <a href="">link 5</a>
      </li>
    </ul>
  );
  return (
    <>
      <header className={style.header}>
        <img className={style.logo} src={logo.src} alt="Logo" />
        <nav>{links}</nav>
        <img
          className={style.mobileMenu}
          src={mobileMenuImg.src}
          alt="Mobile Menu"
          onClick={() => {
            setMobileMenuOpen(!isMobileMenuOpen);
          }}
        />
      </header>
      <div
        className={`${style.overlay} ${isMobileMenuOpen ? style.overlayPosition : style.overlayPositionHidden}`}
      >
        <nav className={style.mobileNav}>{links}</nav>
      </div>
    </>
  );
};

export default Header;
