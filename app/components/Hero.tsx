import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function Hero({ messages }: Props) {
  const { hero } = messages;

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-40 pb-20 md:pt-32 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[60%] w-[70%] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-0 h-[50%] w-[60%] rounded-full bg-foreground/5 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(244,242,239,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(244,242,239,0.4) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent">
          {hero.kicker}
        </p>
        <h1 className="max-w-4xl font-display text-5xl leading-[0.95] tracking-wide text-foreground sm:text-7xl md:text-8xl">
          {hero.title1}
          <br />
          <span className="text-muted">{hero.title2}</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
          {hero.lead}
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#lines"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold tracking-wide text-background transition-opacity hover:opacity-90"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#brand"
            className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/40"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            {hero.scroll}
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
        </div>
      </div>
    </section>
  );
}
