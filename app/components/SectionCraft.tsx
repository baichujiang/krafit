import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionCraft({ messages }: Props) {
  const { craft } = messages;

  return (
    <section
      id="craft"
      className="border-t border-border bg-surface py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted">
              {craft.kicker}
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {craft.title}
            </h2>
          </div>
          <p className="max-w-md text-base leading-[1.8] text-muted lg:text-right">
            {craft.aside}
          </p>
        </div>

        <ol className="mt-14 grid gap-10 border-t border-border pt-14 md:grid-cols-3 md:gap-8">
          {craft.steps.map((step, i) => (
            <li key={step.title}>
              <span className="font-serif text-3xl tabular-nums text-muted/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.75] text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
