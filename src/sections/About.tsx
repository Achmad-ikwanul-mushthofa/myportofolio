import { motion } from "framer-motion";
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
            {/* OUTER RINGS */}
            <div className="about-ring absolute -inset-3 rounded-[1.8rem] border border-blue-500/20" />

            <div className="about-ring-slow absolute -inset-6 rounded-[1.8rem] border border-blue-500/10" />

            {/* PHOTO FRAME */}
            <div
              className="
                glass
                group
                relative
                overflow-hidden
                rounded-[1.6rem]
                p-2.5
                shadow-2xl
                shadow-blue-950/30
                transition-all
                duration-700
                ease-out
                hover:shadow-blue-950/40
              "
            >
              {/* ORIGINAL GLOW */}
              <div className="about-image-glow absolute inset-0 rounded-[1.4rem]" />

              {/* PHOTO WRAPPER */}
              <div className="relative overflow-hidden rounded-[1.4rem]">

                {/* FOTO 1 */}
                <motion.img
                  src="/images/profile.jpg"
                  alt={siteConfig.name}
                  className="
                    about-photo
                    absolute
                    inset-0
                    z-10
                    aspect-[4/5]
                    w-full
                    object-cover
                    object-top
                    grayscale-[8%]
                  "
                  animate={{
                    opacity: [1, 1, 0, 0, 1],
                    scale: [1, 1.015, 1.08, 1.08, 1],
                    x: [0, 0, -12, -12, 0],
                    filter: [
                      "blur(0px)",
                      "blur(0px)",
                      "blur(7px)",
                      "blur(7px)",
                      "blur(0px)",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.70, 0.78, 0.90, 1],
                  }}
                />

                {/* FOTO 2 */}
                <motion.img
                  src="/images/achm.jpeg"
                  alt={`${siteConfig.name} alternate`}
                  className="
                    relative
                    z-10
                    aspect-[4/5]
                    w-full
                    object-cover
                    object-top
                  "
                  animate={{
                    opacity: [0, 0, 1, 1, 0],
                    scale: [1.08, 1.08, 1.015, 1, 1.08],
                    x: [12, 12, 0, 0, 12],
                    filter: [
                      "blur(7px)",
                      "blur(7px)",
                      "blur(0px)",
                      "blur(0px)",
                      "blur(7px)",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.70, 0.78, 0.90, 1],
                  }}
                />

                {/* SUBTLE COLOR VEIL */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-20
                    bg-gradient-to-br
                    from-blue-500/[0.06]
                    via-transparent
                    to-purple-500/[0.08]
                  "
                />

                {/* PREMIUM LIGHT SWEEP */}
                <motion.div
                  className="
                    pointer-events-none
                    absolute
                    -inset-y-10
                    -left-[120%]
                    z-30
                    w-[45%]
                    rotate-[12deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.10]
                    to-transparent
                    blur-xl
                  "
                  animate={{
                    left: ["-120%", "140%"],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    repeatDelay: 4.2,
                    ease: "easeInOut",
                  }}
                />

                {/* SOFT INNER BORDER */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-40
                    rounded-[1.4rem]
                    ring-1
                    ring-inset
                    ring-white/[0.08]
                    transition-all
                    duration-700
                    group-hover:ring-blue-300/[0.18]
                  "
                />
              </div>

              {/* VERY SUBTLE PURPLE ATMOSPHERE */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -left-20
                  z-0
                  h-40
                  w-40
                  rounded-full
                  bg-purple-500/[0.06]
                  blur-3xl
                  opacity-0
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
              />
            </div>

            {/* LOCATION */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="about-location float-slow glass absolute -bottom-4 -right-4 z-30 rounded-xl px-4 py-3"
            >
              <p className="text-[10px] text-slate-500">
                {language === "en" ? "Based in" : "Berbasis di"}
              </p>

              <p className="text-sm font-bold text-white">
                Jakarta, Indonesia
              </p>
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
                    {language === "en"
                      ? s.label
                      : translateStatLabel(s.label)}
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