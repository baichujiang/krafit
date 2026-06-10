import Link from "next/link";

export default function LocaleNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background-warm px-6 py-16">
      <div className="w-full max-w-2xl border border-border-strong bg-surface p-8 text-center sm:p-12">
        <p className="label-kicker">404</p>
        <h1 className="mt-5 font-display text-4xl font-semibold uppercase">
          Page not found / Seite nicht gefunden
        </h1>
        <p className="mt-6 text-muted">
          The requested page does not exist. Die angeforderte Seite existiert nicht.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link className="border border-brand-mark bg-brand-mark px-6 py-3 text-xs font-semibold uppercase tracking-widest text-background" href="/en">
            English home
          </Link>
          <Link className="border border-border px-6 py-3 text-xs font-semibold uppercase tracking-widest" href="/de">
            Deutsche Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
