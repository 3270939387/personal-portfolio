import { PageHeader } from "../components/PageHeader";
import { TagList } from "../components/TagList";
import type { Language } from "../data/profile";
import { profile } from "../data/profile";

interface InternshipsProps {
  language: Language;
}

export function Internships({ language }: InternshipsProps) {
  return (
    <section>
      <PageHeader eyebrow={profile.ui.sections.timeline[language]} title={profile.ui.pages.internships[language]} />
      <div className="timeline">
        {profile.internships.map((item) => (
          <article className="timeline-item" key={item.id}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <img alt={item.company} className="company-logo" src={item.logo} />
              <div className="timeline-content">
                <div className="timeline-heading">
                  <div>
                    <h3>{item.company}</h3>
                    <p>{item.role[language]}</p>
                  </div>
                  <span>{item.date[language]}</span>
                </div>
                <p className="muted">{item.location[language]}</p>
                {item.description ? <p>{item.description[language]}</p> : null}
                <ul className="contribution-list">
                  {item.contributions.map((contribution) => (
                    <li key={contribution.en}>{contribution[language]}</li>
                  ))}
                </ul>
                <TagList tags={item.tags} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
