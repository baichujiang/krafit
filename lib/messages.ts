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
    foundationLabel: string;
    visionLabel: string;
    title: string;
    body: string;
    closing: string;
  };
  products: {
    kicker: string;
    title: string;
    intro: string;
    cta: string;
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
    kicker: string;
    title: string;
    lead: string;
    emailLabel: string;
    emailNote: string;
  };
  footer: {
    rights: string;
    imprint: string;
    privacy: string;
    legalNav: string;
  };
  lang: { en: string; de: string; switchTo: string };
};

const en: Messages = {
  meta: {
    title: "KRAFIT — Quality training for people and planet",
    description:
      "Discover KRAFIT resistance bands and push-up stands for focused home training.",
    keywords:
      "KRAFIT, resistance bands, push-up bars, home training, fitness equipment",
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
    lead: "We focus on practical equipment, considered material choices, and clear product information for consistent home training.",
    ctaPrimary: "Explore products",
    ctaSecondary: "Our purpose",
    scroll: "Scroll",
  },
  brand: {
    foundationLabel: "Brand foundation",
    visionLabel: "Vision",
    title: "About us",
    body: "KRAFIT develops accessible training equipment with an emphasis on practical design, careful material selection, and everyday usability.",
    closing:
      "Our aim is simple: equipment that supports regular movement and fits naturally into life at home.",
  },
  products: {
    kicker: "Products",
    title: "The range",
    cta: "View product",
    intro:
      "Straightforward training tools for strength, mobility, and repeatable sessions at home.",
    lines: [
      {
        tag: "Resistance",
        name: "Resistance system — bands",
        description:
          "Resistance bands in clearly marked levels for warm-ups, mobility work, and progressive strength sessions.",
        highlights: ["Multiple resistance levels", "Compact storage", "Suitable for varied exercises"],
      },
      {
        tag: "Support",
        name: "Support system — push-up stands",
        description:
          "Push-up stands with broad bases and non-slip contact surfaces for controlled home workouts.",
        highlights: ["Broad support surface", "Home-friendly format", "Neutral grip position"],
      },
    ],
  },
  craft: {
    kicker: "How we work",
    title: "Materials & care",
    aside:
      "We review materials, construction, and care guidance as part of each product decision.",
    steps: [
      {
        title: "Material selection",
        body: "We compare performance, handling, and expected wear when selecting materials for each use case.",
      },
      {
        title: "Construction review",
        body: "We review dimensions, contact surfaces, and assembly details before a product enters the range.",
      },
      {
        title: "Practical ergonomics",
        body: "Grip shape and surface choices are guided by controlled, repeatable movement during everyday training.",
      },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Contact",
    lead: "For retail partnerships, corporate kits, and press — reach us by email. We typically reply within five business days.",
    emailLabel: "Business email",
    emailNote: "Please do not send sensitive personal or payment information by email.",
  },
  footer: {
    rights: "All rights reserved.",
    imprint: "Imprint",
    privacy: "Privacy",
    legalNav: "Legal information",
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
      "Entdecken Sie KRAFIT Widerstandsbänder und Liegestütz-Griffe für fokussiertes Training zu Hause.",
    keywords:
      "KRAFIT, Widerstandsbänder, Liegestützgriffe, Heimtraining, Fitnessgeräte",
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
    lead: "Wir konzentrieren uns auf praktische Ausrüstung, bewusste Materialentscheidungen und klare Produktinformationen für regelmäßiges Training zu Hause.",
    ctaPrimary: "Produkte entdecken",
    ctaSecondary: "Unser Auftrag",
    scroll: "Weiter",
  },
  brand: {
    foundationLabel: "Markenbasis",
    visionLabel: "Vision",
    title: "Über uns",
    body: "KRAFIT entwickelt zugängliche Trainingsausrüstung mit Fokus auf praktische Gestaltung, sorgfältige Materialauswahl und Alltagstauglichkeit.",
    closing:
      "Unser Ziel ist einfach: Ausrüstung, die regelmäßige Bewegung unterstützt und selbstverständlich in den Alltag zu Hause passt.",
  },
  products: {
    kicker: "Produkte",
    title: "Das Sortiment",
    cta: "Produkt ansehen",
    intro:
      "Übersichtliche Trainingshelfer für Kraft, Mobilität und wiederholbare Einheiten zu Hause.",
    lines: [
      {
        tag: "Widerstand",
        name: "Widerstandssystem — Bänder",
        description:
          "Widerstandsbänder in klar gekennzeichneten Stufen für Aufwärmen, Mobilität und progressives Krafttraining.",
        highlights: [
          "Mehrere Widerstandsstufen",
          "Kompakt verstaubar",
          "Für vielseitige Übungen",
        ],
      },
      {
        tag: "Stütze",
        name: "Stützsystem — Liegestütz-Griffe",
        description:
          "Liegestütz-Griffe mit breiten Standflächen und rutschhemmenden Kontaktflächen für kontrolliertes Training zu Hause.",
        highlights: [
          "Breite Auflagefläche",
          "Wohnraumfreundliches Format",
          "Neutrale Griffposition",
        ],
      },
    ],
  },
  craft: {
    kicker: "So arbeiten wir",
    title: "Material & Sorgfalt",
    aside:
      "Materialien, Konstruktion und Pflegehinweise werden bei jeder Produktentscheidung berücksichtigt.",
    steps: [
      {
        title: "Materialauswahl",
        body: "Wir vergleichen Leistung, Handhabung und erwartbaren Verschleiß bei der Auswahl für den jeweiligen Einsatz.",
      },
      {
        title: "Konstruktionsprüfung",
        body: "Abmessungen, Kontaktflächen und Montagedetails werden geprüft, bevor ein Produkt in das Sortiment aufgenommen wird.",
      },
      {
        title: "Praktische Ergonomie",
        body: "Griffform und Oberflächenwahl orientieren sich an kontrollierten, wiederholbaren Bewegungen im Alltagstraining.",
      },
    ],
  },
  contact: {
    kicker: "Kontakt",
    title: "Kontakt",
    lead: "Für Handelspartnerschaften, Firmenpakete und Presse — erreichen Sie uns per E-Mail. In der Regel antworten wir innerhalb von fünf Werktagen.",
    emailLabel: "Geschäftliche E-Mail",
    emailNote: "Bitte senden Sie keine sensiblen persönlichen Daten oder Zahlungsinformationen per E-Mail.",
  },
  footer: {
    rights: "Alle Rechte vorbehalten.",
    imprint: "Impressum",
    privacy: "Datenschutz",
    legalNav: "Rechtliche Informationen",
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
