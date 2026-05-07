import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionContact({ messages }: Props) {
  const { contact } = messages;

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="border border-border bg-surface p-10 md:grid md:grid-cols-2 md:gap-16 md:p-14 lg:items-start">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {contact.title}
            </h2>
            <p className="mt-6 text-base leading-[1.8] text-muted">
              {contact.lead}
            </p>
          </div>
          <div className="mt-10 space-y-6 md:mt-0">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted">
                {contact.emailLabel}
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-3 inline-block text-lg font-medium text-foreground underline decoration-foreground/25 underline-offset-[5px] transition-colors hover:decoration-foreground/60"
              >
                {contact.email}
              </a>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              {contact.emailNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
