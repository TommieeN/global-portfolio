import { projects } from "../../constants";
import { Reveal } from "../../utils/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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
              <Reveal width="100%">
                <div className="project__title-container">
                  <p className="project__title">{project.title}</p>
                  <div className="project__icons">
                  <a
                    target="_blank"
                    className="project__links"
                    href={project.link}
                  >
                    <FontAwesomeIcon
                      className="landing-page__logo"
                      icon={faGithub}
                      size="xl"
                    />
                  </a>
                  <a
                    target="_blank"
                    className="project__links"
                    href={project.deploy}
                  >
                    <FontAwesomeIcon
                      className="landing-page__logo"
                      icon={faArrowRightFromBracket}
                      size="xl"
                    />
                  </a>
                  </div>
                </div>
              </Reveal>
              <Reveal overflow="initial">
                <div className="project__image-container">
                  <img
                    className="project__image"
                    src={project.img}
                    alt={`${project.title}-project-image`}
                  />
                </div>
              </Reveal>
              <Reveal>
                <div className="project__description-container">
                  <p className="project__description">{project.description}</p>
                </div>
              </Reveal>
              <Reveal width="100%">
                <div className="project__tech">
                  {project.techStack.map((tech: string) => {
                    return (
                      <p key={tech} className="project__tags">
                        -{tech}-
                      </p>
                    );
                  })}
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
