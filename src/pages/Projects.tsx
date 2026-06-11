import { ExternalLinks } from "../components/ExternalLinks";
import { PageHeader } from "../components/PageHeader";
import { TagList } from "../components/TagList";
import type { Language } from "../data/profile";
import { profile } from "../data/profile";
import { assetUrl } from "../utils/assets";

interface ProjectsProps {
  language: Language;
}

export function Projects({ language }: ProjectsProps) {
  return (
    <section>
      <PageHeader
        eyebrow={profile.ui.sections.selectedWork[language]}
        title={profile.ui.pages.projects[language]}
      />
      <div className="project-grid">
        {profile.projects.map((project) => (
          <article className="project-card" key={project.id}>
            <img alt={project.title[language]} src={assetUrl(project.image)} />
            <div className="card-body">
              <div className="card-title-row">
                <h3>{project.title[language]}</h3>
                <span className={`status status-${project.status}`}>
                  {profile.ui.projectStatus[project.status][language]}
                </span>
              </div>
              {project.description ? <p>{project.description[language]}</p> : null}
              <TagList tags={project.tags} />
              <ExternalLinks language={language} links={project.links} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
