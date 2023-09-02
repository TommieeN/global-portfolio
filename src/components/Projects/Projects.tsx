import "./projects.scss";
import { projects } from "../../constants";

const Projects = () => {
  return (
    <section className="project" id="works">
      <h2 className="project__header">Projects</h2>
      <ul className="project__list-container">
        {projects.map((project) => {
          return (
            <li key={project.id} className="project__item-container">
              <div className="project__title-container">
                <p className="project__title">{project.title}</p>
                <a
                  target="_blank"
                  className="project__links"
                  href={project.link}
                ></a>
              </div>
              <div className="project__description-container">
                <p className="project__description">{project.description}</p>
              </div>
              <div className="project__image-container">
                <img
                  className="project__image"
                  src={project.img}
                  alt={`${project.title}-project-image`}
                />
              </div>
              <div className="project__tech">
                {project.techStack.map((tech) => {
                  return ( 
                    <p>{tech}</p>
                  )
                })}
              </div>
              <div className="project__btn-container">
                <a className="project__btn-link" target="_blank" href={project.deploy}>
                  <button className="project__btn">Deployment</button>
                </a>
                <a className="project__btn-link" target="_blank" href={project.link}>
                  <button className="project__btn">Code</button>
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
