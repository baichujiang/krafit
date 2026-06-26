function fromEnv(name: string, fallback: string): string {
  const value = process.env[name]?.trim();
  return value || fallback;
}

const rawSiteUrl = fromEnv("SITE_URL", "https://krafit.eu");

export type LegalInfo = {
  name: string;
  hostingProvider: string;
  address?: string;
  representative?: string;
  vatId?: string;
  registerCourt?: string;
  registerNumber?: string;
};

/** Public provider details for imprint and privacy pages — edit here, not in env. */
export const legalInfo: LegalInfo = {
  name: "KRAFIT",
  hostingProvider:
    "Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA",
};

export const siteConfig = {
  url: new URL(rawSiteUrl),
  contactEmail: fromEnv("CONTACT_EMAIL", "kontakt@krafit.eu"),
  productUrls: [
    fromEnv("BANDS_PRODUCT_URL", "https://www.amazon.de/dp/B0DYMVLGF5"),
    fromEnv("PUSHUP_STANDS_PRODUCT_URL", "https://www.amazon.de/dp/B0DJM7F5XB"),
  ],
} as const;

export const siteUrl = siteConfig.url.toString().replace(/\/$/, "");
export const contactEmail = siteConfig.contactEmail;

export const resistanceBandGuidePdf = {
  href: "/downloads/krafit-resistance-band-guide.pdf",
  filename: "KRAFIT-Resistance-Band-Training-Guide.pdf",
  pages: 46,
  cover: "/products/guide-cover.png",
  coverWidth: 849,
  coverHeight: 1200,
} as const;

export const ogImage = {
  path: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "KRAFIT",
} as const;

export const products = {
  resistanceBands: {
    amazonUrl: siteConfig.productUrls[0],
    image: "/products/resistance-bands.jpg",
    imageWidth: 1600,
    imageHeight: 1600,
  },
  pushUpStands: {
    amazonUrl: siteConfig.productUrls[1],
    image: "/products/push-up-stands.png",
    imageWidth: 1024,
    imageHeight: 1024,
  },
} as const;

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}
