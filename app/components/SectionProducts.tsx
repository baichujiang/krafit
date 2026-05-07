import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionProducts({ messages }: Props) {
  const { products } = messages;

  return (
    <section id="lines" className="border-t border-border bg-background py-24 md:py-28">
      <div className="mx-auto max-w-[88rem] px-6 md:px-10 lg:px-14">
        <header className="max-w-3xl">
          <p className="label-kicker">{products.kicker}</p>
          <h2 className="mt-5 font-display text-3xl font-semibold uppercase tracking-tight sm:text-4xl">{products.title}</h2>
          <p className="mt-6 text-base leading-[1.75] text-muted">{products.intro}</p>
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {products.lines.map((line) => (
            <article key={line.tag} className="border border-border-strong bg-surface p-8 md:p-10">
              <p className="label-kicker mb-4 text-brand-mark">{line.tag}</p>
              <h3 className="font-display text-2xl font-semibold uppercase tracking-tight">{line.name}</h3>
              <p className="mt-5 text-base leading-[1.72] text-muted">{line.description}</p>
              <ul className="mt-8 grid gap-3 border-t border-border pt-6">
                {line.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-[0.45em] h-1.5 w-1.5 bg-brand-mark" aria-hidden />
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
