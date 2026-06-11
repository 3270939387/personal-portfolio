import { ExternalLink as LinkIcon, FileText, Github, Linkedin, Mail, Presentation, ScrollText } from "lucide-react";
import type { ExternalLink, Language } from "../data/profile";
import { assetUrl } from "../utils/assets";

interface ExternalLinksProps {
  links: ExternalLink[];
  language: Language;
}

const iconByKind = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  resume: FileText,
  demo: Presentation,
  paper: ScrollText,
  project: LinkIcon,
};

export function ExternalLinks({ links, language }: ExternalLinksProps) {
  return (
    <div className="external-links">
      {links.map((link) => {
        const Icon = iconByKind[link.kind];
        const disabled = link.placeholder || link.href === "#";
        return (
          <a
            aria-disabled={disabled}
            className={disabled ? "external-link placeholder-link" : "external-link"}
            href={disabled ? undefined : assetUrl(link.href)}
            key={`${link.kind}-${link.label.en}`}
            rel="noreferrer"
            target={link.kind === "email" ? undefined : "_blank"}
          >
            <Icon aria-hidden="true" size={16} />
            <span>{link.label[language]}</span>
          </a>
        );
      })}
    </div>
  );
}
