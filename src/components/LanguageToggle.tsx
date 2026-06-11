import type { Language } from "../data/profile";
import { profile } from "../data/profile";

interface LanguageToggleProps {
  language: Language;
  onChange: (language: Language) => void;
}

export function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  return (
    <div className="language-toggle" aria-label="Language">
      {(["en", "zh"] as Language[]).map((item) => (
        <button
          className={language === item ? "active" : ""}
          key={item}
          onClick={() => onChange(item)}
          type="button"
        >
          {profile.ui.languageNames[item]}
        </button>
      ))}
    </div>
  );
}
