import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";

import {
  certificates as siteCertificates,
  certificateTranslations,
} from "../data/site";

import { translations, type Language } from "../data/translations";

type CertificatesProps = {
  language: Language;
};

const ITEMS_PER_PAGE = 2;

export function Certificates({ language }: CertificatesProps) {
  const t = translations[language].certificates;

  const certificates = siteCertificates.map((certificate) => {
    const translation =
      certificateTranslations[language][
        certificate.id as keyof typeof certificateTranslations.en
      ];

    return {
      ...certificate,
      title: translation.title,
      issuer: translation.issuer,
    };
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [page, setPage] = useState(0);
  const [changing, setChanging] = useState(false);

  const totalPages = Math.ceil(certificates.length / ITEMS_PER_PAGE);

  const activeCertificate = certificates[activeIndex];

  const startIndex = page * ITEMS_PER_PAGE;

  const visibleCertificates = certificates.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const selectCertificate = (index: number) => {
    if (index === activeIndex) {
      return;
    }

    setChanging(true);

    setTimeout(() => {
      setActiveIndex(index);
      setChanging(false);
    }, 180);
  };

  const changePage = (newPage: number) => {
    if (newPage < 0 || newPage >= totalPages) {
      return;
    }

    setPage(newPage);

    const newIndex = newPage * ITEMS_PER_PAGE;

    setChanging(true);

    setTimeout(() => {
      setActiveIndex(newIndex);
      setChanging(false);
    }, 180);
  };

  useEffect(() => {
    const activePage = Math.floor(activeIndex / ITEMS_PER_PAGE);

    if (activePage !== page) {
      setPage(activePage);
    }
  }, [activeIndex, page]);

  if (!activeCertificate) {
    return null;
  }

  return (
    <section
      id="certificates"
      className="relative flex min-h-[100svh] items-center overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px] sm:h-96 sm:w-96 sm:blur-[140px]" />

      {/* Additional glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-48 w-48 rounded-full bg-blue-500/5 blur-[100px] sm:h-56 sm:w-56" />

      <Container className="relative w-full">
        {/* Section Heading */}
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
          />
        </div>

        {/* Main Content */}
        <div className="mt-8 grid items-center gap-7 sm:mt-10 sm:gap-8 lg:mt-12 lg:grid-cols-[1.1fr_.9fr]">
          {/* ======================================================= */}
          {/* LEFT - CERTIFICATE PREVIEW */}
          {/* ======================================================= */}

          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="relative w-full"
          >
            {/* Decorative circle */}
            <div className="absolute -left-3 -top-3 h-10 w-10 rounded-full border border-blue-500/10 sm:-left-5 sm:-top-5 sm:h-14 sm:w-14" />

            {/* Decorative circle */}
            <div className="absolute -bottom-3 -right-3 h-14 w-14 rounded-full border border-blue-500/10 sm:-bottom-5 sm:-right-5 sm:h-20 sm:w-20" />

            <div
              className={`certificate-preview glass relative w-full overflow-hidden rounded-2xl p-2 sm:p-3 ${
                changing
                  ? "translate-y-2 scale-[0.985] opacity-0"
                  : "translate-y-0 scale-100 opacity-100"
              } transition-all duration-500`}
            >
              <div className="certificate-image-wrapper relative overflow-hidden rounded-xl">
                <img
                  key={activeCertificate.image}
                  src={activeCertificate.image}
                  alt={activeCertificate.title}
                  className="certificate-image h-[250px] w-full object-cover object-top transition-all duration-700 sm:h-[330px] md:h-[390px] lg:h-[430px]"
                />

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                {/* Certificate information */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-blue-400 sm:text-[10px] sm:tracking-[0.35em]">
                    {language === "en" ? "CERTIFICATE" : "SERTIFIKAT"}
                  </p>

                  <h3 className="mt-1.5 text-base font-black text-white sm:mt-2 sm:text-xl lg:text-2xl">
                    {activeCertificate.title}
                  </h3>

                  <p className="mt-1 text-[11px] text-slate-400 sm:text-sm">
                    {activeCertificate.issuer} • {activeCertificate.year}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================= */}
          {/* RIGHT - CERTIFICATE LIST */}
          {/* ======================================================= */}

          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="relative w-full"
          >
            <div className="space-y-2.5 sm:space-y-3">
              {visibleCertificates.map((certificate, localIndex) => {
                const index = startIndex + localIndex;
                const active = activeIndex === index;

                return (
                  <button
                    key={certificate.id}
                    type="button"
                    onClick={() => selectCertificate(index)}
                    className={`certificate-card group flex w-full min-w-0 items-center gap-3 rounded-xl border p-3 text-left transition-all duration-500 sm:gap-4 sm:p-4 ${
                      active
                        ? "certificate-active border-blue-500/40 bg-blue-500/[0.08] shadow-lg shadow-blue-950/20"
                        : "border-white/5 bg-white/[0.02] hover:-translate-y-1 hover:border-blue-500/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="certificate-thumb-wrapper h-14 w-20 shrink-0 overflow-hidden rounded-lg border border-white/10 sm:h-16 sm:w-24">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="certificate-thumb h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Information */}
                    <div className="min-w-0 flex-1">
                      <h3 className="certificate-card-title truncate text-sm font-bold text-white sm:text-base">
                        {certificate.title}
                      </h3>

                      <p className="certificate-card-meta mt-1 truncate text-[10px] text-slate-500 sm:text-xs">
                        {certificate.issuer} • {certificate.year}
                      </p>
                    </div>

                    {/* Active indicator */}
                    <span
                      className={`certificate-indicator h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-500 sm:h-2 sm:w-2 ${
                        active
                          ? "bg-blue-400 shadow-lg shadow-blue-400/60"
                          : "bg-slate-700"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* ===================================================== */}
            {/* PAGINATION */}
            {/* ===================================================== */}

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-5 flex items-center justify-between sm:mt-6"
            >
              {/* Previous */}
              <button
                type="button"
                disabled={page === 0}
                onClick={() => changePage(page - 1)}
                aria-label="Previous page"
                className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-300 sm:h-10 sm:w-10 ${
                  page === 0
                    ? "cursor-not-allowed border-white/5 text-slate-700"
                    : "border-white/10 text-slate-400 hover:-translate-x-1 hover:border-blue-400/40 hover:text-blue-400"
                }`}
              >
                <FaArrowLeft className="text-[10px]" />
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {Array.from({ length: totalPages }).map((_, index) => {
                  const active = page === index;

                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => changePage(index)}
                      className={`flex h-8 min-w-8 items-center justify-center rounded-lg px-2.5 text-[10px] font-bold transition-all duration-300 sm:h-9 sm:min-w-9 sm:px-3 sm:text-xs ${
                        active
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                          : "border border-white/10 text-slate-500 hover:border-blue-400/30 hover:text-blue-400"
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              {/* Next */}
              <button
                type="button"
                disabled={page === totalPages - 1}
                onClick={() => changePage(page + 1)}
                aria-label="Next page"
                className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-300 sm:h-10 sm:w-10 ${
                  page === totalPages - 1
                    ? "cursor-not-allowed border-white/5 text-slate-700"
                    : "border-white/10 text-slate-400 hover:translate-x-1 hover:border-blue-400/40 hover:text-blue-400"
                }`}
              >
                <FaArrowRight className="text-[10px]" />
              </button>
            </div>

            {/* Counter */}
            <p
              data-aos="fade-up"
              data-aos-delay="350"
              className="mt-3 text-center text-[9px] font-bold tracking-[0.2em] text-slate-600 uppercase sm:text-[10px] sm:tracking-[0.25em]"
            >
              {language === "en"
                ? `Certificate ${activeIndex + 1} of ${certificates.length}`
                : `Sertifikat ${activeIndex + 1} dari ${certificates.length}`}
            </p>

            {/* View Certificate */}
            <a
              href={activeCertificate.credentialUrl ?? "#"}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/5 px-5 py-3 text-xs font-bold text-blue-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300 sm:w-auto sm:text-sm"
            >
              {t.viewCertificate}
              <FaExternalLinkAlt className="ml-2 text-[10px]" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}