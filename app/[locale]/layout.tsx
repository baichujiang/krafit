import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getMessages, isLocale, type Locale } from "@/lib/messages";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    return {};
  }
  const locale = raw as Locale;
  const m = getMessages(locale);
  return {
    metadataBase: siteConfig.url,
    title: m.meta.title,
    description: m.meta.description,
    keywords: m.meta.keywords.split(",").map((s) => s.trim()),
    applicationName: "KRAFIT",
    category: "fitness",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        de: "/de",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: "KRAFIT",
      locale: locale === "de" ? "de_DE" : "en_US",
      alternateLocale: locale === "de" ? ["en_US"] : ["de_DE"],
      url: absoluteUrl(`/${locale}`),
      title: m.meta.title,
      description: m.meta.description,
      images: [{ url: absoluteUrl("/og-image.png"), width: 1200, height: 630, alt: "KRAFIT" }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.meta.title,
      description: m.meta.description,
      images: [absoluteUrl("/og-image.png")],
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "en" satisfies Locale }, { locale: "de" satisfies Locale }];
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return (
    <html
      lang={locale}
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
