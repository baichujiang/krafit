import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionBrand({ messages }: Props) {
  const { brand } = messages;

  return (
    <section
      id="brand"
      className="border-t border-border bg-surface py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              {brand.title}
            </h2>
            <p className="mt-6 text-base leading-[1.8] text-muted md:text-[1.05rem]">
              {brand.p1}
            </p>
          </div>
          <div className="space-y-12 lg:col-span-6 lg:col-start-7">
            <div className="border-l border-foreground/25 pl-6">
              <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-foreground">
                {brand.missionLabel}
              </h3>
              <p className="mt-4 text-base leading-[1.8] text-foreground/95">
                {brand.mission}
              </p>
            </div>
            <div className="border-l border-border pl-6">
              <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted">
                {brand.promiseLabel}
              </h3>
              <p className="mt-4 text-base leading-[1.8] text-muted">
                {brand.promise}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
