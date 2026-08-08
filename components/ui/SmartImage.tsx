import Image from "next/image";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function SmartImage({
  src,
  alt,
  placeholderLabel,
  className = "",
  sizes,
  priority = false,
}: {
  src?: string | null;
  alt: string;
  placeholderLabel?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (!src) {
    return (
      <PlaceholderImage
        alt={alt}
        label={placeholderLabel}
        className={`absolute inset-0 h-full w-full ${className}`}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "100vw"}
      priority={priority}
      className={`object-cover ${className}`}
    />
  );
}
