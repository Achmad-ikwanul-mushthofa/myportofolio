import type { Certificate, Project } from "../types";

export const siteConfig = {
  name: "Achmad Ikwanul Mushthofa",
  shortName: "MyPortofolio",
  role: "Full-Stack Developer",
  subtitle: "Information Systems Student",
  location: "Jakarta, Indonesia",
  email: "achmadihwan0404@gmail.com",
  github: "https://github.com/Achmadganzz-94",
  linkedin: "https://www.linkedin.com/in/achmadikwanulmushthofa/",
  cv: "/Achmad-Ikwanul-Mushthofa-CV.pdf",
};

export const stats = [
  { value: "3+", label: "Projects Built" },
  { value: "5+", label: "Certificates" },
  { value: "2026", label: "Started UT" },
  { value: "Jakarta", label: "Current Base" },
];

export const technologies = [
  "React JS",
  "React Native",
  "TypeScript",
  "Node.js",
  "Express.js",
  "REST API",
  "PostgreSQL",
  "MySQL",
  "Prisma",
  "Tailwind CSS",
  "Git & GitHub",
];

export const projects: Project[] = [
  {
    id: "restoinapp",
    title: "RestoinApp",
    category: "Restaurant Ordering System",
    description:
      "QR-based restaurant ordering platform with table sessions, menu, ordering, payment flow and admin monitoring.",
    image: "/projects/restoinn.jpg",
    tech: [
      "React",
      "React Native",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Midtrans",
    ],
    liveUrl: "https://github.com/Achmadganzz-94/customer-resto",
    githubUrl: "https://github.com/Achmadganzz-94/customer-resto",
  },

  {
  id: "watchlist",
  title: "Watchlist",
  category: "Personal Movie & Series Tracker",
  description:
    "A personal watchlist application for managing movies, series, and anime. Includes search functionality, show management, detailed views, and episode tracking with local storage.",
  image: "/projects/watchlist.png",
  tech: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "React Router",
    "LocalStorage",
  ],
  liveUrl: "https://github.com/Achmadganzz-94/project2-dw",
  githubUrl: "https://github.com/Achmadganzz-94/project2-dw",
},
 {
  id: "portfolio",
  title: "Interactive Developer Portfolio",
  category: "Personal Portfolio Website",
  description:
    "A modern personal portfolio website built to showcase projects, technical skills, certifications, and developer experience with interactive visuals and responsive design.",
  image: "/projects/webporto.png",
  tech: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Three.js",
    "AOS",
  ],
  liveUrl: "#",
  githubUrl: "#",
},
];

/*
|--------------------------------------------------------------------------
| PROJECT TRANSLATIONS
|--------------------------------------------------------------------------
*/

export const projectTranslations = {
  en: {
    restoinapp: {
      title: "RestoinApp",
      category: "Restaurant Ordering System",
      description:
        "QR-based restaurant ordering platform with table sessions, menu, ordering, payment flow and admin monitoring.",
    },


watchlist: {
  title: "Watchlist",
  category: "Personal Movie & Series Tracker",
  description:
    "A personal watchlist application for managing movies, series, and anime. Includes search functionality, show management, detailed views, and episode tracking with local storage.",
},


   portfolio: {
  title: "Interactive Developer Portfolio",
  category: "Personal Portfolio Website",
  description:
    "A modern personal portfolio website built to showcase projects, technical skills, certifications, and developer experience with interactive visuals and responsive design.",
},
  },

  id: {
    restoinapp: {
      title: "RestoinApp",
      category: "Sistem Pemesanan Restoran",
      description:
        "Platform pemesanan restoran berbasis QR dengan sesi meja, menu, pemesanan, alur pembayaran, dan monitoring admin.",
    },


watchlist: {
  title: "Aplikasi Watchlist Pribadi",
  category: "Pengelola Film, Series & Anime",
  description:
    "Aplikasi untuk mengelola daftar tontonan film, series, dan anime. Dilengkapi fitur pencarian, penambahan dan pengelolaan tontonan, halaman detail, serta pencatatan episode menggunakan local storage.",
},


portfolio: {
  title: "Portfolio Developer Interaktif",
  category: "Website Portfolio Personal",
  description:
    "Website portfolio personal modern untuk menampilkan project, skill teknis, sertifikasi, dan pengalaman developer dengan visual interaktif serta tampilan yang responsif.",
},
  },
} as const;

/*
|--------------------------------------------------------------------------
| CERTIFICATES
|--------------------------------------------------------------------------
*/

export const certificates: Certificate[] = [
 {
  id: "cert-1",
  title: "Responsive Web Design",
  issuer: "freeCodeCamp",
  year: "2026",
  image: "/certificates/freecodecamp.png",
  credentialUrl:
    "https://www.freecodecamp.org/certification/achmad-ikwanul-mushthofa/responsive-web-design-v9",
},

  {
  id: "cert-2",
  title: "Fundamental of Assistant Web Developer - Nasional",
  issuer: "Digital Talent Academy",
  year: "2026",
  image: "/certificates/dtaweb.png",
  credentialUrl: "https://drive.google.com/file/d/1pMeZ6xGkVy1y5qNLVwGwF-4phqX7WmM5/view?usp=sharing",
},

 {
  id: "cert-3",
  title: "Konsep Pemrograman - Micro Skill",
  issuer: "Digital Talent Scholarship",
  year: "2026",
  image: "/certificates/konsepprogram.png",
  credentialUrl: "https://drive.google.com/file/d/1RY-VI9lxJtGB1OUm04GO6c4Tttg1Ndny/view?usp=sharing",
},

  {
    id: "cert-4",
    title: "Backend & API Development",
    issuer: "Certificate Provider",
    year: "2026",
    image: "/certificates/certificate-4.svg",
    credentialUrl: "#",
  },

  {
    id: "cert-5",
    title: "Professional Development",
    issuer: "Certificate Provider",
    year: "2026",
    image: "/certificates/certificate-5.svg",
    credentialUrl: "#",
  },
];

/*
|--------------------------------------------------------------------------
| CERTIFICATE TRANSLATIONS
|--------------------------------------------------------------------------
| Hanya title dan issuer yang diterjemahkan.
| Data image, year, id, dan credentialUrl tetap mengambil dari certificates.
|--------------------------------------------------------------------------
*/

export const certificateTranslations = {
  en: {
    "cert-1": {
      title: "Responsive Web Development",
      issuer: "FreeCodeCamp",
    },

    "cert-2": {
      title: "Fundamental of Assistant Web Developer - Nasional",
      issuer: "Digital Talent Academy",
    },

    "cert-3": {
  title: "Programming Concepts - Micro Skill",
  issuer: "Digital Talent Scholarship",
},

    "cert-4": {
      title: "Backend & API Development",
      issuer: "Certificate Provider",
    },

    "cert-5": {
      title: "Professional Development",
      issuer: "Certificate Provider",
    },
  },

  id: {
    "cert-1": {
      title: "Responsive Web Development",
      issuer: "FreeCodeCamp",
    },

"cert-2": {
  title: "Fundamental of Assistant Web Developer - Nasional",
  issuer: "Digital Talent Academy",
},

    "cert-3": {
  title: "Konsep Pemrograman - Micro Skill",
  issuer: "Digital Talent Scholarship",
},

    "cert-4": {
      title: "Pengembangan Backend & API",
      issuer: "Penyedia Sertifikat",
    },

    "cert-5": {
      title: "Pengembangan Profesional",
      issuer: "Penyedia Sertifikat",
    },
  },
} as const;
