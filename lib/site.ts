function fromEnv(name: string, fallback: string): string {
  const value = process.env[name]?.trim();
  return value || fallback;
}

function optional(name: string): string | undefined {
  return process.env[name]?.trim() || undefined;
}

const rawSiteUrl = fromEnv("SITE_URL", "https://krafit.eu");

export const siteConfig = {
  url: new URL(rawSiteUrl),
  contactEmail: fromEnv("CONTACT_EMAIL", "kontakt@krafit.eu"),
  legalName: fromEnv("LEGAL_NAME", "KRAFIT"),
  legalAddress: fromEnv(
    "LEGAL_ADDRESS",
    "Configure LEGAL_ADDRESS before production deployment",
  ),
  legalRepresentative: fromEnv(
    "LEGAL_REPRESENTATIVE",
    "Configure LEGAL_REPRESENTATIVE before production deployment",
  ),
  hostingProvider: fromEnv(
    "HOSTING_PROVIDER",
    "Configure HOSTING_PROVIDER before production deployment",
  ),
  productUrls: [
    fromEnv("BANDS_PRODUCT_URL", "https://www.amazon.de/dp/B0DYMVLGF5"),
    fromEnv("PUSHUP_STANDS_PRODUCT_URL", "https://www.amazon.de/dp/B0DJM7F5XB"),
  ],
  vatId: optional("VAT_ID"),
  registerCourt: optional("REGISTER_COURT"),
  registerNumber: optional("REGISTER_NUMBER"),
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

export const products = {
  resistanceBands: {
    amazonUrl: siteConfig.productUrls[0],
    image: "/products/resistance-bands.jpg",
    imageWidth: 4302,
    imageHeight: 4302,
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
