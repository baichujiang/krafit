import Link from "next/link";

import { getMessages } from "@/lib/messages";

export default function NotFound() {
  const en = getMessages("en");
  const de = getMessages("de");

  return (
    <main className="flex min-h-full flex-1 flex-col items-center justify-center px-5 py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-normal sm:text-4xl">{en.notFound.title}</h1>
      <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{en.notFound.body}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/en" className="btn btn-primary">
          {en.notFound.home}
        </Link>
        <Link href="/de" className="btn btn-secondary">
          {de.notFound.home}
        </Link>
      </div>
    </main>
  );
}
