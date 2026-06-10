import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage } from "@/app/components/LegalPage";
import { isLocale, type Locale } from "@/lib/messages";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "de" ? "Impressum | KRAFIT" : "Imprint | KRAFIT",
    description:
      locale === "de"
        ? "Anbieterkennzeichnung und Kontaktinformationen von KRAFIT."
        : "Provider identification and contact information for KRAFIT.",
    alternates: {
      canonical: `/${locale}/imprint`,
      languages: { en: "/en/imprint", de: "/de/imprint" },
    },
  };
}

export default async function ImprintPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale = raw as Locale;
  const registration =
    siteConfig.registerCourt && siteConfig.registerNumber
      ? `${siteConfig.registerCourt}, ${siteConfig.registerNumber}`
      : undefined;

  const sections =
    locale === "de"
      ? [
          {
            title: "Angaben gemäß § 5 DDG",
            paragraphs: [
              <>
                {siteConfig.legalName}
                <br />
                {siteConfig.legalAddress}
              </>,
            ],
          },
          {
            title: "Vertretung und Kontakt",
            paragraphs: [
              <>Vertretungsberechtigt: {siteConfig.legalRepresentative}</>,
              <>
                E-Mail:{" "}
                <a className="text-foreground underline" href={`mailto:${siteConfig.contactEmail}`}>
                  {siteConfig.contactEmail}
                </a>
              </>,
            ],
          },
          ...(registration || siteConfig.vatId
            ? [
                {
                  title: "Register- und Steuerangaben",
                  paragraphs: [
                    ...(registration ? [<>Register: {registration}</>] : []),
                    ...(siteConfig.vatId
                      ? [<>Umsatzsteuer-Identifikationsnummer: {siteConfig.vatId}</>]
                      : []),
                  ],
                },
              ]
            : []),
          {
            title: "Haftung für Inhalte und Links",
            paragraphs: [
              <>
                Wir erstellen die Inhalte dieser Website mit Sorgfalt. Für Vollständigkeit,
                Richtigkeit und dauerhafte Verfügbarkeit können wir jedoch keine Gewähr
                übernehmen. Für Inhalte externer Websites sind ausschließlich deren Betreiber
                verantwortlich.
              </>,
            ],
          },
        ]
      : [
          {
            title: "Provider information",
            paragraphs: [
              <>
                {siteConfig.legalName}
                <br />
                {siteConfig.legalAddress}
              </>,
            ],
          },
          {
            title: "Representation and contact",
            paragraphs: [
              <>Authorized representative: {siteConfig.legalRepresentative}</>,
              <>
                Email:{" "}
                <a className="text-foreground underline" href={`mailto:${siteConfig.contactEmail}`}>
                  {siteConfig.contactEmail}
                </a>
              </>,
            ],
          },
          ...(registration || siteConfig.vatId
            ? [
                {
                  title: "Registration and tax details",
                  paragraphs: [
                    ...(registration ? [<>Register: {registration}</>] : []),
                    ...(siteConfig.vatId ? [<>VAT ID: {siteConfig.vatId}</>] : []),
                  ],
                },
              ]
            : []),
          {
            title: "Content and external links",
            paragraphs: [
              <>
                We prepare this website with care, but cannot guarantee that all information is
                complete, accurate, or permanently available. External website operators remain
                responsible for their own content.
              </>,
            ],
          },
        ];

  return (
    <LegalPage
      locale={locale}
      title={locale === "de" ? "Impressum" : "Imprint"}
      intro={
        locale === "de"
          ? "Anbieterkennzeichnung und Kontaktinformationen für dieses digitale Angebot."
          : "Provider identification and contact details for this digital service."
      }
      sections={sections}
    />
  );
}
