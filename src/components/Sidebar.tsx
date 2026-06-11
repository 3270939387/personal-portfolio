import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import type { Language } from "../data/profile";
import { profile } from "../data/profile";
import { assetUrl } from "../utils/assets";
import { LanguageToggle } from "./LanguageToggle";

interface SidebarProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export function Sidebar({ language, onLanguageChange, isOpen, onToggle, onClose }: SidebarProps) {
  return (
    <>
      <header className="mobile-header">
        <button aria-label={profile.ui.menu[language]} className="icon-button" onClick={onToggle} type="button">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <span>{profile.person.displayName[language]}</span>
        <LanguageToggle language={language} onChange={onLanguageChange} />
      </header>

      <aside className={isOpen ? "sidebar open" : "sidebar"}>
        <div className="identity">
          <img alt={profile.person.displayName[language]} className="avatar" src={assetUrl(profile.person.avatar)} />
          <div>
            <h1>{profile.person.displayName[language]}</h1>
            <p>{profile.person.englishName}</p>
          </div>
        </div>

        <nav className="nav-menu" aria-label="Portfolio">
          {profile.ui.nav.map((item) => (
            <NavLink
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              end={item.path === "/"}
              key={item.path}
              onClick={onClose}
              to={item.path}
            >
              {item.label[language]}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <LanguageToggle language={language} onChange={onLanguageChange} />
          <p>{profile.person.location[language]}</p>
        </div>
      </aside>
      {isOpen ? <button aria-label="Close menu" className="menu-backdrop" onClick={onClose} type="button" /> : null}
    </>
  );
}
