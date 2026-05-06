import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionContact({ messages }: Props) {
  const { contact } = messages;

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface-elevated via-surface to-background p-10 md:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
                {contact.title}
              </h2>
              <p className="mt-6 leading-relaxed text-muted">{contact.lead}</p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                  {contact.emailLabel}
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-2 inline-block text-lg font-medium text-accent underline-offset-4 hover:underline"
                >
                  {contact.email}
                </a>
              </div>
              <p className="text-sm text-muted">{contact.emailNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
