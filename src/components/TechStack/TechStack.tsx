import { SlideIn } from "../../utils/Reveal";
import { techIcons } from "../../constants";
import "./techStack.scss";

interface TechIcon {
  id: number;
  img: string;
  title: string;
}

const TechStack = () => {
  return (
    <>
      <SlideIn>
        <div className="tech-header">
          <h2 className="tech-header__heading">Tech Stack<span className="tech-header__heading--blue">.</span></h2>
        </div>
      </SlideIn>
      <ul className="tech-stack">
        {techIcons.map((icon: TechIcon) => {
          return (
            <SlideIn key={icon.id}>
              <li className="tech-stack__list-item">
                <img
                  className="tech-stack__icons"
                  src={icon.img}
                  alt={icon.title}
                />
                <p>{icon.title}</p>
              </li>
            </SlideIn>
          );
        })}
      </ul>
    </>
  );
};

export default TechStack;
