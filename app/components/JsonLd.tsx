import { contactEmail, siteUrl, products } from "@/lib/site";
import type { Locale } from "@/lib/messages";

type Props = {
  locale: Locale;
};

export function JsonLd({ locale }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "KRAFIT",
        url: siteUrl,
        email: contactEmail,
        inLanguage: locale === "de" ? "de-DE" : "en-US",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "KRAFIT",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: ["en-US", "de-DE"],
      },
      {
        "@type": "Product",
        name: "KRAFIT Resistance Bands",
        brand: { "@type": "Brand", name: "KRAFIT" },
        category: "Fitness equipment",
        url: products.resistanceBands.amazonUrl,
        description:
          locale === "de"
            ? "Mehrschichtige Widerstandsbänder mit Textilummantelung für langlebiges Training."
            : "Multi-layer resistance bands with textile jacketing for durable training.",
      },
      {
        "@type": "Product",
        name: "KRAFIT Push-Up Stands",
        brand: { "@type": "Brand", name: "KRAFIT" },
        category: "Fitness equipment",
        url: products.pushUpStands.amazonUrl,
        description:
          locale === "de"
            ? "Liegestützgriffe aus massivem Buchenholz mit ergonomischem Design."
            : "Solid beechwood push-up stands with ergonomic wrist-friendly design.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
