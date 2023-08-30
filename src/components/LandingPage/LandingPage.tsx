import "./landingPage.scss";
// import hero from "../../assets/introduction-visual.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page__container">
        <h1 className="landing-page__header">
          Hi, I'm Tommy 
        </h1>
        <p>Full Stack Web Developer based in Surrey, British Columbia.</p>
      </div>
      <div className="landing-page__btn-container">
        <button className="landing-page__btn">CONTACT ME
          <FontAwesomeIcon size="lg" icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
