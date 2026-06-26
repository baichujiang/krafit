import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage } from "@/app/components/LegalPage";
import { buildPageMetadata } from "@/lib/metadata";
import { isLocale, type Locale } from "@/lib/messages";
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
  const page =
    locale === "de"
      ? {
          title: "Impressum | KRAFIT",
          description: "Anbieterkennzeichnung und Kontaktinformationen von KRAFIT.",
        }
      : {
          title: "Imprint | KRAFIT",
          description: "Provider identification and contact information for KRAFIT.",
        };
  return buildPageMetadata(locale, page, "/imprint");
}

export default async function ImprintPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale = raw as Locale;

  const registration =
    legalInfo.registerCourt && legalInfo.registerNumber
      ? `${legalInfo.registerCourt}, ${legalInfo.registerNumber}`
      : undefined;

  const emailLink = (
    <a className="text-foreground underline" href={`mailto:${siteConfig.contactEmail}`}>
      {siteConfig.contactEmail}
    </a>
  );

  const providerParagraphs = legalInfo.address
    ? [
        <>
          {legalInfo.name}
          <br />
          {legalInfo.address}
        </>,
      ]
    : [<>{legalInfo.name}</>];

  const contactParagraphs = [
    ...(legalInfo.representative
      ? [
          locale === "de" ? (
            <>Vertretungsberechtigt: {legalInfo.representative}</>
          ) : (
            <>Authorized representative: {legalInfo.representative}</>
          ),
        ]
      : []),
    <>{locale === "de" ? "E-Mail: " : "Email: "}{emailLink}</>,
  ];

  const hostingParagraphs = [<>{legalInfo.hostingProvider}</>];

  const sections =
    locale === "de"
      ? [
          {
            title: "Angaben gemäß § 5 DDG",
            paragraphs: providerParagraphs,
          },
          {
            title: "Vertretung und Kontakt",
            paragraphs: contactParagraphs,
          },
          ...(registration || legalInfo.vatId
            ? [
                {
                  title: "Register- und Steuerangaben",
                  paragraphs: [
                    ...(registration ? [<>Register: {registration}</>] : []),
                    ...(legalInfo.vatId
                      ? [<>Umsatzsteuer-Identifikationsnummer: {legalInfo.vatId}</>]
                      : []),
                  ],
                },
              ]
            : []),
          {
            title: "Hosting",
            paragraphs: hostingParagraphs,
          },
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
            paragraphs: providerParagraphs,
          },
          {
            title: "Representation and contact",
            paragraphs: contactParagraphs,
          },
          ...(registration || legalInfo.vatId
            ? [
                {
                  title: "Registration and tax details",
                  paragraphs: [
                    ...(registration ? [<>Register: {registration}</>] : []),
                    ...(legalInfo.vatId ? [<>VAT ID: {legalInfo.vatId}</>] : []),
                  ],
                },
              ]
            : []),
          {
            title: "Hosting",
            paragraphs: hostingParagraphs,
          },
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
