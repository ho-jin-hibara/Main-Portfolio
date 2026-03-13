# New-Portfolio (kazuyahibara.com)

## Stack
- **Framework**: Next.js 16.1.6 (App Router) + Turbopack
- **i18n**: next-intl, en/ja, routing `/[locale]/[page]`
- **Hosting**: Vercel
- **Build quirk**: `next build` with Turbopack gives `pages-manifest.json` ENOENT — use `npx tsc --noEmit` for type checking

## Design System ("Mochi" Claymorphic Theme)
- Background: Warm Sand `#F3F1E9`
- Text: Cocoa Gray `#595046`
- Accent: Soft Coral `#FFBFA8`
- Fonts: Nunito (latin), Zen Maru Gothic (ja)
- Components: `MochiCard`, `MochiButton`, `mochi-texture` bg class

## Content Architecture
- Static TypeScript data in `lib/content/` (workflows.ts, case-studies.ts)
- 12 Workflow + 3 Case Study articles, en/ja bilingual
- Dynamic routes: `app/[locale]/cases/[slug]/page.tsx`
- Images: `public/images/` (WebP only)
- Translations: inline objects per page (not centralized i18n files)

## OG Images
- Dynamic generation via `app/api/og/route.tsx` (Edge, `next/og`)
- `GET /api/og?title=...&subtitle=...` → 1200x630 PNG
- Each page has unique OG image parameters

## API Routes
- `POST /api/contact` — contact form (Resend, Zod validation, rate limiting)
- `GET /api/og` — dynamic OG image generation
