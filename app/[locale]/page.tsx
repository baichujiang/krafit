import { notFound } from "next/navigation";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { SectionBrand } from "../components/SectionBrand";
import { SectionContact } from "../components/SectionContact";
import { SectionCraft } from "../components/SectionCraft";
import { SectionProducts } from "../components/SectionProducts";
import {
  getMessages,
  isLocale,
  type Locale,
} from "@/lib/messages";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "en" satisfies Locale }, { locale: "de" satisfies Locale }];
}

export default async function Home({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale = raw as Locale;
  const messages = getMessages(locale);

  return (
    <>
      <Header locale={locale} messages={messages} />
      <main className="flex-1">
        <Hero messages={messages} />
        <SectionBrand messages={messages} />
        <SectionProducts messages={messages} />
        <SectionCraft messages={messages} />
        <SectionContact messages={messages} />
      </main>
      <Footer locale={locale} messages={messages} />
    </>
  );
}
