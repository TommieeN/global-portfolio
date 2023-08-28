import "./projects.scss";
import { projects } from "../../constants";

const Projects = () => {
  return (
    <section className="project">
      <ul>
        {projects.map((project) => {
          return (
            <li className="project__item-container">
              <div>                 
                  <a
                    target="_blank"
                    className="project__links"
                    href={project.link}
                  >
                  </a>
                <img
                  className="project__image"
                  src={project.img}
                  alt={`${project.title}-project-image`}
                />
                <p>{project.title}</p>
                <div className="project__description-container">
                  <p>{project.description}</p>
                  <a target="_blank" href={project.deploy}>
                    Deploy
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
