import { FaCheckCircle } from "react-icons/fa";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { siteConfig, stats } from "../data/site";
import { translations, type Language } from "../data/translations";

type AboutProps = {
  language: Language;
};

export function About({ language }: AboutProps) {
  const t = translations[language].about;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <section
      id="about"
      className="relative min-h-[100svh] overflow-hidden py-24 lg:py-28"
    >
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          {/* PHOTO */}
          <div
            data-aos="fade-right"
            className="relative mx-auto w-full max-w-[300px]"
          >
            <div className="about-ring absolute -inset-3 rounded-[1.8rem] border border-blue-500/20" />

            <div className="about-ring-slow absolute -inset-6 rounded-[1.8rem] border border-blue-500/10" />

            <div className="glass relative overflow-hidden rounded-[1.6rem] p-2.5 shadow-2xl shadow-blue-950/30">
              <div className="about-image-glow absolute inset-0 rounded-[1.4rem]" />

              <img
                src="/images/profile.jpg"
                alt={siteConfig.name}
                className="about-photo relative z-10 aspect-[4/5] w-full object-cover object-top grayscale-[8%]"
              />

              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-blue-500/20 via-transparent to-transparent opacity-0 transition duration-700 hover:opacity-100" />
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="about-location float-slow glass absolute -bottom-4 -right-4 z-30 rounded-xl px-4 py-3"
            >
              <p className="text-[10px] text-slate-500">
                {language === "en" ? "Based in" : "Berbasis di"}
              </p>

              <p className="text-sm font-bold text-white">Jakarta, Indonesia</p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="min-w-0">
            <SectionHeading
              eyebrow={t.eyebrow}
              title={t.title}
              description={t.description}
            />

            {/* SKILLS */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.skills.map((skill, index) => (
                <div
                  key={skill}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  onMouseMove={handleMouseMove}
                  className="about-skill-card glass rounded-xl p-4 text-sm text-slate-300"
                >
                  <span className="about-skill-icon">
                    <FaCheckCircle />
                  </span>

                  <span>{skill}</span>
                </div>
              ))}
            </div>

            {/* STATS */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="about-stats glass mt-8 grid grid-cols-2 rounded-2xl p-2 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="about-stat-item px-5 py-4 sm:px-6"
                >
                  <div className="about-stat-value text-2xl font-black text-white">
                    {s.value}
                  </div>

                  <div className="mt-1 text-xs text-slate-500">
                    {language === "en" ? s.label : translateStatLabel(s.label)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function translateStatLabel(label: string) {
  const labels: Record<string, string> = {
    "Projects Built": "Project Dibuat",
    Certificates: "Sertifikat",
    "Started UT": "Mulai UT",
    "Current Base": "Domisili Saat Ini",
  };

  return labels[label] ?? label;
}
