import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import "./navBar.scss";

import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { navBarLinks } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const [currentScrollPos, setCurrentScrollPos] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

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

  // Hide navbar on scroll down, display on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setCurrentScrollPos(scrollPos);

      if (scrollPos > prevScrollPos) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setPrevScrollPos(scrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`nav-bar ${visible ? "" : "nav-bar--hidden"}`}>
      <header className="nav-bar__container">
        <h3 className="nav-bar__logo-text">Tommy.</h3>
      </header>
      <div>
        <button
          className="nav-bar__hamburger"
          onClick={() => {
            setHamburgerMenuOpen(!hamburgerMenuOpen);
          }}
        >
          {hamburgerMenuOpen ? (
            <FontAwesomeIcon
              className="nav-bar__icon"
              icon={faX}
              size="xl"
            />
          ) : (
            <FontAwesomeIcon
              className="nav-bar__icon"
              icon={faBars}
              size="xl"
            />
          )}
        </button>
        {/* <AnimatePresence> */}
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
        {/* </AnimatePresence> */}
      </div>
    </nav>
  );
};

export default NavBar;
