import Image from "next/image";

type Props = {
  className?: string;
  variant: "header" | "footer";
  priority?: boolean;
};

/** Intrinsic size of public/logo-wordmark.png (tight crop, no square canvas). */
const LOGO_W = 968;
const LOGO_H = 187;

const sizeClass = {
  header: "h-12 w-auto max-w-full sm:h-14 md:h-16",
  footer: "h-10 w-auto max-w-full sm:h-11",
} as const;

/** Wordmark PNG — tight bounds so height-based scaling sets width naturally. */
export function BrandLogo({ className = "", variant, priority }: Props) {
  return (
    <Image
      src="/logo-wordmark.png"
      alt="KRAFIT"
      width={LOGO_W}
      height={LOGO_H}
      priority={Boolean(priority)}
      className={`object-contain object-left ${sizeClass[variant]} ${className}`}
    />
  );
}
