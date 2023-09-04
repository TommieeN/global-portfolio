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
  const container = {
    visible: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1, // Adjust this value to control the delay between children
      },
    },
  };
  return (
    <nav className="nav-bar">
      <header className="nav-bar__container">
        <h3 className="nav-bar__logo-text">Tommy.</h3>
      </header>
      <div>
        <motion.ul 
        variants={container}
        initial="hidden"
        animate="visible"
        transition={{duration: 0.5}}
        className="nav-bar__desktop"
        >
          {navBarLinks.map((navText) => {
            return (
              <motion.li 
                variants={item}
              className="nav-bar__anchor-tag"
              >
                <AnchorLink
                  className="nav-bar__link"
                  key={navText.title}
                  offset="80"
                  href={navText.anchorTag}
                >
                  {navText.title}
                </AnchorLink>
              </motion.li>
            );
          })}
          <motion.li 
            variants={item}
          className="nav-bar__link">
            <a
              className="nav-bar__anchor-tag"
              target="_blank"
              href="https://drive.google.com/file/d/1juta5yilnsAGWpyeo0jGFg7ZUDlaocA_/view"
            >
              Resume
            </a>
          </motion.li>
        </motion.ul>
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
            transition={{ duration: 0.2 }}
            exit="exit"
            className="nav-bar__links"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
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
                    <motion.li variants={item} className="nav-bar__link">
                      {navText.title}
                    </motion.li>
                  </AnchorLink>
                );
              })}
            </motion.div>
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
