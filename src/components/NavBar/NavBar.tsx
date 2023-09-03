import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import "./navBar.scss";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { navBarLinks } from "../../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const NavBar = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeIngOut",
        duration: 0.3,
        delay: 0.9,
      },
    },
  };

  return (
    <nav className="nav-bar">
      <header className="nav-bar__container">
        <h3 className="nav-bar__logo-text">Tommy.</h3>
      </header>
      <div>
        <ul className="nav-bar__desktop">
          {navBarLinks.map((navText) => {
            return (
              <li className="nav-bar__anchor-tag">
                <AnchorLink
                  className="nav-bar__link"
                  key={navText.title}
                  offset="80"
                  href={navText.anchorTag}
                >
                  {navText.title}
                </AnchorLink>
              </li>
            );
          })}
          <li className="nav-bar__link">
            <a
              className="nav-bar__anchor-tag nav-bar__anchor-tag--resume"
              target="_blank"
              href="https://drive.google.com/file/d/1juta5yilnsAGWpyeo0jGFg7ZUDlaocA_/view"
            >
              Resume
            </a>
          </li>
        </ul>
        <button
          className="nav-bar__hamburger"
          onClick={() => {
            setHamburgerMenuOpen(!hamburgerMenuOpen);
          }}
        >
          {hamburgerMenuOpen ? (
            <FontAwesomeIcon className="nav-bar__icon" icon={faX} size="xl" />
          ) : (
            <FontAwesomeIcon
              className="nav-bar__icon"
              icon={faBars}
              size="xl"
            />
          )}
        </button>
        {hamburgerMenuOpen && (
          <motion.ul
            variants={item}
            initial={{ height: 0 }}
            animate={{ height: 194 }}
            transition={{ delayChildren: 15, staggerChildren: 11 }}
            exit="exit"
            className="nav-bar__links"
          >
            {navBarLinks.map((navText) => {
              return (
                <AnchorLink
                  onClick={() => {
                    setHamburgerMenuOpen(false);
                  }}
                  key={navText.title}
                  offset="80"
                  href={navText.anchorTag}
                >
                  <motion.li
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="nav-bar__link"
                  >
                    {navText.title}
                  </motion.li>
                </AnchorLink>
              );
            })}
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
