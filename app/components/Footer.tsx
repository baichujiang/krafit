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
    <footer className="border-t border-border bg-surface py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-6">
          <BrandLogo variant="footer" />
          <p className="text-sm text-muted">
            © {year} KRAFIT. {footer.rights}
          </p>
        </div>
        <div className="flex flex-wrap gap-8 text-sm text-muted">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
