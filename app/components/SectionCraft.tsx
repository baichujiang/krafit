import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionCraft({ messages }: Props) {
  const { craft } = messages;

  return (
    <section id="craft" className="bg-background-warm py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">{craft.kicker}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-normal sm:text-4xl">
            {craft.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{craft.aside}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {craft.steps.map((step, index) => (
            <div key={step.title} className="rounded-lg border border-border bg-surface p-6 shadow-[0_14px_36px_rgba(24,24,22,0.05)]">
              <span className="text-xs font-semibold text-accent-muted">0{index + 1}</span>
              <h3 className="mt-3 text-base font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
