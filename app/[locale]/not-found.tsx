import Link from "next/link";
import { headers } from "next/headers";

import { getMessages, type Locale } from "@/lib/messages";

export default async function LocaleNotFound() {
  const headersList = await headers();
  const locale: Locale = headersList.get("x-locale") === "de" ? "de" : "en";
  const messages = getMessages(locale);

  return (
    <main className="flex min-h-full flex-1 flex-col items-center justify-center px-5 py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-normal sm:text-4xl">
        {messages.notFound.title}
      </h1>
      <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{messages.notFound.body}</p>
      <div className="mt-8">
        <Link href={`/${locale}`} className="btn btn-primary">
          {messages.notFound.home}
        </Link>
      </div>
    </main>
  );
}
