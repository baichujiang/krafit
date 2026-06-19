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
      ? [
          { label: "Bänder", body: "Drei Stärken für Mobility, Warm-up und Krafttraining" },
          { label: "Guide", body: "46 Seiten mit Übungen, Setups und Trainingsplänen" },
          { label: "Griffe", body: "Massives Buchenholz für stabile Liegestütze" },
        ]
      : [
          { label: "Bands", body: "Three strengths for mobility, warm-ups, and strength work" },
          { label: "Guide", body: "46 pages of exercises, setups, and training plans" },
          { label: "Stands", body: "Solid beechwood support for steady push-ups" },
        ];

  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-8 md:pt-26 md:pb-10">
      <div
        className="absolute inset-x-0 top-0 h-[66%] bg-[linear-gradient(135deg,#fbfaf6_0%,#f4efe6_64%,#f3f7f2_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-5 px-5 md:min-h-[calc(100vh-9rem)] md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-12 md:px-8">
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
          <div className="mt-6 grid max-w-xl gap-2 border-t border-border pt-4 sm:grid-cols-3">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-lg border border-border/80 bg-surface/70 px-3.5 py-3"
              >
                <p className="text-[0.68rem] font-semibold uppercase leading-none text-accent">
                  {fact.label}
                </p>
                <p className="mt-2 text-xs leading-snug text-muted sm:text-[0.8rem]">
                  {fact.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-[31rem] md:max-w-none">
            <Image
              src={products.resistanceBands.image}
              alt={hero.imageAlt}
              width={products.resistanceBands.imageWidth}
              height={products.resistanceBands.imageHeight}
              loading="eager"
              fetchPriority="high"
              className="h-auto w-full object-contain drop-shadow-[0_18px_28px_rgba(24,24,22,0.14)]"
              sizes="(max-width: 768px) 90vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
