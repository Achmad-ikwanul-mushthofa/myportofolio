import { useState } from "react";
import { FaArrowRight, FaGlobe } from "react-icons/fa";

import { siteConfig } from "../data/site";
import { translations, type Language } from "../data/translations";

type NavbarProps = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
};

export function Navbar({ language, setLanguage }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const t = translations[language].nav;

  const links = [
    [t.home, "home"],
    [t.about, "about"],
    [t.projects, "projects"],
    [t.certificates, "certificates"],
    [t.contact, "contact"],
  ];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "id" : "en"));
    setOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] w-full">
      <div className="glass w-full rounded-none border-x-0 border-t-0">
        <div className="mx-auto flex min-h-[60px] w-full max-w-7xl items-center justify-between px-5 py-2 lg:px-8">
          {/* LOGO */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="flex shrink-0 items-center gap-2.5 font-black text-white"
          >
            <span className="text-lg text-blue-400">&lt;/&gt;</span>

            <span className="text-base tracking-tight">
              {siteConfig.shortName}
            </span>
          </a>

          {/* DESKTOP */}
          <div className="hidden items-center gap-7 lg:flex">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-[13px] font-medium text-slate-400 transition duration-300 hover:text-white"
              >
                {label}
              </a>
            ))}

            {/* LANGUAGE */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs font-bold transition duration-300 hover:border-blue-400/40 hover:bg-blue-500/5"
            >
              <FaGlobe className="text-blue-400" />

              <span className="text-white">{language.toUpperCase()}</span>

              <span className="text-slate-600">→</span>

              <span className="text-blue-400">
                {(language === "en" ? "id" : "en").toUpperCase()}
              </span>
            </button>

            {/* HIRE ME */}
            <a
              href="#contact"
              className="group rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              {t.hireMe}

              <FaArrowRight className="ml-1.5 inline transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* MOBILE */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleLanguage}
              className="rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-xs font-bold text-blue-400 transition hover:border-blue-400/40"
            >
              {language.toUpperCase()}
            </button>

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-base text-slate-300 transition hover:border-blue-400/40 hover:text-white"
            >
              {open ? "×" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="border-t border-white/10 px-5 pb-3 pt-2 lg:hidden">
            <div className="grid gap-1">
              {links.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-blue-500/5 hover:text-white"
                >
                  {label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-blue-500"
              >
                {t.hireMe}

                <FaArrowRight className="ml-2 inline" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
