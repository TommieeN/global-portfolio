import "./techStack.scss";
import { techIcons } from "../../constants";

const TechStack = () => {
  return (
    <>
      <div className="tech-header">
        <h2 className="tech-header__heading">Tech Stack</h2>
      </div>
      <ul className="tech-stack">
        {techIcons.map((icon) => {
          return (
            <li className="tech-stack__list-item">
              <img
                className="tech-stack__icons"
                src={icon.img}
                alt={icon.title}
              />
              <p>{icon.title}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TechStack;
