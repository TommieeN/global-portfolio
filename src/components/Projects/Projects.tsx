import { projects } from "../../constants";
import { Reveal } from "../../utils/Reveal";
import "./projects.scss";

interface ProjectProps {
  id: number;
  title: string;
  link: string;
  description: string;
  img: string;
  techStack: string[];
  deploy?: string;
}

const Projects: React.FC = () => {
  return (
    <section className="project" id="works">
      <h2 className="project__header">Projects.</h2>
      <div className="project__list-container">
        {projects.map((project: ProjectProps) => {
          return (
            <div key={project.id} className="project__item-container">
              <Reveal>
                <div className="project__title-container">
                  <p className="project__title">{project.title}</p>
                  <a
                    target="_blank"
                    className="project__links"
                    href={project.link}
                  ></a>
                </div>
              </Reveal>
              <Reveal>
                <div className="project__description-container">
                  <p className="project__description">{project.description}</p>
                </div>
              </Reveal>
              <Reveal>
                <div className="project__image-container">
                  <img
                    className="project__image"
                    src={project.img}
                    alt={`${project.title}-project-image`}
                  />
                </div>
              </Reveal>
              <Reveal>
                <div className="project__tech">
                  {project.techStack.map((tech: string) => {
                    return (
                      <p key={tech} className="project__tags">
                        {tech}
                      </p>
                    );
                  })}
                </div>
              </Reveal>
              <Reveal>
                <div className="project__btn-container">
                  <a
                    className="project__btn-link"
                    target="_blank"
                    href={project.deploy}
                  >
                    <button className="project__btn">Deployment</button>
                  </a>
                  <a
                    className="project__btn-link"
                    target="_blank"
                    href={project.link}
                  >
                    <button className="project__btn">Code</button>
                  </a>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
