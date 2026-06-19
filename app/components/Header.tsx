import Link from "next/link";

import { BrandLogo } from "./BrandLogo";
import type { Locale, Messages } from "@/lib/messages";

type Props = {
  locale: Locale;
  messages: Messages;
};

export function Header({ locale, messages }: Props) {
  const { nav, navAria, homeAria, lang } = messages;
  const prefix = `/${locale}`;

  const items = [
    { href: `${prefix}#lines`, label: nav.lines },
    { href: `${prefix}#guide`, label: nav.guide },
    { href: `${prefix}#craft`, label: nav.craft },
    { href: `${prefix}#brand`, label: nav.brand },
    { href: `${prefix}#contact`, label: nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3 md:px-8">
        <Link href={prefix} className="shrink-0" aria-label={homeAria}>
          <BrandLogo variant="header" priority />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label={navAria}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs text-muted" aria-label={lang.switchTo}>
            <Link
              href="/en"
              hrefLang="en"
              lang="en"
              className={`px-1 py-0.5 font-medium ${locale === "en" ? "text-foreground" : "hover:text-foreground/80"}`}
            >
              {lang.en}
            </Link>
            <span className="text-border-strong" aria-hidden>/</span>
            <Link
              href="/de"
              hrefLang="de"
              lang="de"
              className={`px-1 py-0.5 font-medium ${locale === "de" ? "text-foreground" : "hover:text-foreground/80"}`}
            >
              {lang.de}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
