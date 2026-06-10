import Link from "next/link";

import { BrandLogo } from "./BrandLogo";
import type { Locale } from "@/lib/messages";

type Section = {
  title: string;
  paragraphs: React.ReactNode[];
};

type Props = {
  locale: Locale;
  title: string;
  intro: string;
  sections: Section[];
};

export function LegalPage({ locale, title, intro, sections }: Props) {
  const backLabel = locale === "de" ? "Zurück zur Startseite" : "Back to home";

  return (
    <main className="min-h-screen bg-background-warm px-6 py-12 md:px-10 md:py-16">
      <article className="mx-auto max-w-4xl border border-border-strong bg-surface p-7 sm:p-10 md:p-14">
        <Link href={`/${locale}`} className="inline-block" aria-label={backLabel}>
          <BrandLogo variant="footer" priority />
        </Link>
        <p className="label-kicker mt-12">{locale === "de" ? "Rechtliches" : "Legal"}</p>
        <h1 className="mt-5 font-display text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-[1.75] text-muted">{intro}</p>

        <div className="mt-12 grid gap-10">
          {sections.map((section) => (
            <section key={section.title} className="border-t border-border pt-8">
              <h2 className="font-display text-xl font-semibold uppercase tracking-wide">
                {section.title}
              </h2>
              <div className="mt-4 grid gap-4 text-sm leading-[1.75] text-muted">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <Link
          href={`/${locale}`}
          className="mt-12 inline-flex border border-border px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] hover:border-brand-mark/70"
        >
          {backLabel}
        </Link>
      </article>
    </main>
  );
}
