import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionProducts({ messages }: Props) {
  const { products } = messages;

  return (
    <section id="lines" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            {products.kicker}
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
            {products.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {products.intro}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {products.lines.map((line) => (
            <article
              key={line.tag}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-8 transition-colors hover:border-accent/30 md:p-10"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                {line.tag}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-foreground md:text-2xl">
                {line.name}
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                {line.description}
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {line.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-medium text-foreground/90"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
