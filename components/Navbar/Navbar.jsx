import Link from "next/link";
import React from "react";
import styles from "./Navbar.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container no-pad">
        <nav className="nav-row">
          <div className="nav-inner">
            <Link href="/" className="nav-logo-row">
              <Image
                src={"/images/logo.svg"}
                height={20}
                width={55}
                alt="logo"
              />
              <Image
                src={"/images/dash_side_logo_icon.svg"}
                height={20}
                width={55}
                alt="logo"
              />
            </Link>
            <div className="nav-menu">
              <div className="nav-menu__links">
                <Link href={"/"} className="link nav-link w-inline-block w--current">
                  <p className="nav-link-text">Home</p>
                </Link>
                <Link href={"/"}>Pricing</Link>

                <Link href={"/"}>Updates</Link>

                <Link href={"/"}>FAQ</Link>
              </div>
            </div>
            <div className="nav-button-row">
              <Link href={"/"}>Log in</Link>
              <Link href={"/"} className="button small w-inline-block">
                <div className="u--clip">
                  <p>Get started</p>
                </div>
                <div className="button-bg">
                </div>
              </Link>
              <button className="menu-button">
                <Image src={'/images/menu_button__icon.svg'} className="menu-button__icon" height={40} width={40} alt="toggle"/>
              <div className="button-bg">
              </div>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
