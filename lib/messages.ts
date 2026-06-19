import { contactEmail } from "@/lib/site";

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
    ctaProducts: string;
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
    page: {
      meta: { title: string; description: string };
      heading: string;
      intro: string;
      whatsInside: string;
      contents: string[];
      ctaDownload: string;
      ctaBrowse: string;
      alsoBuy: string;
    };
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
    shopOnAmazon: string;
  };
  legal: {
    privacy: {
      meta: { title: string; description: string };
      title: string;
      updated: string;
      intro: string;
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

const en: Messages = {
  meta: {
    title: "KRAFIT — Durable resistance bands & wooden push-up stands",
    description:
      "High-quality resistance bands and beechwood push-up stands built to last. Free training guide included. Shop KRAFIT on Amazon.",
    keywords:
      "KRAFIT, resistance bands, push-up stands, home workout equipment, durable fitness gear, wooden push-up bars",
  },
  nav: {
    brand: "About",
    lines: "Products",
    guide: "Training guide",
    craft: "Quality",
    contact: "Contact",
  },
  navAria: "Main navigation",
  homeAria: "KRAFIT home",
  tagline: "Equipment that lasts",
  hero: {
    kicker: "Resistance bands & push-up stands",
    title1: "Train with intention.",
    title2: "Equipment built to last.",
    lead: "Durable, well-made fitness gear for home workouts — designed for years of use, not months.",
    ctaBuy: "Buy on Amazon",
    ctaGuide: "Free training guide",
    ctaProducts: "View products",
    imageAlt: "KRAFIT resistance bands in blue, yellow, and orange",
  },
  guide: {
    kicker: "Free with every band set",
    title: "Resistance band training guide",
    lead:
      "46 pages covering safe setup, progressive workouts, and exercise reference — save it to your phone and train anywhere.",
    formatLabel: "Digital guide",
    formatValue: "{pages} pages · PDF",
    note: "Free download, no sign-up required.",
    download: "Get the free guide",
    view: "Open in browser",
    highlights: ["Setup & safety", "Progressive workouts", "Exercise reference"],
    productLink: "Get free guide",
    page: {
      meta: {
        title: "Free Resistance Band Training Guide — KRAFIT",
        description: "Download the free 46-page KRAFIT resistance band training guide. Covers safe setup, progressive workouts, and a full exercise reference.",
      },
      heading: "Resistance band training guide",
      intro: "A free 46-page PDF covering everything you need to get the most from your KRAFIT resistance bands — from safe setup to progressive workout plans.",
      whatsInside: "What's inside",
      contents: [
        "Safe setup and band care basics",
        "Warm-up and mobility routines",
        "Progressive strength workouts (beginner to intermediate)",
        "Full exercise reference with illustrations",
        "Tips for long-term band maintenance",
      ],
      ctaDownload: "Download PDF (free)",
      ctaBrowse: "Or open in browser",
      alsoBuy: "Get the bands to match your guide",
    },
  },
  brand: {
    kicker: "About KRAFIT",
    title: "Quality you can feel",
    body: "We make fitness equipment that lasts. Every product is designed for durability — fewer replacements, less waste, better training.",
    closing:
      "Our goal is simple: gear that supports your body and respects the planet.",
  },
  products: {
    kicker: "Our products",
    title: "Built for real training",
    intro:
      "Thoughtfully designed gear you keep for years — not throwaway accessories.",
    lines: [
      {
        tag: "Resistance",
        name: "KRAFIT Resistance Bands",
        subtitle: "Multi-layer latex with textile jacketing",
        badge: "Training guide included",
        description:
          "Three resistance levels with clearly marked bands. The textile jacketing protects the latex and provides a comfortable, non-slip grip during any exercise.",
        useCases: ["Mobility", "Strength training", "Warm-up", "Rehab-style training"],
        idealFor: "Home workouts, beginners to intermediate, progressive resistance training",
        highlights: ["Built to outlast seasonal trends", "Comfortable textile surface", "Compact — easy to store and travel with"],
        buyOnAmazon: "Buy on Amazon",
      },
      {
        tag: "Support",
        name: "KRAFIT Push-Up Stands",
        subtitle: "Solid beechwood with anti-slip pads",
        badge: "Wrist-friendly design",
        description:
          "Handcrafted from European beechwood with ergonomic grip angles. Anti-slip pads keep them planted on any surface — wood, tile, or gym mats.",
        useCases: ["Push-ups", "Upper body strength", "Floor training", "Calisthenics"],
        idealFor: "Home training, calisthenics beginners, anyone seeking wrist comfort",
        highlights: ["Stable natural wood construction", "Quiet, home-friendly use", "Ergonomic wrist angle"],
        buyOnAmazon: "Buy on Amazon",
      },
    ],
  },
  craft: {
    kicker: "Quality",
    title: "Made to stay",
    aside:
      "Better products, replaced less often. That is our approach to reducing waste.",
    steps: [
      {
        title: "Durable materials",
        body: "Multi-layer latex bands and solid beechwood stands — chosen for how they perform and age over years of use.",
      },
      {
        title: "Tested geometry",
        body: "Push-up stands go through tilt and load testing so the ergonomic angle stays reliable over time.",
      },
      {
        title: "Honest design",
        body: "No unnecessary features. Grip radii and textures are refined for comfort during long training sessions.",
      },
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Get in touch",
    lead: "For partnerships, bulk orders, and press inquiries — we typically reply within five business days.",
    emailLabel: "Email",
    email: contactEmail,
    buyLabel: "Or shop directly on Amazon",
  },
  footer: {
    rights: "All rights reserved.",
    imprint: "Imprint",
    privacy: "Privacy",
    shopOnAmazon: "Shop on Amazon",
  },
  legal: {
    privacy: {
      meta: {
        title: "Privacy Policy — KRAFIT",
        description: "How KRAFIT handles personal data on krafit.eu.",
      },
      title: "Privacy Policy",
      updated: "Last updated: June 2026",
      intro:
        "This policy explains what data we process when you visit krafit.eu and how you can reach us with privacy questions.",
      sections: [
        {
          title: "Who is responsible",
          body: `KRAFIT operates this website. For privacy enquiries, contact us at ${contactEmail}.`,
        },
        {
          title: "What we collect",
          body:
            "This is a static marketing site. We do not use contact forms or newsletter sign-ups. If you email us, we receive the information you choose to send so we can respond.",
        },
        {
          title: "Server and hosting logs",
          body:
            "Our hosting provider may process technical data such as IP address, browser type, request time, and pages viewed to deliver the site securely and reliably.",
        },
        {
          title: "Cookies",
          body:
            "We do not set marketing or analytics cookies. Essential technical cookies may be used by the hosting platform to operate the service.",
        },
        {
          title: "Your rights",
          body:
            "Depending on applicable law, you may have rights to access, correct, delete, or restrict processing of your personal data. Contact us at the email above to exercise these rights.",
        },
        {
          title: "Changes",
          body:
            "We may update this policy when our site or legal requirements change. The date at the top indicates the latest revision.",
        },
      ],
    },
  },
  notFound: {
    title: "Page not found",
    body: "The page you are looking for does not exist or has been moved.",
    home: "Back to home",
  },
  error: {
    title: "Something went wrong",
    body: "An unexpected error occurred. Please try again or return to the homepage.",
    retry: "Try again",
    home: "Back to home",
  },
  lang: {
    en: "EN",
    de: "DE",
    switchTo: "Switch language",
  },
};

const de: Messages = {
  meta: {
    title: "KRAFIT — Langlebige Widerstandsbänder & Liegestützgriffe aus Holz",
    description:
      "Hochwertige Widerstandsbänder und Liegestützgriffe aus Buchenholz — langlebig gebaut. Kostenloser Trainingsguide inklusive. KRAFIT auf Amazon kaufen.",
    keywords:
      "KRAFIT, Widerstandsbänder, Liegestützgriffe, Fitnessgeräte für Zuhause, Trainingszubehör, Holz Liegestützgriffe",
  },
  nav: {
    brand: "Über uns",
    lines: "Produkte",
    guide: "Trainingsguide",
    craft: "Qualität",
    contact: "Kontakt",
  },
  navAria: "Hauptnavigation",
  homeAria: "KRAFIT Startseite",
  tagline: "Ausrüstung, die bleibt",
  hero: {
    kicker: "Widerstandsbänder & Liegestützgriffe",
    title1: "Trainieren Sie mit Bedacht.",
    title2: "Ausrüstung, die hält.",
    lead: "Langlebige, gut verarbeitete Fitnessgeräte für Ihr Training zu Hause — für Jahre gebaut, nicht für Monate.",
    ctaBuy: "Bei Amazon kaufen",
    ctaGuide: "Kostenloser Trainingsguide",
    ctaProducts: "Produkte ansehen",
    imageAlt: "KRAFIT Widerstandsbänder in Blau, Gelb und Orange",
  },
  guide: {
    kicker: "Gratis zu jedem Bänderset",
    title: "Widerstandsband-Trainingsguide",
    lead:
      "46 Seiten mit sicherem Setup, progressiven Workouts und Übungsreferenz — auf dem Handy speichern und überall trainieren.",
    formatLabel: "Digitale Anleitung",
    formatValue: "{pages} Seiten · PDF",
    note: "Kostenloser Download, keine Anmeldung nötig.",
    download: "Guide kostenlos ansehen",
    view: "Im Browser öffnen",
    highlights: ["Setup & Sicherheit", "Progressive Workouts", "Übungsreferenz"],
    productLink: "Kostenlosen Guide ansehen",
    page: {
      meta: {
        title: "Kostenloser Widerstandsband-Trainingsguide — KRAFIT",
        description: "Laden Sie den kostenlosen 46-seitigen KRAFIT Trainingsguide herunter. Sicheres Setup, progressive Workouts und vollständige Übungsreferenz.",
      },
      heading: "Widerstandsband-Trainingsguide",
      intro: "Ein kostenloses 46-seitiges PDF mit allem, was Sie brauchen, um das Beste aus Ihren KRAFIT Widerstandsbändern herauszuholen — vom sicheren Setup bis zu progressiven Trainingsplänen.",
      whatsInside: "Was drin steckt",
      contents: [
        "Sicheres Setup und Bandpflege",
        "Aufwärm- und Mobilitätsroutinen",
        "Progressive Kraftworkouts (Einsteiger bis Fortgeschrittene)",
        "Vollständige Übungsreferenz mit Abbildungen",
        "Tipps zur langfristigen Bandpflege",
      ],
      ctaDownload: "PDF herunterladen (kostenlos)",
      ctaBrowse: "Oder im Browser öffnen",
      alsoBuy: "Die passenden Bänder zum Guide",
    },
  },
  brand: {
    kicker: "Über KRAFIT",
    title: "Qualität, die man spürt",
    body: "Wir machen Fitnessgeräte, die halten. Jedes Produkt ist auf Langlebigkeit ausgelegt — weniger Ersatz, weniger Abfall, besseres Training.",
    closing:
      "Unser Ziel ist einfach: Ausrüstung, die Ihren Körper unterstützt und den Planeten respektiert.",
  },
  products: {
    kicker: "Unsere Produkte",
    title: "Für echtes Training gebaut",
    intro:
      "Durchdachte Ausrüstung, die Sie jahrelang begleitet — keine Wegwerf-Accessoires.",
    lines: [
      {
        tag: "Widerstand",
        name: "KRAFIT Widerstandsbänder",
        subtitle: "Mehrschichtiges Latex mit Textilummantelung",
        badge: "Trainingsguide inklusive",
        description:
          "Drei Widerstandsstufen mit klar markierten Bändern. Die Textilummantelung schützt das Latex und bietet einen komfortablen, rutschfesten Griff bei jeder Übung.",
        useCases: ["Mobilität", "Krafttraining", "Aufwärmen", "Reha-Training"],
        idealFor: "Home-Workouts, Einsteiger bis Fortgeschrittene, progressives Widerstandstraining",
        highlights: ["Gebaut, um länger zu halten als Trends", "Komfortable Textiloberfläche", "Kompakt — einfach zu verstauen und transportieren"],
        buyOnAmazon: "Bei Amazon kaufen",
      },
      {
        tag: "Stütze",
        name: "KRAFIT Liegestützgriffe",
        subtitle: "Massives Buchenholz mit Anti-Rutsch-Pads",
        badge: "Handgelenkschonendes Design",
        description:
          "Handgefertigt aus europäischem Buchenholz mit ergonomischen Griffwinkeln. Anti-Rutsch-Pads sorgen für stabilen Halt auf jeder Oberfläche — Holz, Fliesen oder Trainingsmatten.",
        useCases: ["Liegestütze", "Oberkörperkraft", "Bodentraining", "Calisthenics"],
        idealFor: "Home-Training, Calisthenics-Einsteiger, alle die Handgelenkkomfort suchen",
        highlights: ["Stabile Naturholz-Konstruktion", "Leise, wohnungstauglich", "Ergonomischer Handgelenkwinkel"],
        buyOnAmazon: "Bei Amazon kaufen",
      },
    ],
  },
  craft: {
    kicker: "Qualität",
    title: "Gemacht, um zu bleiben",
    aside:
      "Bessere Produkte, seltener ersetzt. Das ist unser Ansatz zur Abfallvermeidung.",
    steps: [
      {
        title: "Langlebige Materialien",
        body: "Mehrschichtige Latex-Bänder und massive Buchenholz-Griffe — ausgewählt für Leistung und Alterungsverhalten über Jahre.",
      },
      {
        title: "Geprüfte Geometrie",
        body: "Liegestützgriffe durchlaufen Kipp- und Belastungstests, damit der ergonomische Winkel langfristig zuverlässig bleibt.",
      },
      {
        title: "Ehrliches Design",
        body: "Keine unnötigen Features. Griffradien und Oberflächen sind für Komfort bei langen Trainingseinheiten optimiert.",
      },
    ],
  },
  contact: {
    kicker: "Kontakt",
    title: "Kontakt aufnehmen",
    lead: "Für Partnerschaften, Großbestellungen und Presseanfragen — wir antworten in der Regel innerhalb von fünf Werktagen.",
    emailLabel: "E-Mail",
    email: contactEmail,
    buyLabel: "Oder direkt auf Amazon kaufen",
  },
  footer: {
    rights: "Alle Rechte vorbehalten.",
    imprint: "Impressum",
    privacy: "Datenschutz",
    shopOnAmazon: "Auf Amazon kaufen",
  },
  legal: {
    privacy: {
      meta: {
        title: "Datenschutzerklärung — KRAFIT",
        description: "Wie KRAFIT personenbezogene Daten auf krafit.eu verarbeitet.",
      },
      title: "Datenschutzerklärung",
      updated: "Stand: Juni 2026",
      intro:
        "Diese Erklärung beschreibt, welche Daten wir beim Besuch von krafit.eu verarbeiten und wie Sie uns bei Datenschutzfragen erreichen.",
      sections: [
        {
          title: "Verantwortliche Stelle",
          body: `KRAFIT betreibt diese Website. Datenschutzanfragen richten Sie bitte an ${contactEmail}.`,
        },
        {
          title: "Welche Daten wir erheben",
          body:
            "Dies ist eine statische Produktwebsite. Wir verwenden keine Kontaktformulare oder Newsletter-Anmeldungen. Wenn Sie uns per E-Mail schreiben, erhalten wir die von Ihnen mitgeteilten Informationen, um zu antworten.",
        },
        {
          title: "Server- und Hosting-Protokolle",
          body:
            "Unser Hosting-Anbieter kann technische Daten wie IP-Adresse, Browsertyp, Anfragezeitpunkt und aufgerufene Seiten verarbeiten, um die Website sicher bereitzustellen.",
        },
        {
          title: "Cookies",
          body:
            "Wir setzen keine Marketing- oder Analyse-Cookies. Technisch notwendige Cookies der Hosting-Plattform können für den Betrieb verwendet werden.",
        },
        {
          title: "Ihre Rechte",
          body:
            "Je nach anwendbarem Recht haben Sie u. a. das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung. Wenden Sie sich dazu an die oben genannte E-Mail-Adresse.",
        },
        {
          title: "Änderungen",
          body:
            "Wir können diese Erklärung anpassen, wenn sich unsere Website oder rechtliche Anforderungen ändern. Das Datum oben zeigt die letzte Aktualisierung.",
        },
      ],
    },
  },
  notFound: {
    title: "Seite nicht gefunden",
    body: "Die angeforderte Seite existiert nicht oder wurde verschoben.",
    home: "Zur Startseite",
  },
  error: {
    title: "Etwas ist schiefgelaufen",
    body: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kehren Sie zur Startseite zurück.",
    retry: "Erneut versuchen",
    home: "Zur Startseite",
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
