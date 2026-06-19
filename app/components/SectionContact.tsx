import type { Messages } from "@/lib/messages";

type Props = {
  messages: Messages;
};

export function SectionContact({ messages }: Props) {
  const { contact } = messages;

  return (
    <section id="contact" className="bg-foreground py-16 text-background md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow text-brand-mark">{contact.kicker}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-normal sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-background/72">{contact.lead}</p>
          <div className="mt-6">
            <p className="text-xs font-medium text-background/55">{contact.emailLabel}</p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-1 inline-block text-lg font-medium text-background underline decoration-brand-mark/45 underline-offset-4 hover:decoration-brand-mark"
            >
              {contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
