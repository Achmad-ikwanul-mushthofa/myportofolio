import { FaGitAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { translations, type Language } from "../data/translations";

type SkillsProps = {
  language: Language;
};

type Skill = {
  name: string;
  icon: React.ReactNode;
};

const skills: Skill[] = [
  {
    name: "Prisma",
    icon: <SiPrisma />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Git & GitHub",
    icon: (
      <span className="flex items-center gap-1">
        <FaGitAlt />
        <FaGithub />
      </span>
    ),
  },
  {
    name: "React JS",
    icon: <FaReact />,
  },
  {
    name: "React Native",
    icon: <FaReact />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
];

export function Skills({ language }: SkillsProps) {
  const t = translations[language].skills;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;

    const y = ((e.clientY - rect.top) / rect.height) * 100;

    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);

    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <section
      id="skills"
      className="relative flex min-h-[100svh] items-center overflow-hidden py-24 lg:py-28"
    >
      <Container className="w-full">
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="skills-marquee-container mt-12"
        >
          <div className="skills-marquee">
            <div className="skills-track">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  onMouseMove={handleMouseMove}
                  className="skill-card"
                >
                  <span className="skill-icon">{skill.icon}</span>

                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
