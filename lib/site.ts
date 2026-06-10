const isProduction = process.env.NODE_ENV === "production";

function required(name: string, developmentValue: string): string {
  const value = process.env[name]?.trim();
  if (value) {
    return value;
  }

  if (isProduction) {
    throw new Error(
      `Missing required production environment variable: ${name}. ` +
        "See .env.example for the required deployment configuration.",
    );
  }

  return developmentValue;
}

function optional(name: string): string | undefined {
  return process.env[name]?.trim() || undefined;
}

const rawSiteUrl = required("SITE_URL", "http://127.0.0.1:3000");

export const siteConfig = {
  url: new URL(rawSiteUrl),
  contactEmail: required("CONTACT_EMAIL", "contact@localhost.invalid"),
  legalName: required("LEGAL_NAME", "KRAFIT development environment"),
  legalAddress: required(
    "LEGAL_ADDRESS",
    "Configure LEGAL_ADDRESS before production deployment",
  ),
  legalRepresentative: required(
    "LEGAL_REPRESENTATIVE",
    "Configure LEGAL_REPRESENTATIVE before production deployment",
  ),
  hostingProvider: required(
    "HOSTING_PROVIDER",
    "Configure HOSTING_PROVIDER before production deployment",
  ),
  productUrls: [
    required("BANDS_PRODUCT_URL", "https://example.invalid/bands"),
    required("PUSHUP_STANDS_PRODUCT_URL", "https://example.invalid/push-up-stands"),
  ],
  vatId: optional("VAT_ID"),
  registerCourt: optional("REGISTER_COURT"),
  registerNumber: optional("REGISTER_NUMBER"),
} as const;

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}
