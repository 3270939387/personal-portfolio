import { MapPin } from "lucide-react";
import { ExternalLinks } from "../components/ExternalLinks";
import { TagList } from "../components/TagList";
import type { Language } from "../data/profile";
import { profile } from "../data/profile";

interface HomeProps {
  language: Language;
}

export function Home({ language }: HomeProps) {
  return (
    <section className="home-page">
      <div className="hero-layout">
        <div className="hero-copy">
          <span className="eyebrow">
            <MapPin aria-hidden="true" size={15} />
            {profile.person.location[language]}
          </span>
          <h2>{profile.person.name}</h2>
          <p className="lead">{profile.person.introduction[language]}</p>
          <ExternalLinks language={language} links={profile.person.quickLinks} />
        </div>
        <img alt={profile.person.displayName[language]} className="hero-image" src={profile.person.heroImage} />
      </div>

      <div className="section-grid two-columns">
        <section className="panel">
          <h3>{profile.ui.sections.keywords[language]}</h3>
          <TagList tags={profile.person.keywords.map((keyword) => keyword[language])} />
        </section>

        <section className="panel">
          <h3>{profile.ui.sections.quickLinks[language]}</h3>
          <div className="facts">
            {profile.person.education.map((item) => (
              <div className="fact" key={item.label.en}>
                <span>{item.label[language]}</span>
                <strong>{item.value[language]}</strong>
              </div>
            ))}
            <div className="fact">
              <span>{profile.ui.facts.hobbies[language]}</span>
              <strong>{profile.person.hobbies[language]}</strong>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
