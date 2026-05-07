import Link from "next/link";

import { BrandLogo } from "./BrandLogo";
import type { Locale, Messages } from "@/lib/messages";

type Props = {
  locale: Locale;
  messages: Messages;
};

export function Footer({ locale, messages }: Props) {
  const { nav, footer } = messages;
  const prefix = `/${locale}`;
  const year = new Date().getFullYear();

  const links = [
    { href: `${prefix}#brand`, label: nav.brand },
    { href: `${prefix}#lines`, label: nav.lines },
    { href: `${prefix}#craft`, label: nav.craft },
    { href: `${prefix}#contact`, label: nav.contact },
  ];

  return (
    <footer className="border-t border-border bg-surface-muted py-16 md:py-20">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-12 px-6 md:flex-row md:items-end md:justify-between md:px-10 lg:px-14">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-10">
          <BrandLogo variant="footer" />
          <p className="text-[13px] leading-relaxed text-muted">
            © {year} KRAFIT. {footer.rights}
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-10 gap-y-2 text-[13px] text-muted">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
