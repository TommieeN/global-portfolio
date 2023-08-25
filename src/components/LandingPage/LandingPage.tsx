import "./landingPage.scss";
import hero from "../../assets/introduction-visual.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page__container">
        <img className="landing-page__hero" src={hero} />
        <h1 className="landing-page__header">
          Your next interactive experience
        </h1>
      </div>
      <div className="landing-page__btn-container">
        <button className="landing-page__btn">
          <span>CONTACT ME
          <FontAwesomeIcon size="lg" icon={faArrowRight} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
