import type { LocalizedString } from "../data/profile";

interface PageHeaderProps {
  title: string;
  eyebrow?: string;
  description?: LocalizedString | string;
}

export function PageHeader({ title, eyebrow, description }: PageHeaderProps) {
  return (
    <header className="page-header">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {typeof description === "string" ? <p>{description}</p> : null}
    </header>
  );
}
