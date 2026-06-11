import { PageHeader } from "../components/PageHeader";
import { TagList } from "../components/TagList";
import type { Language } from "../data/profile";
import { profile } from "../data/profile";
import { assetUrl } from "../utils/assets";

interface LifeProps {
  language: Language;
}

export function Life({ language }: LifeProps) {
  return (
    <section>
      <PageHeader eyebrow={profile.ui.sections.photoJournal[language]} title={profile.ui.pages.life[language]} />
      <div className="life-sections">
        {profile.life.map((item) => (
          <article className="life-feature" key={item.id}>
            <header className="life-combined-heading">
              <span className="date">{item.date}</span>
              <h3>{item.title[language]}</h3>
              {item.description ? <p>{item.description[language]}</p> : null}
              <TagList tags={item.tags} />
            </header>

            {item.galleryGroups?.map((group) => (
              <section className="life-gallery-group" key={group.id}>
                <div className="life-gallery-heading">
                  <h4>{group.title[language]}</h4>
                  {group.description ? <p>{group.description[language]}</p> : null}
                </div>
                <div className="life-photo-mosaic">
                  {group.images.map((image, index) => (
                    <figure className={image.featured ? "life-photo featured" : "life-photo"} key={`${image.src}-${index}`}>
                      <img
                        alt={image.alt[language]}
                        loading="lazy"
                        onError={(event) => event.currentTarget.parentElement?.remove()}
                        src={assetUrl(image.src)}
                      />
                    </figure>
                  ))}
                </div>

                {group.subgroups?.map((subgroup) => (
                  <div className="life-subgroup" key={subgroup.id}>
                    <div className="life-subgroup-heading">
                      <h5>{subgroup.title[language]}</h5>
                      {subgroup.description ? <p>{subgroup.description[language]}</p> : null}
                    </div>
                    <div className="life-photo-mosaic compact">
                      {subgroup.images.map((image, index) => (
                        <figure className={image.featured ? "life-photo featured" : "life-photo"} key={`${image.src}-${index}`}>
                          <img
                            alt={image.alt[language]}
                            loading="lazy"
                            onError={(event) => event.currentTarget.parentElement?.remove()}
                            src={assetUrl(image.src)}
                          />
                        </figure>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
