# KRAFIT website

Bilingual KRAFIT product website built with Next.js 16, React 19, TypeScript,
and Tailwind CSS 4.

## Local development

```bash
npm ci
npm run dev
```

Open `http://127.0.0.1:3000`. The root URL redirects to `/en`; German content is
available at `/de`.

## Production configuration

The site can build without environment variables because public defaults are
provided in `lib/site.ts`. Configure these in Vercel when you want to override
the defaults:

- `SITE_URL`
- `CONTACT_EMAIL`
- `BANDS_PRODUCT_URL`
- `PUSHUP_STANDS_PRODUCT_URL`

Legal identity for the imprint and privacy pages lives in `legalInfo` inside
`lib/site.ts`. Update the name there, and add address or representative fields
only if you need them on the legal pages.

The privacy page reflects the current implementation: product presentation,
PDF download, email contact, local assets, and no analytics or marketing
cookies. Update the policy before adding analytics, advertising, embedded
media, forms, customer accounts, or non-essential cookies.

## Verification

```bash
npm run check
npm run build
```

## Deployment checklist

1. Update `legalInfo.name` in `lib/site.ts` if the public legal name differs from `KRAFIT`.
2. Confirm the contact inbox is active and monitored.
3. Set the canonical production origin in `SITE_URL` if it differs from `https://krafit.eu`.
4. Set both product URLs to live checkout or marketplace pages.
5. Review product claims against current product documentation.
6. Run `npm run check` and `npm run build`.
7. Test `/en`, `/de`, purchase links, the guide download, imprint, privacy, metadata routes, and a real 404 over HTTPS.
