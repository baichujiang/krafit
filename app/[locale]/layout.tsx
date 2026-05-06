import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getMessages, isLocale, type Locale } from "@/lib/messages";

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
    title: m.meta.title,
    description: m.meta.description,
    keywords: m.meta.keywords.split(",").map((s) => s.trim()),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        de: "/de",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return children;
}
