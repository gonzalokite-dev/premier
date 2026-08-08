export default function PlaceholderImage({
  alt,
  label,
  className = "",
}: {
  alt: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-end overflow-hidden bg-gradient-to-br from-sand-100 via-stone-200 to-stone-300 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.55),transparent_60%)]" />
      {label && (
        <span className="relative m-6 text-[0.65rem] font-normal uppercase tracking-[0.25em] text-gray-700/70">
          {label}
        </span>
      )}
    </div>
  );
}
