import {
  FaArrowDown,
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import toast from "react-hot-toast";

import { Container } from "../components/Container";
import { ThreeScene } from "../components/ThreeScene";
import { siteConfig } from "../data/site";
import { translations, type Language } from "../data/translations";

type HeroProps = {
  language: Language;
};

export function Hero({ language }: HeroProps) {
  const t = translations[language].hero;

  const handleDownloadCV = () => {
    toast.success("CV berhasil diunduh", {
      icon: "✓",
    });
  };

  return (
    <section
      id="home"
      className="relative flex h-[100svh] min-h-[720px] items-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />

      <div className="pointer-events-none absolute left-1/3 top-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <Container className="relative grid w-full items-center gap-8 lg:grid-cols-[1fr_.9fr] lg:gap-10">
        {/* LEFT */}
        <div
          data-aos="fade-right"
          className="relative z-10 flex flex-col justify-center"
        >
          {/* FULL STACK DEVELOPER */}
          <div className="mb-6">
            <div className="developer-badge">
              <span className="developer-dot" />
              <span className="developer-line" />

              <p className="developer-text">{t.eyebrow}</p>

              <span className="developer-line" />
              <span className="developer-dot" />
            </div>
          </div>

          {/* NAME */}
          <h1 className="max-w-3xl text-5xl font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.4rem]">
            Achmad
            <br />
            <span className="animated-gradient-text">
              Ikwanul
              <br />
              Mushthofa
            </span>
          </h1>

          {/* ROLE */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300 sm:text-base">
            <span>Full-Stack Developer</span>

            <span className="text-blue-400">•</span>

            <span>
              {language === "en"
                ? "Information Systems Student"
                : "Mahasiswa Sistem Informasi"}
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            {t.description}
          </p>

          {/* BUTTONS */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              {t.viewProjects}

              <FaArrowRight className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={siteConfig.cv}
              download
              onClick={handleDownloadCV}
              className="rounded-xl border border-blue-400/20 bg-white/[0.02] px-6 py-3.5 font-bold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/5"
            >
              <FaDownload className="mr-2 inline" />

              {language === "en" ? "Download CV" : "Download CV"}
            </a>
          </div>

          {/* SOCIAL */}
          <div className="hero-social mt-7 flex items-center gap-6">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hero-social-link"
            >
              <FaGithub size={22} />
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hero-social-link"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="hero-social-link"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT / THREE JS */}
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          className="relative flex h-[480px] items-center justify-center lg:h-[600px]"
        >
          {/* AVAILABLE BUBBLE */}
          <div className="availability-bubble absolute left-[8%] top-[12%] z-20">
            <span className="availability-dot" />

            <span>
              {language === "en"
                ? "Available for Opportunities"
                : "Terbuka untuk Peluang Kerja"}
            </span>
          </div>

          {/* THREE SCENE */}
          <div className="three-wrapper relative h-[430px] w-full max-w-[560px] lg:h-[520px]">
            <ThreeScene />
          </div>

          {/* TECHNOLOGY LABEL */}
          <div className="glass absolute bottom-[8%] left-1/2 z-20 -translate-x-1/2 rounded-xl px-4 py-3 text-xs whitespace-nowrap text-slate-300 shadow-xl shadow-blue-950/20">
            React • Node • PostgreSQL
          </div>
        </div>
      </Container>

      {/* SCROLL */}
      <a
        href="#about"
        className="absolute bottom-7 right-8 hidden items-center gap-2 text-[10px] font-medium uppercase tracking-[0.35em] text-slate-500 transition hover:text-blue-400 md:flex"
      >
        {t.scroll}

        <FaArrowDown className="text-blue-400" />
      </a>
    </section>
  );
}