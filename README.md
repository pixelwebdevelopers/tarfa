# Tarfa Equipment Maintenance — Corporate Web Platform

> **"Where Excellence Meets Expertise"**  
> **"House of Quality"**  
> Established 1983 • Al Sina'iyah, Riyadh, Kingdom of Saudi Arabia

A bespoke, studio-grade corporate web platform engineered for **Tarfa Equipment Maintenance (تارفا لصيانة المعدات)**. Designed to project over 40 years of industrial electro-mechanical engineering authority across Saudi Arabia and the GCC.

Built from first principles to resist the hallmarks of automated AI generators: left-aligned editorial asymmetry, zero border radii (0–4px max), 1px hairline technical borders, industrial chamfered diagonal cuts derived from the brand identity, authentic workshop photography, and first-class bilingual English/Arabic RTL execution.

---

## 1. Project Specifications

| Attribute | Details |
| :--- | :--- |
| **Client** | Tarfa Equipment Maintenance (تارفا لصيانة المعدات) |
| **Location** | As Saman Al Saman, 2240, Al Sina'iyah, Riyadh 12871, Saudi Arabia |
| **Established** | 1983 (40+ Years of Operations) |
| **Core Capabilities** | Electric Motors, Chiller Compressors, Industrial Pumps, Generators & Transformers, Core Loss Testing, Dynamic Balancing |
| **Framework** | Next.js 15.5 (App Router), React 19, TypeScript |
| **Styling** | Tailwind CSS v3, CSS Logical Properties (RTL/LTR mirroring) |
| **Typography** | Barlow (Grotesque Headings), IBM Plex Sans Arabic (Arabic Body & Headings), JetBrains Mono (Technical Specs) |
| **Localization** | `next-intl` (Bilingual: `/en` default, `/ar` with full RTL layout mirroring) |
| **Forms & Dispatch** | Next.js API Route Handler with Resend / Nodemailer email delivery, honeypot spam traps, and in-memory rate limiting |
| **Deployment** | Vercel-ready with zero additional configuration |

---

## 2. Anti-AI Design Philosophy & Brand Tokens

The interface avoids generic SaaS patterns (centered heroes with dual buttons, floating glassmorphic cards, purple/blue gradients, and generic marketing copy) in favor of heavy industrial discipline:

- **Surface Restraint:** The brand red (`#DC2324`) is strictly confined to 5–8% of the visual surface (technical markers, status rules, active states, and primary CTAs). Large flood fills of red are forbidden.
- **Machine Charcoal & Canvas:** Surfaces use deep industrial charcoals (`#090C10` and `#0E1218`) for high-contrast technical sections and warm off-white (`#F8F9FA`) for editorial clarity.
- **25° Diagonal Chamfer Cut:** Inspired by the Tarfa corporate identity, a signature 20°–25° angular clip-path is applied with restraint to hero masks, section dividers, and badge containers. In Arabic (`dir="rtl"`), the cut automatically mirrors symmetrically.
- **Hairline Precision:** No soft drop shadows. All structural divisions rely on 1px hairline rules (`border-border-hairline` / `#E2E5E9` or `#28303A` on dark backgrounds) with engineering corner crop ticks and section indexing (`01`, `02`, `03`).
- **Authentic Factuality:** Every metric and capability is extracted directly from the verified 1983 company profile. No fictitious ISO certifications, awards, or arbitrary team counts have been invented.

---

## 3. Information Architecture & Sitemap

