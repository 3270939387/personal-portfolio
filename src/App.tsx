import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { useLanguage } from "./hooks/useLanguage";
import { Home } from "./pages/Home";
import { Internships } from "./pages/Internships";
import { Life } from "./pages/Life";
import { Projects } from "./pages/Projects";

export function App() {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-shell">
      <Sidebar
        isOpen={menuOpen}
        language={language}
        onClose={() => setMenuOpen(false)}
        onLanguageChange={setLanguage}
        onToggle={() => setMenuOpen((open) => !open)}
      />
      <main className="content-shell">
        <Routes>
          <Route element={<Home language={language} />} path="/" />
          <Route element={<Projects language={language} />} path="/projects" />
          <Route element={<Internships language={language} />} path="/internships" />
          <Route element={<Life language={language} />} path="/life" />
          <Route element={<Navigate replace to="/" />} path="*" />
        </Routes>
      </main>
    </div>
  );
}
