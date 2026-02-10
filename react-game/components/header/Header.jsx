import style from "./header.module.css";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const navLinks = (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="#">Missions</Link>
      </li>
    </ul>
  );
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className={style.header}>
        <div className={style.logoWrapper}>
          <img
            src="https://t4.ftcdn.net/jpg/08/44/82/55/360_F_844825587_MEoU8odal1uKKTjNOoFa0A4yLyZzJ0gG.jpg"
            alt="Hospital Game"
          />
          <p>Play Hospital</p>
        </div>
        <nav className={style.menuDesktop}>{navLinks}</nav>
        <img
          onClick={() => {
            setMobileMenuOpen(!isMobileMenuOpen);
          }}
          src="/images/menu-ico.svg"
          className={style.menuMobile}
        />
      </header>
      <div
        className={`${style.overlay} ${isMobileMenuOpen ? style.overlayPosition : style.overlayPositionHidden}`}
      >
        <nav className={style.mobileNav}>{navLinks}</nav>
      </div>
    </>
  );
};

export default Header;
