import Image from "next/image";

type Props = {
  className?: string;
  variant: "header" | "footer";
  priority?: boolean;
};

const sizeClass = {
  header: "h-9 w-[9.75rem] sm:h-10 sm:w-[10.75rem] md:h-11 md:w-[11.75rem]",
  footer: "h-7 w-[7.75rem] sm:h-8 sm:w-[8.75rem]",
} as const;

export function BrandLogo({ className = "", variant, priority }: Props) {
  return (
    <span className={`relative block overflow-hidden ${sizeClass[variant]} ${className}`}>
      <Image
        src="/logo-wordmark-light.png"
        alt="KRAFIT"
        fill
        preload={Boolean(priority)}
        sizes={variant === "header" ? "172px" : "140px"}
        className="object-cover object-center mix-blend-multiply"
      />
    </span>
  );
}
