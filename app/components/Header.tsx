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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/92">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-3 px-6 py-4 md:min-h-[5.25rem] md:flex-row md:items-center md:justify-between md:gap-0 md:py-3 md:px-10 lg:px-14">
        <div className="flex items-center justify-between md:contents">
          <Link
            href={prefix}
            className="group flex min-w-0 shrink items-center gap-4"
            aria-label={homeAria}
          >
            <BrandLogo
              variant="header"
              priority
              className="transition-opacity group-hover:opacity-88"
            />
            <span className="hidden min-w-0 max-w-[15rem] flex-col border-l border-border pl-4 leading-snug lg:flex">
              <span className="label-kicker !text-[0.62rem] !tracking-[0.2em]">
                {tagline}
              </span>
            </span>
          </Link>
          <div className="flex shrink-0 items-center gap-7 md:order-3">
            <div
              className="flex items-baseline gap-2 text-[13px] text-muted"
              aria-label={lang.switchTo}
            >
              <Link
                href="/en"
                className={`py-0.5 font-medium tabular-nums transition-colors ${
                  locale === "en"
                    ? "text-foreground"
                    : "hover:text-foreground/75"
                }`}
                hrefLang="en"
                lang="en"
              >
                {lang.en}
              </Link>
              <span className="text-border-strong select-none" aria-hidden>
                ·
              </span>
              <Link
                href="/de"
                className={`py-0.5 font-medium tabular-nums transition-colors ${
                  locale === "de"
                    ? "text-foreground"
                    : "hover:text-foreground/75"
                }`}
                hrefLang="de"
                lang="de"
              >
                {lang.de}
              </Link>
            </div>
            <Link
              href={`${prefix}#contact`}
              className="border border-border px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-accent/45 hover:text-accent"
            >
              {nav.partner}
            </Link>
          </div>
        </div>
        <nav
          className="-mx-6 flex items-center gap-x-10 gap-y-2 overflow-x-auto border-t border-border px-6 pt-3.5 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:order-2 md:border-0 md:px-0 md:pt-0 [&::-webkit-scrollbar]:hidden"
          aria-label={navAria}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
