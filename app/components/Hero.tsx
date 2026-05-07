import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function Hero({ messages }: Props) {
  const { hero } = messages;

  return (
    <section className="relative border-b border-border bg-background-warm pt-40 pb-20 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-brand-mark/10 to-transparent" />
      <div className="mx-auto grid max-w-[88rem] gap-10 px-6 md:grid-cols-12 md:gap-8 md:px-10 lg:px-14">
        <div className="md:col-span-2 hidden md:flex items-start justify-center pt-4" aria-hidden>
          <div className="h-28 w-px bg-ruler" />
        </div>
        <div className="relative md:col-span-10 border border-border-strong bg-surface p-8 sm:p-10 md:p-14">
          <p className="label-kicker mb-8 border-l-2 border-brand-mark pl-4">{hero.kicker}</p>
          <h1 className="font-display text-4xl font-semibold uppercase leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            {hero.title1}
            <span className="block text-muted">{hero.title2}</span>
          </h1>
          <p className="mt-10 max-w-2xl text-base leading-[1.75] text-muted md:text-lg">
            {hero.lead}
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#lines"
              className="inline-flex items-center border border-brand-mark bg-brand-mark px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#brand"
              className="inline-flex items-center border border-border px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-brand-mark/60"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
