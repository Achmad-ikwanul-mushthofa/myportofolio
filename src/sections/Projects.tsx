import { FaArrowRight, FaGithub } from "react-icons/fa";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { projects, projectTranslations } from "../data/site";
import { translations, type Language } from "../data/translations";

type ProjectsProps = {
  language: Language;
};

export function Projects({ language }: ProjectsProps) {
  const t = translations[language].projects;
  const projectText = projectTranslations[language];

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;

    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;

    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
  };

  return (
    <section
      id="projects"
      className="relative min-h-[100svh] overflow-hidden py-28"
    >
      <Container>
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={t.description}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => {
            const translated = projectText[p.id as keyof typeof projectText];

            return (
              <article
                key={p.id}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="card-glow glass group overflow-hidden rounded-3xl"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src={p.image}
                    alt={translated.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold tracking-[.25em] text-blue-400 uppercase">
                    {translated.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-white">
                    {translated.title}
                  </h3>

                  <p className="mt-3 min-h-20 text-sm leading-7 text-slate-400">
                    {translated.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-blue-400/10 bg-blue-500/5 px-3 py-1 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={p.liveUrl}
                      className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white"
                    >
                      {t.viewProject}
                      <FaArrowRight className="ml-1 inline" />
                    </a>

                    <a
                      href={p.githubUrl}
                      className="rounded-lg border border-white/10 px-4 py-2 text-xs font-bold text-slate-300"
                    >
                      <FaGithub className="mr-1 inline" />
                      {t.sourceCode}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
