import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionBrand({ messages }: Props) {
  const { brand } = messages;

  return (
    <section
      id="brand"
      className="relative border-t border-border bg-surface py-24 md:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 bg-[radial-gradient(circle_at_100%_0%,rgba(125,155,130,0.06),transparent_65%)]" />
      <div className="relative mx-auto max-w-[88rem] px-6 md:px-10 lg:px-14">
        <div className="grid gap-16 md:grid-cols-12 md:gap-x-10 md:gap-y-0 lg:gap-x-16">
          <div className="md:col-span-5 lg:col-span-4">
            <h2 className="font-serif text-[2rem] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground text-balance sm:text-[2.35rem] md:text-[2.5rem]">
              {brand.title}
            </h2>
            <p className="mt-8 text-[1.0625rem] leading-[1.82] text-muted md:max-w-md">
              {brand.body}
            </p>
          </div>
          <div className="flex md:col-span-1 md:justify-center">
            <div className="hidden h-full w-px bg-gradient-to-b from-transparent via-border to-transparent md:block" />
          </div>
          <div className="md:col-span-6 lg:col-span-5">
            <p className="font-serif text-[1.35rem] font-medium leading-[1.45] text-foreground/95 md:pt-10 md:text-[1.6rem] md:leading-[1.4]">
              {brand.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
