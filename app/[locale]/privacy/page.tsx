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
    title: locale === "de" ? "Datenschutz | KRAFIT" : "Privacy | KRAFIT",
    description:
      locale === "de"
        ? "Datenschutzhinweise für die Nutzung der KRAFIT Website."
        : "Privacy information for use of the KRAFIT website.",
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: { en: "/en/privacy", de: "/de/privacy" },
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale = raw as Locale;

  const sections =
    locale === "de"
      ? [
          {
            title: "Verantwortlicher",
            paragraphs: [
              <>
                {siteConfig.legalName}, {siteConfig.legalAddress}. Kontakt:{" "}
                <a className="text-foreground underline" href={`mailto:${siteConfig.contactEmail}`}>
                  {siteConfig.contactEmail}
                </a>
                .
              </>,
            ],
          },
          {
            title: "Hosting und Server-Protokolle",
            paragraphs: [
              <>
                Beim Aufruf der Website verarbeitet unser Hosting-Anbieter technisch notwendige
                Verbindungsdaten, insbesondere IP-Adresse, Zeitpunkt, angeforderte Adresse,
                übertragene Datenmenge, Referrer sowie Browser- und Systeminformationen.
              </>,
              <>
                Hosting-Anbieter: {siteConfig.hostingProvider}. Die Verarbeitung erfolgt zur
                sicheren und stabilen Bereitstellung der Website auf Grundlage von Art. 6 Abs. 1
                lit. f DSGVO. Protokolldaten werden nur so lange gespeichert, wie dies für Betrieb,
                Sicherheit und Fehleranalyse erforderlich ist.
              </>,
            ],
          },
          {
            title: "Kontakt per E-Mail",
            paragraphs: [
              <>
                Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung
                der Anfrage. Rechtsgrundlage ist je nach Inhalt Art. 6 Abs. 1 lit. b oder lit. f
                DSGVO. Die Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr
                erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.
              </>,
            ],
          },
          {
            title: "Cookies, Analyse und externe Inhalte",
            paragraphs: [
              <>
                Diese Website setzt derzeit keine Analyse- oder Marketingdienste und keine
                nicht notwendigen Cookies ein. Schriftarten und Bilder werden lokal ausgeliefert.
                Falls sich dies ändert, aktualisieren wir diese Hinweise und holen erforderliche
                Einwilligungen vor der Verarbeitung ein.
              </>,
            ],
          },
          {
            title: "Ihre Rechte",
            paragraphs: [
              <>
                Sie haben im Rahmen der gesetzlichen Voraussetzungen Rechte auf Auskunft,
                Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und
                Widerspruch. Außerdem können Sie sich bei einer Datenschutzaufsichtsbehörde
                beschweren.
              </>,
            ],
          },
        ]
      : [
          {
            title: "Controller",
            paragraphs: [
              <>
                {siteConfig.legalName}, {siteConfig.legalAddress}. Contact:{" "}
                <a className="text-foreground underline" href={`mailto:${siteConfig.contactEmail}`}>
                  {siteConfig.contactEmail}
                </a>
                .
              </>,
            ],
          },
          {
            title: "Hosting and server logs",
            paragraphs: [
              <>
                When you access the website, our hosting provider processes technically necessary
                connection data, including IP address, time, requested URL, transferred data,
                referrer, browser, and system information.
              </>,
              <>
                Hosting provider: {siteConfig.hostingProvider}. Processing is necessary to provide
                a secure and stable website and is based on Article 6(1)(f) GDPR. Logs are retained
                only as long as necessary for operation, security, and troubleshooting.
              </>,
            ],
          },
          {
            title: "Email contact",
            paragraphs: [
              <>
                If you contact us by email, we process the information you provide to handle your
                request. Depending on the request, the legal basis is Article 6(1)(b) or (f) GDPR.
                Data is deleted when it is no longer needed and no statutory retention obligation
                applies.
              </>,
            ],
          },
          {
            title: "Cookies, analytics, and external content",
            paragraphs: [
              <>
                This website currently uses no analytics or marketing services and no non-essential
                cookies. Fonts and images are served locally. If this changes, we will update this
                notice and obtain consent before processing where required.
              </>,
            ],
          },
          {
            title: "Your rights",
            paragraphs: [
              <>
                Subject to the statutory conditions, you may request access, rectification,
                erasure, restriction, data portability, or object to processing. You may also
                lodge a complaint with a competent data protection authority.
              </>,
            ],
          },
        ];

  return (
    <LegalPage
      locale={locale}
      title={locale === "de" ? "Datenschutz" : "Privacy"}
      intro={
        locale === "de"
          ? "Diese Hinweise beschreiben die Verarbeitung personenbezogener Daten beim Besuch dieser Website."
          : "This notice explains how personal data is processed when you visit this website."
      }
      sections={sections}
    />
  );
}
