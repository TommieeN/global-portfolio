import { Reveal } from "../../utils/Reveal";
import "./about.scss";

const About: React.FC = () => {
  return (
    <>
      <Reveal width="100%">
        <h2 className="about-header" id="about">
          About Me<span className="about-header--blue">.</span>
        </h2>
      </Reveal>
      <section className="about">
        <Reveal>
          <p className="about__text">
            Hello there! I'm Tommy, and if it's not already evident, I'm
            embarking on quite the unique journey. I've made the transition from
            a background in retail to the bustling world of technology.
            Currently calling Surrey, B.C, Canada, my home, I've honed a keen
            knack for problem-solving and an insatiable thirst for learning.
          </p>
        </Reveal>
        <Reveal>
          <p className="about__text">
            My expertise lies in full-stack development, with a strong
            proficiency in technologies like React and Node. I firmly believe in
            selecting the most suitable tools for each unique task. Presently,
            I'm channeling my skills and enthusiasm as a teaching assistant at
            BrainStation, where I find myself immersed in a myriad of
            exhilarating challenges.
          </p>
        </Reveal>
        <Reveal>
          <p className="about__text">
            Beyond the world of coding, I relish the opportunity to explore
            Vancouver's picturesque landscapes alongside my wife. If you happen
            to cross paths with me on a Sunday, chances are I'll be savoring a
            delightful bubble tea 🧋.
          </p>
        </Reveal>
        <Reveal>
          <p className="about__text">
            Feel free to connect with me on LinkedIn if you'd like to delve
            deeper into any topic or simply share a friendly chat. 🤝
          </p>
        </Reveal>
      </section>
    </>
  );
};

export default About;
