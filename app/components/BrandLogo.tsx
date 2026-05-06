import { KrafitLogoDark } from "./KrafitLogoDark";

type Props = {
  className?: string;
  variant: "header" | "footer";
  /** Kept for API compatibility; SVG needs no LCP priority */
  priority?: boolean;
};

const sizeClass = {
  header: "h-9 w-auto max-w-[min(92vw,240px)] sm:max-w-[260px]",
  footer: "h-7 w-auto max-w-[200px]",
} as const;

export function BrandLogo({ className = "", variant }: Props) {
  return (
    <KrafitLogoDark
      title="KRAFIT"
      className={`${sizeClass[variant]} ${className}`}
    />
  );
}
