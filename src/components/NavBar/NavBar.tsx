import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import "./navBar.scss";

import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { navBarLinks } from "../../constants";

const NavBar = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  return (
    <nav className="nav-bar" id="home">
      <div className="nav-bar__container">
        <h3 className="nav-bar__logo-text">Tommy</h3>
      </div>
      <div>
        <button
          className="nav-bar__hamburger"
          onClick={() => {
            setHamburgerMenuOpen(!hamburgerMenuOpen);
          }}
        >
          {hamburgerMenuOpen ? (
            <FontAwesomeIcon
              icon={faX}
              size="xl"
              style={{ color: "#000000" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              style={{ color: "#000000" }}
            />
          )}
        </button>
        {hamburgerMenuOpen && (
          <ul className="nav-bar__links">
            {navBarLinks.map((navText) => {
              return (
                <AnchorLink key={navText.title} href={navText.anchorTag}>
                  <li className="nav-bar__link">
                    {navText.title}
                  </li>
                </AnchorLink>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
