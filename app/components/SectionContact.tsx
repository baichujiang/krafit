import type { Messages } from "@/lib/messages";
import { siteConfig } from "@/lib/site";

type Props = {
  messages: Messages;
};

export function SectionContact({ messages }: Props) {
  const { contact } = messages;

  return (
    <section id="contact" className="border-t border-border bg-background-warm py-24 md:py-28">
      <div className="mx-auto max-w-[88rem] px-6 md:px-10 lg:px-14">
        <div className="grid gap-8 border border-border-strong bg-surface p-8 md:grid-cols-12 md:p-12">
          <div className="md:col-span-7">
            <p className="label-kicker mb-4">{contact.kicker}</p>
            <h2 className="font-display text-3xl font-semibold uppercase tracking-tight sm:text-4xl">{contact.title}</h2>
            <p className="mt-6 max-w-2xl text-base leading-[1.75] text-muted">{contact.lead}</p>
          </div>
          <div className="md:col-span-5 md:border-l md:border-border md:pl-8">
            <p className="label-kicker">{contact.emailLabel}</p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-4 inline-block text-lg font-semibold tracking-wide text-foreground underline decoration-brand-mark/45 underline-offset-8"
            >
              {siteConfig.contactEmail}
            </a>
            <p className="mt-5 text-sm leading-[1.65] text-muted">{contact.emailNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
