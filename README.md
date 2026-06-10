# KRAFIT website

Bilingual KRAFIT brand and product website built with Next.js 16, React 19,
TypeScript, and Tailwind CSS 4.

## Local development

```bash
npm ci
npm run dev
```

Open `http://127.0.0.1:3000`. The root URL redirects to `/en`; German content is
available at `/de`.

## Production configuration

Copy the keys from `.env.example` into the deployment platform's environment
settings. Production builds intentionally fail when any required value is
missing, so placeholder legal or contact information cannot be deployed.

Required variables:

- `SITE_URL`
- `CONTACT_EMAIL`
- `LEGAL_NAME`
- `LEGAL_ADDRESS`
- `LEGAL_REPRESENTATIVE`
- `HOSTING_PROVIDER`
- `BANDS_PRODUCT_URL`
- `PUSHUP_STANDS_PRODUCT_URL`

Optional variables:

- `VAT_ID`
- `REGISTER_COURT`
- `REGISTER_NUMBER`

The privacy text reflects the current implementation: local fonts and images,
server access logs, and email contact only. Update the policy and consent flow
before adding analytics, advertising, embedded media, forms, or non-essential
cookies.

## Verification

```bash
npm run check
```

For a production build, provide the required environment variables:

```bash
SITE_URL=https://www.example.com \
CONTACT_EMAIL=hello@example.com \
LEGAL_NAME="Example GmbH" \
LEGAL_ADDRESS="Street 1, 80331 Munich, Germany" \
LEGAL_REPRESENTATIVE="Example Person" \
HOSTING_PROVIDER="Example Host, Host Street 1, Germany" \
BANDS_PRODUCT_URL=https://shop.example/products/resistance-bands \
PUSHUP_STANDS_PRODUCT_URL=https://shop.example/products/push-up-stands \
npm run build
```

## Deployment checklist

1. Verify the legal identity, address, representative, register, and VAT data.
2. Confirm the contact inbox is active and monitored.
3. Set the canonical production origin in `SITE_URL`.
4. Set both product URLs to live checkout or marketplace pages.
5. Review product claims against current product documentation.
6. Run `npm run check` and a production build.
7. Test `/en`, `/de`, purchase links, legal pages, metadata routes, and a real 404 over HTTPS.
