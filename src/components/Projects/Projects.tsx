import "./projects.scss";
import { projects } from "../../constants";
import gitLogo from "../../assets/github-alt.svg";

const Projects = () => {
  return (
    <section className="project">
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.id} className="project__item-container">
              <div>
                <div className="project__title-container">
                  <p>{project.title}</p>
                  <a
                    target="_blank"
                    className="project__links"
                    href={project.link}
                  >
                    <img
                      className="project__github-logo"
                      src={gitLogo}
                      alt="cat-github-logo"
                    />
                  </a>
                </div>
                <img
                  className="project__image"
                  src={project.img}
                  alt={`${project.title}-project-image`}
                />
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
