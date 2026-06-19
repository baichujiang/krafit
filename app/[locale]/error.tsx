"use client";

import Link from "next/link";
import { useEffect } from "react";

import { getMessages, type Locale } from "@/lib/messages";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function LocaleError({ error, reset }: Props) {
  const locale: Locale =
    typeof window !== "undefined" && window.location.pathname.startsWith("/de") ? "de" : "en";
  const messages = getMessages(locale);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-full flex-1 flex-col items-center justify-center px-5 py-24 text-center">
      <p className="eyebrow">Error</p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-normal sm:text-4xl">
        {messages.error.title}
      </h1>
      <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{messages.error.body}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button type="button" onClick={reset} className="btn btn-primary">
          {messages.error.retry}
        </button>
        <Link href={`/${locale}`} className="btn btn-secondary">
          {messages.error.home}
        </Link>
      </div>
    </main>
  );
}
