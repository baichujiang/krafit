import type { Metadata } from "next";

import type { Locale, Messages } from "@/lib/messages";
import { ogImage, siteUrl } from "@/lib/site";

type PageMeta = {
  title: string;
  description: string;
};

const socialImages = [
  {
    url: ogImage.path,
    width: ogImage.width,
    height: ogImage.height,
    alt: ogImage.alt,
  },
];

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
      images: socialImages,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogImage.path],
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
