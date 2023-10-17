import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { navBarLinks } from "../../constants";
import { useState } from "react";
import "./navBar.scss";

interface NavBarLink {
  title: string;
  anchorTag: string;
}

const NavBar: React.FC = () => {
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
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <nav className="nav-bar">
      <header className="nav-bar__container">
        <h3 className="nav-bar__logo-text">Tommy<span className="nav-bar__logo-text--blue">.</span></h3>
      </header>
      <div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="nav-bar__desktop"
        >
          {navBarLinks.map((navText: NavBarLink) => {
            return (
              <motion.div
                key={navText.title}
                variants={item}
                className="nav-bar__anchor-tag"
              >
                <AnchorLink
                  className="nav-bar__link"
                  offset="136"
                  href={navText.anchorTag}
                >
                  {navText.title}
                </AnchorLink>
              </motion.div>
            );
          })}
          <motion.div variants={item} className="nav-bar__link">
            <a
              className="nav-bar__anchor-tag"
              target="_blank"
              href="https://drive.google.com/file/d/1h8pz_otS4TyHLdTXXhW0pr5kiR8AO74S/view?usp=sharing"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>
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
          <motion.div
            variants={item}
            initial={{ height: 0 }}
            animate={{ height: 241 }}
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
              {navBarLinks.map((navText: NavBarLink) => {
                return (
                  <AnchorLink
                    onClick={() => {
                      setHamburgerMenuOpen(false);
                    }}
                    key={navText.title}
                    offset="80"
                    href={navText.anchorTag}
                  >
                    <motion.div variants={item} className="nav-bar__link">
                      {navText.title}
                    </motion.div>
                  </AnchorLink>
                );
              })}
            </motion.div>
            <a
              className="nav-bar__link"
              target="_blank"
              href="https://drive.google.com/file/d/1h8pz_otS4TyHLdTXXhW0pr5kiR8AO74S/view?usp=sharing"
            >
              Resume
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
