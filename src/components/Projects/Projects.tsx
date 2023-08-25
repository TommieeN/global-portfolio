import "./projects.scss";
import { projects } from "../../constants";

const Projects = () => {
  return (
    <div>
      <ul>
        {projects.map((project) => {
          return (
            <li>
              <div>
                <p>{project.title}</p>
                <img className="project__image" src={project.img} alt={project.title} />
                <p>{project.description}</p>
                <a>{project.link}</a>
                <a>{project.deploy}</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
