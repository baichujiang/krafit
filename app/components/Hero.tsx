import Image from "next/image";

import type { Locale, Messages } from "@/lib/messages";
import { products } from "@/lib/site";

type Props = {
  locale: Locale;
  messages: Messages;
};

export function Hero({ locale, messages }: Props) {
  const { hero } = messages;
  const quickFacts =
    locale === "de"
      ? ["3 Widerstandsstufen", "46-seitiger Guide", "Buchenholz-Griffe"]
      : ["3 resistance levels", "46-page guide", "Beechwood stands"];

  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-12 md:pt-28 md:pb-16">
      <div
        className="absolute inset-x-0 top-0 h-[72%] bg-[linear-gradient(135deg,#fbfaf6_0%,#f5efe4_48%,#e8f3ee_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-5 px-5 md:min-h-[calc(100vh-7rem)] md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-12 md:px-8">
        <div className="order-2 pb-2 md:order-1">
          <p className="eyebrow">{hero.kicker}</p>
          <h1 className="mt-3 max-w-2xl font-display text-[clamp(2.15rem,10vw,5rem)] font-semibold leading-[1.02] tracking-normal sm:mt-4">
            {hero.title1}
            <br />
            <span className="text-accent">{hero.title2}</span>
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted sm:text-base md:mt-6 md:text-lg">
            {hero.lead}
          </p>
          <div className="mt-6 grid max-w-md grid-cols-1 gap-3 sm:grid-cols-[1fr_1.05fr] md:mt-8">
            <a
              href={products.resistanceBands.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg w-full"
            >
              {hero.ctaBuy} <span className="arrow">↗</span>
            </a>
            <a
              href="#guide"
              className="btn btn-brand btn-lg w-full"
            >
              {hero.ctaGuide}
            </a>
          </div>
          <div className="mt-8 grid max-w-lg grid-cols-3 gap-2 border-t border-border pt-5">
            {quickFacts.map((fact) => (
              <p key={fact} className="text-xs font-medium leading-snug text-accent-muted sm:text-sm">
                {fact}
              </p>
            ))}
          </div>
          <a
            href="#lines"
            className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <span className="inline-block h-4 w-px bg-border-strong" aria-hidden />
            {hero.ctaProducts}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-px" aria-hidden>
              <path d="M6 2.5v7M3 7l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-[18rem] sm:max-w-[28rem] md:max-w-none">
            <div
              className="absolute inset-4 rounded-[1.5rem] bg-white shadow-[0_20px_60px_rgba(24,24,22,0.12)] sm:inset-6 sm:rounded-[2rem] md:shadow-[0_24px_80px_rgba(24,24,22,0.12)]"
              aria-hidden
            />
            <div
              className="absolute -top-2 right-8 h-20 w-20 rounded-full bg-accent-blue-soft sm:h-28 sm:w-28"
              aria-hidden
            />
            <div
              className="absolute bottom-4 left-4 h-24 w-24 rounded-full bg-accent-orange-soft sm:h-32 sm:w-32"
              aria-hidden
            />
            <Image
              src={products.resistanceBands.image}
              alt={hero.imageAlt}
              width={products.resistanceBands.imageWidth}
              height={products.resistanceBands.imageHeight}
              loading="eager"
              fetchPriority="high"
              className="relative h-full w-full object-contain p-1 drop-shadow-[0_24px_32px_rgba(24,24,22,0.18)] sm:p-3"
              sizes="(max-width: 768px) 90vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
