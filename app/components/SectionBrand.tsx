import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionBrand({ messages }: Props) {
  const { brand } = messages;

  return (
    <section id="brand" className="border-t border-border bg-surface py-24 md:py-28">
      <div className="mx-auto max-w-[88rem] px-6 md:px-10 lg:px-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6 border border-border-strong bg-surface-elevated p-8 md:p-10">
            <p className="label-kicker mb-5">{brand.foundationLabel}</p>
            <h2 className="font-display text-3xl font-semibold uppercase tracking-tight sm:text-4xl">{brand.title}</h2>
            <p className="mt-6 text-base leading-[1.75] text-muted">{brand.body}</p>
          </div>
          <div className="md:col-span-6 border border-border bg-background p-8 md:p-10">
            <p className="label-kicker mb-5">{brand.visionLabel}</p>
            <p className="text-xl leading-[1.45] text-foreground md:text-2xl">{brand.closing}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
