import Image from "next/image";

type Props = {
  className?: string;
  variant: "header" | "footer";
  priority?: boolean;
};

const sizeClass = {
  header: "h-9 w-auto max-w-[min(92vw,240px)] sm:max-w-[260px]",
  footer: "h-7 w-auto max-w-[200px]",
} as const;

/** Official dark-theme wordmark (white + lime on dark). */
export function BrandLogo({ className = "", variant, priority }: Props) {
  return (
    <Image
      src="/logo-wordmark.png"
      alt="KRAFIT"
      width={1024}
      height={1024}
      priority={Boolean(priority)}
      className={`object-contain object-left ${sizeClass[variant]} ${className}`}
    />
  );
}
