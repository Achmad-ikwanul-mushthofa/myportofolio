export type Language = "en" | "id";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      certificates: "Certificates",
      contact: "Contact",
      hireMe: "Hire Me",
    },

    hero: {
      eyebrow: "FULL STACK DEVELOPER",
      title: "Building Digital Experiences",
      description:
        "Information Systems student and developer focused on building modern web and mobile applications with clean architecture and practical solutions.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      stack: "TECHNOLOGIES I WORK WITH",
      scroll: "SCROLL TO EXPLORE",
    },

    about: {
      eyebrow: "ABOUT ME",
      title: "Building with purpose, not just code.",
      description:
        "I am an Information Systems student and developer who enjoys turning ideas into practical digital products. My current focus is modern web and mobile development with clean, maintainable architecture.",
      skills: [
        "Responsive web applications",
        "Mobile application development",
        "REST API & database integration",
        "Clean and maintainable code",
      ],
    },

    skills: {
      eyebrow: "TECHNOLOGIES",
      title: "Technologies I Work With",
      description:
        "Tools and technologies I use to build modern digital products.",
    },

    projects: {
      eyebrow: "PROJECTS",
      title: "Things I've Built",
      description:
        "A selection of projects I have developed while learning and building real-world applications.",
      viewProject: "View Project",
      sourceCode: "Source Code",
    },

    certificates: {
      eyebrow: "CERTIFICATES",
      title: "Learning & Certifications",
      description:
        "Certificates and learning experiences that support my development journey.",
      viewCertificate: "View Certificate",
    },

    contact: {
      eyebrow: "GET IN TOUCH",
      title: "Let's build something meaningful.",
      description:
        "Have a project, opportunity, or idea? Feel free to reach out and let's connect.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
    },
  },

  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      certificates: "Sertifikat",
      contact: "Kontak",
      hireMe: "Hubungi Saya",
    },

    hero: {
      eyebrow: "FULL STACK DEVELOPER",
      title: "Membangun Pengalaman Digital",
      description:
        "Mahasiswa Sistem Informasi dan developer yang berfokus membangun aplikasi web dan mobile modern dengan arsitektur yang rapi dan solusi yang praktis.",
      viewProjects: "Lihat Project",
      contactMe: "Hubungi Saya",
      stack: "TEKNOLOGI YANG SAYA GUNAKAN",
      scroll: "SCROLL UNTUK MENJELAJAHI",
    },

    about: {
      eyebrow: "TENTANG SAYA",
      title: "Membangun dengan tujuan, bukan hanya kode.",
      description:
        "Saya adalah mahasiswa Sistem Informasi dan developer yang senang mengubah ide menjadi produk digital yang praktis. Saat ini saya berfokus pada pengembangan web dan mobile modern dengan arsitektur yang bersih dan mudah dikembangkan.",
      skills: [
        "Aplikasi web responsif",
        "Pengembangan aplikasi mobile",
        "REST API & integrasi database",
        "Kode yang bersih dan mudah dikembangkan",
      ],
    },

    skills: {
      eyebrow: "TEKNOLOGI",
      title: "Teknologi yang Saya Gunakan",
      description:
        "Tools dan teknologi yang saya gunakan untuk membangun produk digital modern.",
    },

    projects: {
      eyebrow: "PROJECT",
      title: "Project yang Saya Bangun",
      description:
        "Beberapa project yang saya kembangkan selama belajar dan membangun aplikasi nyata.",
      viewProject: "Lihat Project",
      sourceCode: "Source Code",
    },

    certificates: {
      eyebrow: "SERTIFIKAT",
      title: "Pembelajaran & Sertifikasi",
      description:
        "Sertifikat dan pengalaman belajar yang mendukung perjalanan pengembangan skill saya.",
      viewCertificate: "Lihat Sertifikat",
    },

    contact: {
      eyebrow: "HUBUNGI SAYA",
      title: "Mari membangun sesuatu yang bermakna.",
      description:
        "Punya project, peluang kerja, atau ide? Jangan ragu untuk menghubungi saya.",
      name: "Nama",
      email: "Email",
      message: "Pesan",
      send: "Kirim Pesan",
    },
  },
} as const;

export type Translation = (typeof translations)[Language];
