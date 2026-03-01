export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const a = align === "left" ? "text-left" : "text-center";
  return (
    <div className={`${a} mb-10`}>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm md:text-base text-neutral-600">{subtitle}</p>
      ) : null}
    </div>
  );
}