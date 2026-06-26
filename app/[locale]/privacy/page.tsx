import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage } from "@/app/components/LegalPage";
import { buildPageMetadata } from "@/lib/metadata";
import { getMessages, isLocale, type Locale } from "@/lib/messages";
import { legalInfo, siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    return {};
  }
  const locale = raw as Locale;
  return buildPageMetadata(locale, getMessages(locale).legal.privacy.meta, "/privacy");
}

export default async function PrivacyPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale = raw as Locale;
  const { privacy } = getMessages(locale).legal;

  const emailLink = (
    <a className="text-foreground underline" href={`mailto:${siteConfig.contactEmail}`}>
      {siteConfig.contactEmail}
    </a>
  );

  const controllerLine =
    locale === "de"
      ? legalInfo.address
        ? (
            <>
              Verantwortlich ist {legalInfo.name}, {legalInfo.address}. Datenschutzanfragen richten
              Sie bitte an {emailLink}.
            </>
          )
        : (
            <>
              Verantwortlich ist {legalInfo.name}. Datenschutzanfragen richten Sie bitte an{" "}
              {emailLink}.
            </>
          )
      : legalInfo.address
        ? (
            <>
              {legalInfo.name}, {legalInfo.address}, is responsible for this website. For privacy
              enquiries, contact us at {emailLink}.
            </>
          )
        : (
            <>
              {legalInfo.name} is responsible for this website. For privacy enquiries, contact us at{" "}
              {emailLink}.
            </>
          );

  const sections = [
    { title: privacy.controllerTitle, paragraphs: [controllerLine] },
    ...privacy.sections.map((section) => ({
      title: section.title,
      paragraphs: [section.body],
    })),
  ];

  return (
    <LegalPage
      locale={locale}
      title={privacy.title}
      intro={privacy.intro}
      updated={privacy.updated}
      sections={sections}
    />
  );
}
