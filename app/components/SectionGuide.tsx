import Image from "next/image";

import type { Locale, Messages } from "@/lib/messages";
import { resistanceBandGuidePdf } from "@/lib/site";

type Props = {
  locale: Locale;
  messages: Messages;
};

export function SectionGuide({ locale, messages }: Props) {
  const { guide } = messages;

  return (
    <section id="guide" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-8 overflow-hidden rounded-lg border border-border bg-[linear-gradient(135deg,#ffffff_0%,#f6f2ea_100%)] p-6 shadow-[0_18px_50px_rgba(24,24,22,0.06)] md:grid-cols-2 md:items-center md:gap-14 md:p-10">
          <div className="order-2 md:order-1">
            <div className="mx-auto max-w-xs overflow-hidden rounded-lg border border-border bg-white shadow-[0_22px_48px_rgba(24,24,22,0.14)] md:max-w-sm">
              <Image
                src={resistanceBandGuidePdf.cover}
                alt="KRAFIT Resistance Band Training Guide — cover"
                width={resistanceBandGuidePdf.coverWidth}
                height={resistanceBandGuidePdf.coverHeight}
                className="h-auto w-full"
                sizes="(max-width: 768px) 70vw, 30vw"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="eyebrow">{guide.kicker}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-normal sm:text-4xl">
              {guide.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{guide.lead}</p>

            <ul className="mt-6 space-y-2">
              {guide.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-mark" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm text-muted">
              {guide.formatValue.replace("{pages}", String(resistanceBandGuidePdf.pages))} — {guide.note}
            </p>

            <div className="mt-6 grid max-w-md grid-cols-1 gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
              <a href={`/${locale}/guide`} className="btn btn-brand w-full">
                {guide.download}
              </a>
              <a
                href={resistanceBandGuidePdf.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost justify-self-center sm:justify-self-start"
              >
                {guide.view}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
