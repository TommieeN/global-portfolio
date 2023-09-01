import "./landingPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page__container">
        <h1 className="landing-page__header">
          Hello, I'm Tommy Nguyen.
        </h1>
        <h1 className="landing-page__header">I solve problems and create captivating
          applications.</h1>
        <p className="landing-page__text">
          I'm a Full Stack Web Developer based in Surrey, British Columbia, Canada,
          deriving immense satisfaction from solving intricate problems through
          the art of coding!
        </p>
      </div>
      <div className="landing-page__logo-container">
        <a href="https://github.com/TommieeN" target="_blank">
          <FontAwesomeIcon
            className="landing-page__logo"
            icon={faGithub}
            size="xl"
          />
        </a>
        <a href="https://www.linkedin.com/in/tommy-nguyenn/" target="_blank">
          <FontAwesomeIcon
            className="landing-page__logo"
            icon={faLinkedin}
            size="xl"
          />
        </a>
        <a href="mailto:timsnguyen@hotmail.com">
          <FontAwesomeIcon
            className="landing-page__logo"
            icon={faEnvelope}
            size="xl"
          />
        </a>
      </div>
      <div className="landing-page__btn-container">
        <AnchorLink href="#contact" className="landing-page__btn">CONTACT ME</AnchorLink>
      </div>
    </div>
  );
};

export default LandingPage;
