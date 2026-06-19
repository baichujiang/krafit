import Link from "next/link";

import { BrandLogo } from "./BrandLogo";
import type { Locale, Messages } from "@/lib/messages";

type Props = {
  locale: Locale;
  messages: Messages;
};

export function Footer({ locale, messages }: Props) {
  const { nav, footer, lang } = messages;
  const prefix = `/${locale}`;
  const year = new Date().getFullYear();

  const links = [
    { href: `${prefix}#lines`, label: nav.lines },
    { href: `${prefix}#guide`, label: nav.guide },
    { href: `${prefix}#craft`, label: nav.craft },
    { href: `${prefix}#contact`, label: nav.contact },
    { href: `${prefix}/imprint`, label: footer.imprint },
    { href: `${prefix}/privacy`, label: footer.privacy },
  ];

  return (
    <footer className="border-t border-border bg-background-warm py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <BrandLogo variant="footer" />
          <p className="mt-2 text-xs text-muted">
            © {year} KRAFIT. {footer.rights}
          </p>
        </div>
        <div className="flex flex-col gap-5 md:items-end">
          <nav className="flex flex-wrap gap-5 text-sm text-muted">
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
          <div className="flex items-center gap-1.5 text-xs text-muted" aria-label={lang.switchTo}>
            <Link href="/en" hrefLang="en" lang="en" className={`font-medium ${locale === "en" ? "text-foreground" : "hover:text-foreground/80"}`}>
              {lang.en}
            </Link>
            <span className="text-border-strong" aria-hidden>/</span>
            <Link href="/de" hrefLang="de" lang="de" className={`font-medium ${locale === "de" ? "text-foreground" : "hover:text-foreground/80"}`}>
              {lang.de}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
