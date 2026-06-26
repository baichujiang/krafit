export type Locale = "en" | "de";

export type ProductLine = {
  tag: string;
  name: string;
  subtitle: string;
  badge: string;
  description: string;
  useCases: string[];
  idealFor: string;
  highlights: [string, string, string];
  buyOnAmazon: string;
};

export type Messages = {
  meta: { title: string; description: string; keywords: string };
  nav: { brand: string; lines: string; guide: string; craft: string; contact: string };
  navAria: string;
  homeAria: string;
  tagline: string;
  hero: {
    kicker: string;
    title1: string;
    title2: string;
    lead: string;
    ctaBuy: string;
    ctaGuide: string;
    imageAlt: string;
  };
  guide: {
    kicker: string;
    title: string;
    lead: string;
    formatLabel: string;
    formatValue: string;
    note: string;
    download: string;
    view: string;
    highlights: [string, string, string];
    productLink: string;
  };
  brand: {
    kicker: string;
    title: string;
    body: string;
    closing: string;
  };
  products: {
    kicker: string;
    title: string;
    intro: string;
    lines: [ProductLine, ProductLine];
  };
  craft: {
    kicker: string;
    title: string;
    aside: string;
    steps: { title: string; body: string }[];
  };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    emailLabel: string;
    email: string;
    buyLabel: string;
  };
  footer: {
    rights: string;
    imprint: string;
    privacy: string;
  };
  legal: {
    privacy: {
      meta: { title: string; description: string };
      title: string;
      updated: string;
      intro: string;
      controllerTitle: string;
      sections: { title: string; body: string }[];
    };
  };
  notFound: {
    title: string;
    body: string;
    home: string;
  };
  error: {
    title: string;
    body: string;
    retry: string;
    home: string;
  };
  lang: { en: string; de: string; switchTo: string };
};

export function isLocale(s: string): s is Locale;
export function getMessages(locale: string): Messages;
