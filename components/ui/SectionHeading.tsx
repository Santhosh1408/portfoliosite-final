export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <h2 className="text-5xl md:text-6xl font-black tracking-tight text-ink" style={{ fontFamily: "var(--font-jakarta)" }}>
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}