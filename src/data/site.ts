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
  cv: "/CV_Achmad-Ikwanul-Mushthofa_Fullstack-Developer.pdf",
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
  image: "/certificates/free.png",
  credentialUrl:
    "https://www.freecodecamp.org/certification/achmad-ikwanul-mushthofa/responsive-web-design-v9",
},

  {
  id: "cert-2",
  title: "Belajar Dasar Pemrograman Web",
  issuer: "Dicoding",
  year: "2026",
  image: "/certificates/dicoding.png",
  credentialUrl: "https://www.dicoding.com/certificates/RVZK0O59QZD5",
},
{
  id: "cert-3",
  title: "Fundamental of Assistant Web Developer - Nasional",
  issuer: "Digital Talent Academy",
  year: "2026",
  image: "/certificates/web.png",
  credentialUrl:
    "https://drive.google.com/file/d/1pMeZ6xGkVy1y5qNLVwGwF-4phqX7WmM5/view?usp=sharing",
},

{
  id: "cert-4",
  title: "Konsep Pemrograman - Micro Skill",
  issuer: "Digital Talent Scholarship",
  year: "2026",
  image: "/certificates/konsep.png",
  credentialUrl:
    "https://drive.google.com/file/d/1RY-VI9lxJtGB1OUm04GO6c4Tttg1Ndny/view?usp=sharing",
},

{
  id: "cert-5",
  title: "Introduction to Data Science and Its Applications Across Various Sectors - Micro Skill",
  issuer: "Digital Talent Scholarship",
  year: "2026",
  image: "/certificates/sains.png",
  credentialUrl: "https://drive.google.com/file/d/1APif2ZkBnCikKFyAPsWngwEIYLENAGaL/view?usp=sharing",
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
  title: "Basic Web Programming",
  issuer: "Dicoding",
},
   "cert-3": {
  title: "Fundamental of Assistant Web Developer - National",
  issuer: "Digital Talent Academy",
},

 "cert-4": {
  title: "Programming Concepts - Micro Skill",
  issuer: "Digital Talent Scholarship",
},

"cert-5": {
  title: "Data Science Applications",
  issuer: "Digital Talent Scholarship",
},
  },

  id: {
    "cert-1": {
      title: "Responsive Web Development",
      issuer: "FreeCodeCamp",
    },

"cert-2": {
  title: "Belajar Dasar Pemrograman Web",
  issuer: "Dicoding",
},

   "cert-3": {
  title: "Fundamental of Assistant Web Developer - Nasional",
  issuer: "Digital Talent Academy",
},

"cert-4": {
  title: "Konsep Pemrograman - Micro Skill",
  issuer: "Digital Talent Scholarship",
},

"cert-5": {
  title: "Aplikasi Data Science",
  issuer: "Digital Talent Scholarship",
},
  },
} as const;
