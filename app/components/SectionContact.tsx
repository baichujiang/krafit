import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionContact({ messages }: Props) {
  const { contact } = messages;

  return (
    <section
      id="contact"
      className="border-t border-border bg-background-warm py-24 md:py-32"
    >
      <div className="mx-auto max-w-[88rem] px-6 md:px-10 lg:px-14">
        <div className="grid gap-12 border border-border-strong bg-surface-muted/40 p-10 md:grid-cols-2 md:gap-16 md:p-16 lg:items-start">
          <div>
            <h2 className="font-serif text-[2rem] font-semibold tracking-[-0.02em] text-foreground text-balance sm:text-[2.35rem]">
              {contact.title}
            </h2>
            <p className="mt-8 text-[1.0625rem] leading-[1.82] text-muted">
              {contact.lead}
            </p>
          </div>
          <div className="flex flex-col justify-end gap-8 md:text-right">
            <div>
              <p className="label-kicker md:text-right">{contact.emailLabel}</p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-4 inline-block text-lg font-medium text-foreground underline decoration-accent/35 underline-offset-[6px] transition-colors hover:decoration-accent md:block"
              >
                {contact.email}
              </a>
            </div>
            <p className="text-sm leading-relaxed text-muted md:ml-auto md:max-w-sm">
              {contact.emailNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
