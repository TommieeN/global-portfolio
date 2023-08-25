import "./landingPage.scss";
import hero from "../../assets/introduction-visual.png"

const LandingPage = () => {
  return (
    <div className="landing-page">
        <img className="landing-page__hero" src={hero}/>
        <h1 className="landing-page__header">Your next interactive experience</h1>
        <button>HIRE US</button>
    </div>
  )
}

export default LandingPage