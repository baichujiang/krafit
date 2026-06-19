import { notFound } from "next/navigation";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { JsonLd } from "../components/JsonLd";
import { SectionBrand } from "../components/SectionBrand";
import { SectionContact } from "../components/SectionContact";
import { SectionCraft } from "../components/SectionCraft";
import { SectionGuide } from "../components/SectionGuide";
import { SectionProducts } from "../components/SectionProducts";
import {
  getMessages,
  isLocale,
  type Locale,
} from "@/lib/messages";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const locale = raw as Locale;
  const messages = getMessages(locale);

  return (
    <>
      <JsonLd locale={locale} />
      <Header locale={locale} messages={messages} />
      <main className="flex-1">
        <Hero locale={locale} messages={messages} />
        <SectionProducts locale={locale} messages={messages} />
        <SectionGuide messages={messages} />
        <SectionBrand messages={messages} />
        <SectionCraft messages={messages} />
        <SectionContact messages={messages} />
      </main>
      <Footer locale={locale} messages={messages} />
    </>
  );
}
