import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionCraft({ messages }: Props) {
  const { craft } = messages;

  return (
    <section
      id="craft"
      className="border-t border-border bg-surface py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              {craft.kicker}
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
              {craft.title}
            </h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted lg:text-right">
            {craft.aside}
          </p>
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-3">
          {craft.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-border bg-background/40 p-8"
            >
              <span className="font-display text-5xl text-accent/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
