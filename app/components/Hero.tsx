import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function Hero({ messages }: Props) {
  const { hero } = messages;

  return (
    <section className="relative min-h-[92svh] border-b border-border bg-background-warm pt-40 pb-20 md:min-h-[min(100svh,56rem)] md:pt-36 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_50%_-10%,rgba(125,155,130,0.09),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-[88rem] gap-12 px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,min(42rem,100%))] md:gap-16 md:px-10 lg:px-14">
        <div
          className="hidden md:flex md:flex-col md:items-end md:pt-2"
          aria-hidden
        >
          <div className="h-full min-h-[12rem] w-px bg-gradient-to-b from-ruler via-border to-transparent" />
        </div>
        <div className="max-w-xl md:max-w-none">
          <p className="label-kicker mb-8 max-w-md border-l-[3px] border-accent pl-5">
            {hero.kicker}
          </p>
          <h1 className="font-serif text-[2.125rem] font-semibold leading-[1.14] tracking-[-0.02em] text-foreground text-balance sm:text-5xl md:text-[3.5rem] md:leading-[1.1]">
            {hero.title1}
            <span className="mt-2 block font-normal text-muted md:mt-3">
              {hero.title2}
            </span>
          </h1>
          <p className="mt-12 max-w-[34rem] text-[1.0625rem] font-normal leading-[1.75] text-muted md:text-lg md:leading-[1.72]">
            {hero.lead}
          </p>
          <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
            <a
              href="#lines"
              className="inline-flex w-fit items-center border border-border-strong bg-surface-muted/80 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground transition-colors hover:border-accent/50 hover:bg-surface-elevated"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#brand"
              className="w-fit text-sm font-medium text-foreground/90 underline decoration-accent/40 underline-offset-[7px] transition-colors hover:decoration-accent"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
