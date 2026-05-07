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
            <p className="mt-6 text-base leading-[1.85] text-muted md:text-[1.05rem]">
              {brand.body}
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="border-l border-accent/50 pl-6 font-serif text-xl font-medium leading-snug text-foreground md:text-2xl">
              {brand.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
