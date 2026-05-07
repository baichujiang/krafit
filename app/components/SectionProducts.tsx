import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionProducts({ messages }: Props) {
  const { products } = messages;

  return (
    <section id="lines" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted">
            {products.kicker}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {products.title}
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted md:text-[1.05rem]">
            {products.intro}
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-border lg:grid-cols-2">
          {products.lines.map((line) => (
            <article
              key={line.tag}
              className="border border-border bg-background p-8 md:p-10"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted">
                {line.tag}
              </p>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground md:text-2xl">
                {line.name}
              </h3>
              <p className="mt-4 text-base leading-[1.8] text-muted">
                {line.description}
              </p>
              <ul className="mt-8 space-y-2 border-t border-border pt-6">
                {line.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-sm leading-relaxed text-foreground/90"
                  >
                    <span className="mr-2 text-accent" aria-hidden>
                      ·
                    </span>
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
