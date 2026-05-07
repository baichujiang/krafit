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
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-10 px-6 md:flex-row md:items-end md:justify-between md:px-10 lg:px-14">
        <div>
          <BrandLogo variant="footer" />
          <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted">© {year} KRAFIT. {footer.rights}</p>
        </div>
        <nav className="flex flex-wrap gap-7 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
