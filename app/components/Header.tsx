import Link from "next/link";

import { BrandLogo } from "./BrandLogo";
import type { Locale, Messages } from "@/lib/messages";

type Props = {
  locale: Locale;
  messages: Messages;
};

export function Header({ locale, messages }: Props) {
  const { nav, navAria, homeAria, lang, tagline } = messages;
  const prefix = `/${locale}`;

  const items = [
    { href: `${prefix}#brand`, label: nav.brand },
    { href: `${prefix}#lines`, label: nav.lines },
    { href: `${prefix}#craft`, label: nav.craft },
    { href: `${prefix}#contact`, label: nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/96 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-3 px-6 py-3 md:min-h-[5.25rem] md:flex-row md:items-center md:justify-between md:gap-0 md:px-10 lg:px-14">
        <div className="flex items-center justify-between md:contents">
          <Link href={prefix} className="group flex min-w-0 shrink items-center gap-4" aria-label={homeAria}>
            <BrandLogo variant="header" priority className="transition-opacity group-hover:opacity-90" />
            <span className="hidden max-w-[15rem] border-l border-border pl-4 lg:block">
              <span className="label-kicker text-[0.62rem] tracking-[0.2em]">{tagline}</span>
            </span>
          </Link>
          <div className="flex shrink-0 items-center gap-5 md:order-3">
            <div className="flex items-center gap-2 text-xs text-muted" aria-label={lang.switchTo}>
              <Link href="/en" hrefLang="en" lang="en" className={`font-semibold ${locale === "en" ? "text-foreground" : "hover:text-foreground/80"}`}>
                {lang.en}
              </Link>
              <span className="text-border-strong" aria-hidden>•</span>
              <Link href="/de" hrefLang="de" lang="de" className={`font-semibold ${locale === "de" ? "text-foreground" : "hover:text-foreground/80"}`}>
                {lang.de}
              </Link>
            </div>
            <Link
              href={`${prefix}#contact`}
              className="inline-flex items-center border border-border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] hover:border-brand-mark/70"
            >
              {nav.partner}
            </Link>
          </div>
        </div>

        <nav className="-mx-6 grid grid-cols-2 gap-x-7 gap-y-3 border-t border-border px-6 pt-3 sm:grid-cols-4 md:mx-0 md:flex md:items-center md:gap-8 md:border-0 md:px-0 md:pt-0" aria-label={navAria}>
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="text-[11px] font-semibold uppercase tracking-[0.13em] text-muted transition-colors hover:text-foreground md:text-[12px] md:tracking-[0.16em]">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
