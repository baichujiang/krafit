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
    { href: `${prefix}#brand`, label: nav.brand },
    { href: `${prefix}#lines`, label: nav.lines },
    { href: `${prefix}#craft`, label: nav.craft },
    { href: `${prefix}#contact`, label: nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 md:h-16 md:flex-row md:items-center md:justify-between md:gap-0 md:py-0 lg:px-8">
        <div className="flex items-center justify-between md:contents">
          <Link
            href={prefix}
            className="group flex min-w-0 shrink items-center gap-3"
            aria-label={homeAria}
          >
            <BrandLogo
              variant="header"
              className="transition-opacity group-hover:opacity-90"
            />
            <span className="hidden min-w-0 flex-col leading-none lg:flex">
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted">
                Training essentials
              </span>
            </span>
          </Link>
          <div className="flex shrink-0 items-center gap-2 md:order-3">
            <nav
              className="flex rounded-full border border-border bg-background/60 p-0.5"
              aria-label={lang.switchTo}
            >
              <Link
                href="/en"
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  locale === "en"
                    ? "bg-accent text-background"
                    : "text-muted hover:text-foreground"
                }`}
                hrefLang="en"
                lang="en"
              >
                {lang.en}
              </Link>
              <Link
                href="/de"
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  locale === "de"
                    ? "bg-accent text-background"
                    : "text-muted hover:text-foreground"
                }`}
                hrefLang="de"
                lang="de"
              >
                {lang.de}
              </Link>
            </nav>
            <Link
              href={`${prefix}#contact`}
              className="rounded-full border border-border bg-surface-elevated px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-accent-soft"
            >
              {nav.partner}
            </Link>
          </div>
        </div>
        <nav
          className="-mx-6 flex items-center gap-8 overflow-x-auto border-t border-border px-6 pt-3 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:order-2 md:border-0 md:px-0 md:pt-0 [&::-webkit-scrollbar]:hidden"
          aria-label={navAria}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
