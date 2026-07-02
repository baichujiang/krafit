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
          description:
            "Anbieterkennzeichnung von Valeridium OÜ für die Website krafit.eu.",
        }
      : {
          title: "Imprint | KRAFIT",
          description: "Provider identification for Valeridium OÜ on krafit.eu.",
        };
  return buildPageMetadata(locale, page, "/imprint");
}

export default async function ImprintPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale = raw as Locale;

  const emailLink = (
    <a className="text-foreground underline" href={`mailto:${siteConfig.contactEmail}`}>
      {siteConfig.contactEmail}
    </a>
  );

  const providerParagraphs = [
    legalInfo.address ? (
      <>
        {legalInfo.name}
        <br />
        {legalInfo.address}
      </>
    ) : (
      <>{legalInfo.name}</>
    ),
    ...(legalInfo.legalForm ? [<>{legalInfo.legalForm[locale]}</>] : []),
  ];

  const contactParagraphs = [
    ...(legalInfo.representative
      ? [
          locale === "de" ? (
            <>Vertretungsberechtigt: {legalInfo.representative.de}</>
          ) : (
            <>Authorized representative: {legalInfo.representative.en}</>
          ),
        ]
      : []),
    <>{locale === "de" ? "E-Mail: " : "Email: "}{emailLink}</>,
    ...(legalInfo.phone
      ? [
          <>
            {locale === "de" ? "Telefon: " : "Phone: "}
            <a className="text-foreground underline" href={`tel:${legalInfo.phone.replace(/\s/g, "")}`}>
              {legalInfo.phone}
            </a>
          </>,
        ]
      : []),
  ];

  const registrationParagraphs = [
    ...(legalInfo.registerCourt
      ? [
          locale === "de" ? (
            <>Registerstelle: {legalInfo.registerCourt}</>
          ) : (
            <>Register: {legalInfo.registerCourt}</>
          ),
        ]
      : []),
    ...(legalInfo.registerNumber
      ? [
          locale === "de" ? (
            <>Registrikood: {legalInfo.registerNumber}</>
          ) : (
            <>Registry code: {legalInfo.registerNumber}</>
          ),
        ]
      : []),
    ...(legalInfo.vatId
      ? [
          locale === "de" ? (
            <>Umsatzsteuer-Identifikationsnummer: {legalInfo.vatId}</>
          ) : (
            <>VAT ID: {legalInfo.vatId}</>
          ),
        ]
      : []),
  ];

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
          ...(registrationParagraphs.length > 0
            ? [
                {
                  title: "Register- und Steuerangaben",
                  paragraphs: registrationParagraphs,
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
            paragraphs: providerParagraphs,
          },
          {
            title: "Representation and contact",
            paragraphs: contactParagraphs,
          },
          ...(registrationParagraphs.length > 0
            ? [
                {
                  title: "Registration and tax details",
                  paragraphs: registrationParagraphs,
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
          ? "Anbieterkennzeichnung für krafit.eu. Betreiber ist Valeridium OÜ; KRAFIT ist eine Produktmarke."
          : "Provider identification for krafit.eu. The site is operated by Valeridium OÜ; KRAFIT is a product brand."
      }
      sections={sections}
    />
  );
}
