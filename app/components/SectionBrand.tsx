import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionBrand({ messages }: Props) {
  const { brand } = messages;

  return (
    <section
      id="brand"
      className="border-t border-border bg-surface py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
              {brand.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{brand.p1}</p>
          </div>
          <div className="space-y-10">
            <div className="border-l-2 border-accent pl-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                {brand.missionLabel}
              </h3>
              <p className="mt-3 leading-relaxed text-foreground">
                {brand.mission}
              </p>
            </div>
            <div className="border-l-2 border-border pl-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
                {brand.promiseLabel}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{brand.promise}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
