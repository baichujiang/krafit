import Image from "next/image";

type Props = {
  className?: string;
  variant: "header" | "footer";
  priority?: boolean;
};

const sizeClass = {
  header:
    "h-12 w-auto max-w-[min(96vw,360px)] sm:h-14 sm:max-w-[min(94vw,440px)] md:h-16 md:max-w-[min(90vw,520px)]",
  footer: "h-10 w-auto max-w-[min(90vw,300px)] sm:h-11 sm:max-w-[380px]",
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
