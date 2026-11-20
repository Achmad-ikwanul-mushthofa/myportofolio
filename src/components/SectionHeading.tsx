export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div data-aos="fade-up" className="max-w-3xl">
      <p className="mb-3 text-xs font-bold tracking-[.35em] text-blue-400 uppercase">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
