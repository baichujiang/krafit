import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionCraft({ messages }: Props) {
  const { craft } = messages;

  return (
    <section
      id="craft"
      className="border-t border-border bg-surface-muted py-24 md:py-32"
    >
      <div className="mx-auto max-w-[88rem] px-6 md:px-10 lg:px-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-20">
          <header className="max-w-xl lg:max-w-[26rem]">
            <p className="label-kicker">{craft.kicker}</p>
            <h2 className="mt-5 font-serif text-[2rem] font-semibold tracking-[-0.02em] text-foreground text-balance sm:text-[2.35rem]">
              {craft.title}
            </h2>
          </header>
          <p className="max-w-md text-[1.0625rem] leading-[1.82] text-muted lg:max-w-sm lg:text-right">
            {craft.aside}
          </p>
        </div>

        <ol className="mt-20 grid gap-12 border-t border-border pt-16 md:grid-cols-3 md:gap-8 md:pt-20">
          {craft.steps.map((step, i) => (
            <li key={step.title} className="relative md:pl-2">
              <span
                className="font-serif text-[2.75rem] font-normal tabular-nums leading-none text-accent/25"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-[0.95rem] font-semibold leading-snug text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.76] text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