```
├── /en & /ar (Localized Route Tree)
│   ├── /                          # Home Page (Hero, Credibility, Services Table, Core Mosaic, Process, Industries, Clients, CTA)
│   ├── /about                     # Company History (1983), Mission, Core Values & Engineering Principles
│   ├── /services                  # Comprehensive Services Directory
│   │   ├── /motors                # AC/DC Motors, High/Low Voltage, Stator Rewinding & Overhaul
│   │   ├── /chiller-compressors   # Reciprocating, Screw, and Centrifugal Industrial Chiller Overhauls
│   │   ├── /water-pumps           # Centrifugal, Positive Displacement, Dewatering & Submersible Pumps
│   │   ├── /generators-transformers # Industrial Alternators, Generators, and Distribution Transformers
│   │   ├── /core-maintenance      # Loop Ring Core Loss Testing, Lamination Restacking, Spot Welding & Re-Varnishing
│   │   └── /testing-balancing     # Dynamic Balancing (ISO 1940), Baker Surge Testing, Static Diagnostics
│   ├── /industries                # Heavy Industries Served (Cement, Steel, Petrochemicals, Food, Healthcare, Utilities)
│   ├── /process                   # Rigorous 7-Stage Overhaul & QA Protocol (Receive → Test → Rewind → Bake → Balance → QA → Deliver)
│   ├── /clients                   # Institutional Client List (SABIC, Riyadh Water, Hospitals, Grain Silos, etc.)
│   ├── /contact                   # RFQ / Quote Request Form, Emergency Dispatch, Direct Phone, WhatsApp, Al Sina'iyah Map
│   ├── /privacy                   # Privacy Policy
│   └── /terms                     # Terms of Service & Industrial Warranty Guidelines
├── /api
│   └── /quote                     # POST endpoint: Validates form, checks honeypot, applies rate limits, dispatches email
└── /styleguide                    # Interactive Living Style Guide & Token Inspector
```

---

## 4. Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# Clone repository
git clone <repository-url>
cd "Tarfa Website"

# Install dependencies
npm install
```

### Environment Configuration

Create a `.env.local` file from the provided `.env.example`:

```bash
cp .env.example .env.local
```

Configure your email dispatch keys:

```env
# Email Dispatch (Resend)
RESEND_API_KEY=re_your_api_key_here
CONTACT_RECIPIENT_EMAIL=nabbras@yahoo.com
CONTACT_SENDER_EMAIL=quotes@tarfamaintenance.com

# Site URL
NEXT_PUBLIC_SITE_URL=https://tarfamaintenance.com

# Security & Rate Limiting
RATE_LIMIT_MAX_REQUESTS=5
RATE_LIMIT_WINDOW_SECONDS=60
```

### Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the English interface or [http://localhost:3000/ar](http://localhost:3000/ar) for Arabic. The styleguide is accessible at [http://localhost:3000/styleguide](http://localhost:3000/styleguide).

### Production Build

```bash
npm run build
npm run start
```

Static compilation verifies all 37 localized paths, strict TypeScript types, and JSON dictionaries.

---

## 5. Deployment on Vercel

This repository is configured for immediate, zero-configuration deployment to [Vercel](https://vercel.com):

1. Import the repository into your Vercel Dashboard.
2. Under **Environment Variables**, define `RESEND_API_KEY`, `CONTACT_RECIPIENT_EMAIL`, and `CONTACT_SENDER_EMAIL`.
3. Set Framework Preset to **Next.js**.
4. Click **Deploy**.

Static pages, serverless API route handlers, and OpenGraph assets will automatically configure without custom build scripts.

---

## 6. Content & Internationalization (i18n)

All content lives strictly in typed JSON dictionaries:
- `src/messages/en.json` — English technical terminology and layout copy.
- `src/messages/ar.json` — Verified industrial Arabic terminology (marked for client native review in `ARABIC-REVIEW.md`).

**No hardcoded user-facing strings exist inside components.**

### RTL Implementation Rules
- Uses CSS Logical Properties throughout (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`, `text-start`, `text-end`).
- Arabic font: **IBM Plex Sans Arabic** with a line-height multiplier of `1.75` for visual balance.
- Zero letter-spacing is applied to Arabic script (`tracking-normal`).
- Phone numbers, physical coordinates, and Western digits are isolated with `direction: ltr; unicode-bidi: isolate;` to prevent punctuation inversion.

---

## 7. Contact & Support

**Tarfa Equipment Maintenance**  
- Primary Contact: Hamid Ali  
- Phones: `+966 50 2640 474` / `+966 50 6626770`  
- Email: `nabbras@yahoo.com`  
- Workshop: As Saman Al Saman, 2240, Al Sina'iyah, Riyadh 12871, KSA  

