import Image from "next/image";

import type { Locale, Messages } from "@/lib/messages";
import { products } from "@/lib/site";

type Props = {
  locale: Locale;
  messages: Messages;
};

const productImages = [products.resistanceBands, products.pushUpStands];
const productAccents = [
  {
    imageTone: "bg-[linear-gradient(145deg,#ffffff_0%,#eef8fb_55%,#fff0e6_100%)]",
    badgeTone: "bg-accent-blue-soft text-accent",
  },
  {
    imageTone: "bg-[linear-gradient(145deg,#ffffff_0%,#f6efe4_55%,#eef5e7_100%)]",
    badgeTone: "bg-accent-orange-soft text-accent",
  },
] as const;

const altTexts = {
  en: ["KRAFIT resistance bands — blue, yellow, orange", "KRAFIT push-up stands — solid beechwood"],
  de: ["KRAFIT Widerstandsbänder — blau, gelb, orange", "KRAFIT Liegestützgriffe — massives Buchenholz"],
};

export function SectionProducts({ locale, messages }: Props) {
  const { products: p } = messages;

  return (
    <section id="lines" className="bg-background-warm py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">{p.kicker}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-normal sm:text-4xl">
              {p.title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted md:text-right">{p.intro}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {p.lines.map((line, index) => {
            const img = productImages[index];
            const accent = productAccents[index];
            return (
              <article
                key={line.tag}
                className="grid overflow-hidden rounded-lg border border-border bg-surface shadow-[0_18px_50px_rgba(24,24,22,0.06)]"
              >
                <div className={`relative aspect-[4/3] overflow-hidden ${accent.imageTone}`}>
                  <Image
                    src={img.image}
                    alt={altTexts[locale][index]}
                    width={img.imageWidth}
                    height={img.imageHeight}
                    className="h-full w-full object-contain p-5 drop-shadow-[0_18px_24px_rgba(24,24,22,0.13)] transition-transform duration-300 hover:scale-[1.025]"
                    sizes="(max-width: 768px) 90vw, 45vw"
                  />
                  <span className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium ${accent.badgeTone}`}>
                    {line.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="eyebrow">{line.tag}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-normal">
                    {line.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{line.subtitle}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {line.description}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-medium text-accent-muted">
                      {locale === "de" ? "Ideal für" : "Ideal for"}
                    </p>
                    <p className="mt-1 text-sm text-muted">{line.idealFor}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {line.useCases.map((uc) => (
                      <span
                        key={uc}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                      >
                        {uc}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 space-y-2">
                    {line.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/90">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-mark" aria-hidden />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto grid grid-cols-1 gap-3 pt-6 sm:grid-cols-2">
                    <a
                      href={img.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full"
                    >
                      {line.buyOnAmazon} <span className="arrow">↗</span>
                    </a>
                    {index === 0 && (
                      <a href={`/${locale}/guide`} className="btn btn-brand w-full">
                        {messages.guide.productLink}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
