import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import NavLogo from "../../assets/logo.png";

import "./navBar.scss";

import { useState } from "react";

const NavBar = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const navBarLinks = ["Home", "Works", "About", "Contact"];

  return (
    <nav className="nav-bar">
      <div className="nav-bar__container">
        <img className="nav-bar__logo" src={NavLogo} alt="site-logo" />
        <p className="nav-bar__logo-text">GLOBAL</p>
      </div>
      <div>
        <a
          onClick={() => {
            setHamburgerMenuOpen(!hamburgerMenuOpen);
          }}
          href="#"
        >
          {hamburgerMenuOpen ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          )}
        </a>
        {hamburgerMenuOpen && (
          <ul className="nav-bar__links">
            {navBarLinks.map((navText) => {
              return (
                <a href="#">
                  <li key={navText} className="nav-bar__link">
                    {navText}
                  </li>
                </a>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
