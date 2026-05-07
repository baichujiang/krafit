import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function Hero({ messages }: Props) {
  const { hero } = messages;

  return (
    <section className="relative flex min-h-[88svh] flex-col justify-end border-b border-border pt-40 pb-16 md:min-h-[90svh] md:pt-36 md:pb-24">
      <div className="relative mx-auto w-full max-w-3xl px-6 lg:max-w-5xl lg:px-8">
        <p className="mb-6 max-w-md border-l-2 border-brand-mark pl-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-muted">
          {hero.kicker}
        </p>
        <h1 className="font-serif text-[2.35rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl md:text-[3.25rem] md:leading-[1.08]">
          {hero.title1}
          <br />
          <span className="text-muted">{hero.title2}</span>
        </h1>
        <p className="mt-10 max-w-xl text-base font-normal leading-[1.75] text-muted md:text-lg">
          {hero.lead}
        </p>
        <div className="mt-12 flex flex-wrap items-baseline gap-x-10 gap-y-4">
          <a
            href="#lines"
            className="inline-block border border-foreground/35 bg-transparent px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#brand"
            className="text-sm font-medium text-foreground underline decoration-foreground/35 underline-offset-[6px] transition-colors hover:decoration-foreground"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
