import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionProducts({ messages }: Props) {
  const { products } = messages;

  return (
    <section
      id="lines"
      className="border-t border-border bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-[88rem] px-6 md:px-10 lg:px-14">
        <header className="max-w-2xl">
          <p className="label-kicker">{products.kicker}</p>
          <h2 className="mt-5 font-serif text-[2rem] font-semibold tracking-[-0.02em] text-foreground text-balance sm:text-[2.35rem] md:text-[2.5rem]">
            {products.title}
          </h2>
          <p className="mt-8 text-[1.0625rem] leading-[1.82] text-muted md:text-[1.0625rem]">
            {products.intro}
          </p>
        </header>

        <div className="mt-20 flex flex-col gap-10 lg:flex-row lg:gap-8 lg:gap-y-0">
          {products.lines.map((line, i) => (
            <article
              key={line.tag}
              className={`flex-1 border-t border-border-strong pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 ${i === 0 ? "lg:border-l-0 lg:pl-0" : ""}`}
            >
              <p className="label-kicker !text-accent-muted">{line.tag}</p>
              <h3 className="mt-6 font-serif text-[1.35rem] font-semibold leading-snug text-foreground md:text-2xl">
                {line.name}
              </h3>
              <p className="mt-5 text-[1.02rem] leading-[1.78] text-muted">
                {line.description}
              </p>
              <ul className="mt-10 space-y-3 border-t border-border pt-8">
                {line.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-[0.9375rem] leading-relaxed text-foreground/88"
                  >
                    <span
                      className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
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
