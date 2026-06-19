import type { Metadata } from "next";

import type { Locale, Messages } from "@/lib/messages";
import { siteUrl } from "@/lib/site";

type PageMeta = {
  title: string;
  description: string;
};

export function buildPageMetadata(
  locale: Locale,
  page: PageMeta,
  path = "",
): Metadata {
  const canonicalPath = `/${locale}${path}`;
  const url = `${siteUrl}${canonicalPath}`;

  return {
    metadataBase: new URL(siteUrl),
    title: page.title,
    description: page.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: `${siteUrl}/en${path}`,
        de: `${siteUrl}/de${path}`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
      alternateLocale: locale === "de" ? ["en_US"] : ["de_DE"],
      url,
      siteName: "KRAFIT",
      title: page.title,
      description: page.description,
      images: [
        {
          url: "/icon.svg",
          width: 512,
          height: 512,
          alt: "KRAFIT",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: page.title,
      description: page.description,
      images: ["/icon.svg"],
    },
  };
}

export function buildHomeMetadata(locale: Locale, messages: Messages): Metadata {
  const { meta } = messages;

  return {
    ...buildPageMetadata(locale, meta),
    keywords: meta.keywords.split(",").map((s) => s.trim()),
  };
}
