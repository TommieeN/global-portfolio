import "./navBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLogo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__container">
        <img className="nav-bar__logo" src={NavLogo} alt="site-logo" />
        <p className="nav-bar__logo-text">GLOBAL</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faBars} size="lg" style={{ color: "#ffffff" }} />
      </div>
    </nav>
  );
};

export default NavBar;
