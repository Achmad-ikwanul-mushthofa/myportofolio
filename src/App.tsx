import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Certificates } from "./sections/Certificates";
import { Contact } from "./sections/Contact";

import type { Language } from "./data/translations";

export default function App() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 90,
    });

    AOS.refresh();

    // Setiap browser di-refresh, kembali ke Hero
    window.history.scrollRestoration = "manual";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    const handleBeforeUnload = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "rgba(2, 6, 23, 0.9)",
            color: "#fff",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            borderRadius: "16px",
            boxShadow: "0 20px 60px rgba(37, 99, 235, 0.2)",
            backdropFilter: "blur(16px)",
          },
        }}
      />

      <Navbar language={language} setLanguage={setLanguage} />

      <main>
        <Hero language={language} />
        <About language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Certificates language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
}
