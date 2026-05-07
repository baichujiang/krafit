export type Locale = "en" | "de";

export type Messages = {
  meta: { title: string; description: string; keywords: string };
  nav: { brand: string; lines: string; craft: string; contact: string; partner: string };
  navAria: string;
  homeAria: string;
  tagline: string;
  hero: {
    kicker: string;
    title1: string;
    title2: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  brand: {
    title: string;
    body: string;
    closing: string;
  };
  products: {
    kicker: string;
    title: string;
    intro: string;
    lines: {
      tag: string;
      name: string;
      description: string;
      highlights: [string, string, string];
    }[];
  };
  craft: {
    kicker: string;
    title: string;
    aside: string;
    steps: { title: string; body: string }[];
  };
  contact: {
    title: string;
    lead: string;
    emailLabel: string;
    email: string;
    emailNote: string;
  };
  footer: {
    rights: string;
  };
  lang: { en: string; de: string; switchTo: string };
};

const en: Messages = {
  meta: {
    title: "KRAFIT — Quality training for people and planet",
    description:
      "KRAFIT offers high-quality resistance bands and push-up stands — built to last, with an eye on reducing our footprint and supporting your health.",
    keywords:
      "KRAFIT, sustainable fitness, resistance bands, push-up bars, home training, health, CO2",
  },
  nav: {
    brand: "About us",
    lines: "Products",
    craft: "Responsibility",
    contact: "Contact",
    partner: "Partnerships",
  },
  navAria: "Primary navigation",
  homeAria: "KRAFIT home",
  tagline: "Quality for you and the planet",
  hero: {
    kicker: "Quality · health · responsibility",
    title1: "Train with intention.",
    title2: "Choose equipment that lasts.",
    lead: "We believe durable, well-made gear supports both your body and a smaller footprint — fewer replacements, more years of use, more focus on what matters.",
    ctaPrimary: "Explore products",
    ctaSecondary: "Our purpose",
    scroll: "Scroll",
  },
  brand: {
    title: "About us",
    body: "KRAFIT is committed to offering high-quality products. Our goal is to reduce our carbon footprint while improving personal health and quality of life.",
    closing:
      "Shape a better future with KRAFIT — make a positive difference for our planet and for yourself.",
  },
  products: {
    kicker: "Products",
    title: "The range",
    intro:
      "Thoughtfully designed tools you keep for years — less waste, consistent training, clear engineering choices instead of throwaway accessories.",
    lines: [
      {
        tag: "Resistance",
        name: "Resistance system — bands",
        description:
          "Multi-layer latex with textile jacketing for a curve that tracks natural output. Clearly marked levels for periodization and progression.",
        highlights: ["Built to outlast seasonal trends", "Repairable mindset", "Compact — less shipping bulk"],
      },
      {
        tag: "Support",
        name: "Support system — push-up stands",
        description:
          "Wide bases and compliant contact surfaces stay planted on wood and tile. Wrist angles validated for long sets without unnecessary strain.",
        highlights: ["Stable geometry over time", "Quiet, home-friendly use", "Tested load cycles"],
      },
    ],
  },
  craft: {
    kicker: "How we work",
    title: "Materials & care",
    aside:
      "Quality and longevity are part of how we think about impact — better products, replaced less often, with processes we keep tightening.",
    steps: [
      {
        title: "Materials with a long horizon",
        body: "We balance performance, durability, and how materials age — so gear stays trustworthy beyond the first few months.",
      },
      {
        title: "Structural validation",
        body: "Push-up stands go through static and dynamic tilt cycles so geometry stays reliable after repeated use.",
      },
      {
        title: "Honest ergonomics",
        body: "Grip radii and textures are tested with a simple question: still comfortable when the session runs long.",
      },
    ],
  },
  contact: {
    title: "Contact",
    lead: "For retail partnerships, corporate kits, and press — reach us by email. We typically reply within five business days.",
    emailLabel: "Business email",
    email: "hello@krafit.example",
    emailNote: "Placeholder address — replace with your live inbox before launch.",
  },
  footer: {
    rights: "All rights reserved.",
  },
  lang: {
    en: "EN",
    de: "DE",
    switchTo: "Switch language",
  },
};

const de: Messages = {
  meta: {
    title: "KRAFIT — Qualität für Training, Gesundheit und Verantwortung",
    description:
      "KRAFIT bietet hochwertige Widerstandsbänder und Liegestütz-Griffe — langlebig gedacht, mit Fokus auf CO2-Bewusstsein und Ihre Lebensqualität.",
    keywords:
      "KRAFIT, nachhaltiges Training, Widerstandsbänder, Liegestützgriffe, Gesundheit, CO2, Qualität",
  },
  nav: {
    brand: "Über uns",
    lines: "Produkte",
    craft: "Verantwortung",
    contact: "Kontakt",
    partner: "Partnerschaften",
  },
  navAria: "Hauptnavigation",
  homeAria: "KRAFIT Startseite",
  tagline: "Qualität für Sie und den Planeten",
  hero: {
    kicker: "Qualität · Gesundheit · Verantwortung",
    title1: "Trainieren Sie mit Bedacht.",
    title2: "Wählen Sie Ausrüstung, die bleibt.",
    lead: "Wir glauben: gut gemachte, langlebige Ausrüstung stützt sowohl Ihren Körper als auch einen geringeren Fußabdruck — weniger Ersatz, mehr Jahre Nutzen, mehr Fokus auf das Wesentliche.",
    ctaPrimary: "Produkte entdecken",
    ctaSecondary: "Unser Auftrag",
    scroll: "Weiter",
  },
  brand: {
    title: "Über uns",
    body: "KRAFIT ist bestrebt, qualitativ hochwertige Produkte anzubieten. Unser Ziel ist es, unseren CO2-Fußabdruck zu reduzieren und gleichzeitig unsere persönliche Gesundheit und Lebensqualität zu verbessern.",
    closing:
      "Gestalten Sie mit KRAFIT eine bessere Zukunft und machen Sie einen positiven Unterschied für unseren Planeten und sich selbst.",
  },
  products: {
    kicker: "Produkte",
    title: "Das Sortiment",
    intro:
      "Durchdachte Helfer, die Sie Jahre begleiten — weniger Abfall, konstantes Training, klare technische Entscheidungen statt Wegwerf-Zubehör.",
    lines: [
      {
        tag: "Widerstand",
        name: "Widerstandssystem — Bänder",
        description:
          "Mehrschichtiges Latex mit Textilummantelung für eine Kennlinie, die natürlichem Kraftverlauf nahekommt. Klar markierte Stufen für Periodisierung und Progression.",
        highlights: [
          "Gebaut, länger zu halten als Trends",
          "Reparaturfreundliche Logik",
          "Kompakt — weniger Versandvolumen",
        ],
      },
      {
        tag: "Stütze",
        name: "Stützsystem — Liegestütz-Griffe",
        description:
          "Breite Standflächen und griffige Auflage bleiben auf Holz und Fliesen ruhig liegen. Handgelenkswinkel für lange Sätze validiert — ohne unnötige Belastung.",
        highlights: [
          "Stabile Geometrie über die Zeit",
          "Leise, wohnortstauglich",
          "Geprüfte Lastzyklen",
        ],
      },
    ],
  },
  craft: {
    kicker: "So arbeiten wir",
    title: "Material & Sorgfalt",
    aside:
      "Qualität und Langlebigkeit gehören für uns zur Wirkung dazu — bessere Produkte, seltener ersetzt, mit Prozessen, die wir fortlaufend schärfen.",
    steps: [
      {
        title: "Materialien mit Weitblick",
        body: "Wir balancieren Leistung, Haltbarkeit und Alterung — damit die Ausrüstung über die ersten Monate hinaus verlässlich bleibt.",
      },
      {
        title: "Strukturprüfung",
        body: "Liegestütz-Griffe durchlaufen statische und dynamische Kippzyklen, damit die Geometrie bei Wiederholung stabil bleibt.",
      },
      {
        title: "Ehrliche Ergonomie",
        body: "Radien und Oberflächen werden mit einer Frage getestet: am Ende der Einheit noch angenehm zu halten.",
      },
    ],
  },
  contact: {
    title: "Kontakt",
    lead: "Für Handelspartnerschaften, Firmenpakete und Presse — erreichen Sie uns per E-Mail. In der Regel antworten wir innerhalb von fünf Werktagen.",
    emailLabel: "Geschäftliche E-Mail",
    email: "hello@krafit.example",
    emailNote: "Platzhalteradresse — vor dem Launch durch Ihre echte Mailbox ersetzen.",
  },
  footer: {
    rights: "Alle Rechte vorbehalten.",
  },
  lang: {
    en: "EN",
    de: "DE",
    switchTo: "Sprache wechseln",
  },
};

const table: Record<Locale, Messages> = { en, de };

export function isLocale(s: string): s is Locale {
  return s === "en" || s === "de";
}

export function getMessages(locale: string): Messages {
  return isLocale(locale) ? table[locale] : en;
}
