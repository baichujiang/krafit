export type Locale = "en" | "de";

export type Messages = {
  meta: { title: string; description: string; keywords: string };
  nav: { brand: string; lines: string; craft: string; contact: string; partner: string };
  navAria: string;
  homeAria: string;
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
    p1: string;
    missionLabel: string;
    mission: string;
    promiseLabel: string;
    promise: string;
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
    title: "KRAFIT — Training essentials that hold the line",
    description:
      "KRAFIT engineers resistance bands and push-up stands for predictable, repeatable home training — materials, ergonomics, and QC you can trust.",
    keywords: "KRAFIT, resistance bands, push-up bars, home gym, strength training",
  },
  nav: {
    brand: "Brand",
    lines: "Product lines",
    craft: "Craft",
    contact: "Contact",
    partner: "Partnerships",
  },
  navAria: "Primary navigation",
  homeAria: "KRAFIT home",
  hero: {
    kicker: "Established discipline",
    title1: "STRENGTH",
    title2: "IN EVERY REP",
    lead: "KRAFIT builds home training tools with an engineering mindset. Resistance bands and push-up stands are not accessories — they are the quiet interface between intent and adaptation.",
    ctaPrimary: "Explore the lines",
    ctaSecondary: "Our story",
    scroll: "Scroll",
  },
  brand: {
    title: "WHY KRAFIT",
    p1: "We believe training lives in repetition and patience. The brand started with frustration around gear that felt disposable — so we rethought tension curves, grip ergonomics, storage, and service life, end to end.",
    missionLabel: "Mission",
    mission:
      "Make strength work at home — and on the road — feel steady, measurable, and worth returning to.",
    promiseLabel: "Promise",
    promise:
      "No novelty for novelty’s sake — only what measurably helps training. The stability you feel comes from tolerances and process, not marketing.",
  },
  products: {
    kicker: "Product lines",
    title: "TWO PILLARS",
    intro:
      "Two lines cover the core of pushing and full-body resistance. This is design intent and engineering — not a storefront.",
    lines: [
      {
        tag: "Resistance",
        name: "Resistance system — bands",
        description:
          "Multi-layer latex with textile jacketing for a curve that tracks natural output. Clearly marked levels for periodization and progression.",
        highlights: ["Consistent decay profile", "Anti-snap jacketing", "Travel-ready"],
      },
      {
        tag: "Support",
        name: "Support system — push-up stands",
        description:
          "Wide bases and compliant contact surfaces stay planted on wood and tile. Wrist angles validated for long sets without unnecessary strain.",
        highlights: ["Low-profile stability", "Quiet grip", "Load-tested geometry"],
      },
    ],
  },
  craft: {
    kicker: "Process",
    title: "CRAFT & QA",
    aside: "The backbone of a serious brand is traceable standards and repeatable quality checks.",
    steps: [
      {
        title: "Material selection",
        body: "Elastic layers and textiles are balanced for weathering, odor, and rebound — not a quick win that turns tacky in month three.",
      },
      {
        title: "Structural validation",
        body: "Push-up stands go through static and dynamic tilt cycles so geometry stays trustworthy after fatigue.",
      },
      {
        title: "Touch calibration",
        body: "Grip radii and texture are blind-tested with a simple brief: still comfortable when the set gets long.",
      },
    ],
  },
  contact: {
    title: "LET'S TALK",
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
    title: "KRAFIT — Training Essentials, die halten, was sie versprechen",
    description:
      "KRAFIT entwickelt Widerstandsbänder und Liegestütz-Griffe für vorhersehbares, wiederholbares Heimtraining — Materialien, Ergonomie und Qualitätssicherung, denen Sie vertrauen können.",
    keywords:
      "KRAFIT, Widerstandsbänder, Liegestützgriffe, Homegym, Krafttraining, Calisthenics",
  },
  nav: {
    brand: "Marke",
    lines: "Produktlinien",
    craft: "Fertigung",
    contact: "Kontakt",
    partner: "Partnerschaften",
  },
  navAria: "Hauptnavigation",
  homeAria: "KRAFIT Startseite",
  hero: {
    kicker: "Disziplin, die bleibt",
    title1: "KRAFT",
    title2: "IN JEDER WIEDERHOLUNG",
    lead: "KRAFIT entwickelt Heimtraining-Ausrüstung mit Ingenieursdenken. Widerstandsbänder und Liegestütz-Griffe sind keine Beigaben — sie sind die ruhige Schnittstelle zwischen Vorsatz und Anpassung.",
    ctaPrimary: "Produktlinien entdecken",
    ctaSecondary: "Unsere Geschichte",
    scroll: "Weiter",
  },
  brand: {
    title: "WARUM KRAFIT",
    p1: "Wir glauben, dass Training in Wiederholung und Geduld stattfindet. Die Marke entstand aus der Frustration über Equipment, das sich billig anfühlte — also haben wir Spannungsverläufe, Griff-Ergonomie, Verstauen und Lebensdauer neu gedacht.",
    missionLabel: "Mission",
    mission:
      "Krafttraining zu Hause — und unterwegs — ruhig, messbar und wiederholbar machen.",
    promiseLabel: "Versprechen",
    promise:
      "Keine Spielerei um der Spielerei willen — nur das, was dem Training wirklich hilft. Die Stabilität, die Sie spüren, kommt aus Toleranzen und Prozess — nicht aus Marketing.",
  },
  products: {
    kicker: "Produktlinien",
    title: "ZWEI SÄULEN",
    intro:
      "Zwei Linien decken das Wesentliche für Druckbewegungen und Ganzkörper-Widerstand ab. Hier geht es um Design und Engineering — nicht um einen Shop.",
    lines: [
      {
        tag: "Widerstand",
        name: "Widerstandssystem — Bänder",
        description:
          "Mehrschichtiges Latex mit Textilummantelung für eine Kennlinie, die natürlicher Kraftverlauf näherkommt. Klar markierte Stufen für Periodisierung und Progression.",
        highlights: ["Konstanter Abfall", "Bruchschutz-Ummantelung", "Reisetauglich"],
      },
      {
        tag: "Stütze",
        name: "Stützsystem — Liegestütz-Griffe",
        description:
          "Breite Standflächen und griffige Auflage bleiben auf Holz und Fliesen ruhig liegen. Handgelenkswinkel für lange Sätze validiert — ohne unnötige Belastung.",
        highlights: ["Niedriger Schwerpunkt", "Leise, griffig", "Belastungsgeprüft"],
      },
    ],
  },
  craft: {
    kicker: "Ablauf",
    title: "FERTIGUNG & QS",
    aside: "Das Rückgrat einer ernsthaften Marke sind nachvollziehbare Standards und wiederholbare Prüfungen.",
    steps: [
      {
        title: "Materialauswahl",
        body: "Elastik und Textil sind auf Witterung, Geruch und Rückstellkraft abgestimmt — nicht auf einen schnellen Effekt, der nach wenigen Wochen klebrig wird.",
      },
      {
        title: "Strukturprüfung",
        body: "Liegestütz-Griffe durchlaufen statische und dynamische Kippzyklen, damit die Geometrie auch nach Ermüdung verlässlich bleibt.",
      },
      {
        title: "Griff-Feintuning",
        body: "Radien und Oberfläche werden blind getestet — mit einem Ziel: am Ende des Satzes noch angenehm festzuhalten.",
      },
    ],
  },
  contact: {
    title: "SPRECHEN WIR",
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
