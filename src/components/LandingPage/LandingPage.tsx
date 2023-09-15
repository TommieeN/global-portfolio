import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Reveal } from "../../utils/Reveal";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./landingPage.scss";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page" id="home">
      <div className="landing-page__container">
        <Reveal width="100%">
          <h1 className="landing-page__header">Hi, I'm <span className="landing-page__text-color">Tommy Nguyen</span>.</h1>
        </Reveal>
        <Reveal width="100%">
          <p className="landing-page__header">
            I solve problems and create captivating applications.
          </p>
        </Reveal>
        <Reveal>
          <p className="landing-page__text">
            I'm a <span className="landing-page__text-color">Full Stack Web Developer</span> based in Surrey, British Columbia,
            Canada, deriving immense satisfaction from solving intricate
            problems through the art of coding!
          </p>
        </Reveal>
      </div>
      <Reveal width="100%">
        <div className="landing-page__logo-container">
          <a
            href="https://github.com/TommieeN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="landing-page__logo"
              icon={faGithub}
              size="xl"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tommy-nguyenn/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
      </Reveal>
      <Reveal>
        <div className="landing-page__btn-container">
          <AnchorLink href="#contact" className="landing-page__btn">
            CONTACT ME
          </AnchorLink>
        </div>
      </Reveal>
    </div>
  );
};

export default LandingPage;
