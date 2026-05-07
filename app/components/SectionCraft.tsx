import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionCraft({ messages }: Props) {
  const { craft } = messages;

  return (
    <section id="craft" className="border-t border-border bg-surface-muted py-24 md:py-28">
      <div className="mx-auto max-w-[88rem] px-6 md:px-10 lg:px-14">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <header className="max-w-2xl">
            <p className="label-kicker">{craft.kicker}</p>
            <h2 className="mt-5 font-display text-3xl font-semibold uppercase tracking-tight sm:text-4xl">{craft.title}</h2>
          </header>
          <p className="max-w-xl text-base leading-[1.72] text-muted">{craft.aside}</p>
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {craft.steps.map((step, i) => (
            <li key={step.title} className="border border-border bg-background p-7">
              <span className="text-xs font-semibold tracking-[0.22em] text-brand-mark">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-base font-semibold uppercase tracking-wide text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-[1.72] text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
