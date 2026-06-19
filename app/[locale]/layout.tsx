import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { buildHomeMetadata } from "@/lib/metadata";
import { getMessages, isLocale, type Locale } from "@/lib/messages";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display-var",
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
  return buildHomeMetadata(locale, getMessages(locale));
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
