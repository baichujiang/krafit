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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 md:min-h-20 md:flex-row md:items-center md:justify-between md:gap-0 md:py-2 lg:px-8">
        <div className="flex items-center justify-between md:contents">
          <Link
            href={prefix}
            className="group flex min-w-0 shrink items-center gap-3"
            aria-label={homeAria}
          >
            <BrandLogo
              variant="header"
              priority
              className="transition-opacity group-hover:opacity-85"
            />
            <span className="hidden min-w-0 flex-col leading-none lg:flex">
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
                Training essentials
              </span>
            </span>
          </Link>
          <div className="flex shrink-0 items-center gap-6 md:order-3">
            <div
              className="flex items-center gap-1 text-xs text-muted"
              aria-label={lang.switchTo}
            >
              <Link
                href="/en"
                className={`py-1 font-medium transition-colors ${
                  locale === "en"
                    ? "text-foreground underline decoration-foreground/35 underline-offset-4"
                    : "hover:text-foreground/80"
                }`}
                hrefLang="en"
                lang="en"
              >
                {lang.en}
              </Link>
              <span className="select-none text-muted/35" aria-hidden>
                /
              </span>
              <Link
                href="/de"
                className={`py-1 font-medium transition-colors ${
                  locale === "de"
                    ? "text-foreground underline decoration-foreground/35 underline-offset-4"
                    : "hover:text-foreground/80"
                }`}
                hrefLang="de"
                lang="de"
              >
                {lang.de}
              </Link>
            </div>
            <Link
              href={`${prefix}#contact`}
              className="border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-foreground/40 hover:bg-surface-elevated"
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
              className="shrink-0 text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
