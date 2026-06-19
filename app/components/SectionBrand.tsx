import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionBrand({ messages }: Props) {
  const { brand } = messages;

  return (
    <section id="brand" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-8 border-y border-border py-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:py-14">
          <div>
            <p className="eyebrow">{brand.kicker}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-normal sm:text-4xl">
              {brand.title}
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {brand.body}
            </p>
            <p className="mt-5 font-display text-xl font-medium leading-snug tracking-normal text-foreground md:text-2xl">
              {brand.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
