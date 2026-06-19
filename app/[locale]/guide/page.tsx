import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { buildPageMetadata } from "@/lib/metadata";
import { getMessages, isLocale, type Locale } from "@/lib/messages";
import { products, resistanceBandGuidePdf } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const { guide } = getMessages(locale);
  return buildPageMetadata(locale, guide.page.meta, "/guide");
}

export function generateStaticParams() {
  return [{ locale: "en" satisfies Locale }, { locale: "de" satisfies Locale }];
}

export default async function GuidePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const messages = getMessages(locale);
  const { guide } = messages;
  const pg = guide.page;

  return (
    <>
      <Header locale={locale} messages={messages} />
      <main className="flex-1 pt-28 pb-16 md:pt-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-14">
            <div>
              <p className="eyebrow">{guide.kicker}</p>
              <h1 className="mt-4 font-display text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
                {pg.heading}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                {pg.intro}
              </p>

              <div className="mt-8">
                <h2 className="text-base font-medium text-foreground">{pg.whatsInside}</h2>
                <ul className="mt-4 space-y-3">
                  {pg.contents.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-mark" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm text-muted">
                {guide.formatValue.replace("{pages}", String(resistanceBandGuidePdf.pages))} — {guide.note}
              </p>

              <div className="mt-8 grid max-w-md grid-cols-1 gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                <a
                  href={resistanceBandGuidePdf.href}
                  download={resistanceBandGuidePdf.filename}
                  className="btn btn-primary btn-lg w-full"
                >
                  {pg.ctaDownload}
                </a>
                <a
                  href={resistanceBandGuidePdf.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost justify-self-center sm:justify-self-start"
                >
                  {pg.ctaBrowse}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
                <Image
                  src={resistanceBandGuidePdf.cover}
                  alt="KRAFIT Resistance Band Training Guide — cover page"
                  width={resistanceBandGuidePdf.coverWidth}
                  height={resistanceBandGuidePdf.coverHeight}
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 90vw, 40vw"
                  loading="eager"
                />
              </div>
              <div className="rounded-lg border border-border bg-surface-muted p-5">
                <p className="text-sm font-medium text-foreground">{pg.alsoBuy}</p>
                <a
                  href={products.resistanceBands.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-3"
                >
                  {messages.products.lines[0].buyOnAmazon} <span className="arrow">↗</span>
                </a>
              </div>
            </div>
          </div>

          <p className="mt-12">
            <Link
              href={`/${locale}`}
              className="text-sm font-medium text-foreground underline decoration-brand-mark/40 underline-offset-4 hover:decoration-brand-mark"
            >
              ← {messages.notFound.home}
            </Link>
          </p>
        </div>
      </main>
      <Footer locale={locale} messages={messages} />
    </>
  );
}
