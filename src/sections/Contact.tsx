import { useEffect, useState, type FormEvent } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";

import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { siteConfig } from "../data/site";
import { translations, type Language } from "../data/translations";

type ContactProps = {
  language: Language;
};

type FormState = {
  name: string;
  email: string;
  message: string;
};

export function Contact({ language }: ContactProps) {
  const t = translations[language].contact;

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const visible =
        rect.top < window.innerHeight * 0.8 &&
        rect.bottom > window.innerHeight * 0.2;

      setIsVisible(visible);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappNumber = "6281236168804";

    const message =
      language === "en"
        ? `Hello Achmad,

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`
        : `Halo Achmad,

Nama: ${form.name}
Email: ${form.email}

Pesan:
${form.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Reset form setelah pesan dikirim ke WhatsApp
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-[100svh] items-center overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`contact-orb absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-blue-600/10 blur-[120px] ${
            isVisible ? "contact-orb-active" : ""
          }`}
        />

        <div
          className={`contact-orb absolute bottom-[10%] right-[10%] h-80 w-80 rounded-full bg-blue-500/10 blur-[130px] ${
            isVisible ? "contact-orb-active contact-orb-delay" : ""
          }`}
        />

        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      </div>

      <Container className="relative w-full">
        <div
          data-aos="fade-up"
          className={`contact-wrapper relative overflow-hidden rounded-[2rem] border border-blue-500/20 bg-slate-950/70 p-6 shadow-2xl shadow-blue-950/20 backdrop-blur-xl sm:p-8 lg:p-12 ${
            isVisible ? "contact-glow-active" : ""
          }`}
        >
          {/* Moving light */}
          <div className="contact-shine pointer-events-none absolute inset-0" />

          {/* Top decorative line */}
          <div className="contact-line pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* LEFT */}
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="relative z-10"
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-60" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-blue-400" />
                </span>

                <span className="text-[10px] font-black tracking-[0.3em] text-blue-400">
                  {language === "en" ? "READY TO CONNECT" : "SIAP TERHUBUNG"}
                </span>
              </div>

              <SectionHeading
                eyebrow={t.eyebrow}
                title={t.title}
                description={t.description}
              />

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-blue-600 px-5 py-3.5 font-bold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <FaEnvelope className="relative z-10" />

                  <span className="relative z-10">
                    {language === "en" ? "Email Me" : "Email Saya"}
                  </span>
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3.5 font-bold text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/5 hover:text-white"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <FaLinkedin className="relative z-10" />

                  <span className="relative z-10">LinkedIn</span>
                </a>
              </div>

              <div className="mt-8 flex items-center gap-5 text-slate-500">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition duration-300 hover:-translate-y-1 hover:text-blue-400"
                >
                  <FaGithub size={19} />
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="transition duration-300 hover:-translate-y-1 hover:text-blue-400"
                >
                  <FaLinkedin size={19} />
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition duration-300 hover:-translate-y-1 hover:text-blue-400"
                >
                  <FaEnvelope size={19} />
                </a>
              </div>
            </div>

            {/* RIGHT - FORM */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="relative z-10"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-black tracking-[0.18em] text-slate-500 uppercase"
                  >
                    {t.name}
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder={
                      language === "en"
                        ? "Enter your name"
                        : "Masukkan nama kamu"
                    }
                    className="contact-input w-full rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-blue-500/50 focus:bg-blue-500/[0.03] focus:shadow-[0_0_30px_rgba(37,99,235,0.08)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-black tracking-[0.18em] text-slate-500 uppercase"
                  >
                    {t.email}
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder={
                      language === "en"
                        ? "Enter your email"
                        : "Masukkan email kamu"
                    }
                    className="contact-input w-full rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-blue-500/50 focus:bg-blue-500/[0.03] focus:shadow-[0_0_30px_rgba(37,99,235,0.08)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-black tracking-[0.18em] text-slate-500 uppercase"
                  >
                    {t.message}
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder={
                      language === "en"
                        ? "Tell me about your project or idea"
                        : "Ceritakan project atau ide kamu"
                    }
                    className="contact-input w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-blue-500/50 focus:bg-blue-500/[0.03] focus:shadow-[0_0_30px_rgba(37,99,235,0.08)]"
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30"
                >
                  {/* Shine */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <FaWhatsapp className="relative z-10 text-lg" />

                  <span className="relative z-10">
                    {language === "en"
                      ? "Send via WhatsApp"
                      : "Kirim via WhatsApp"}
                  </span>

                  <FaPaperPlane className="relative z-10 text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-600">
            © 2026 {siteConfig.name}.{" "}
          </p>
        </div>
      </Container>
    </section>
  );
}
