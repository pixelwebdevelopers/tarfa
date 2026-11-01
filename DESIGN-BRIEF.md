# Tarfa Equipment Maintenance — Corporate Website Design Brief
**Client:** Tarfa Equipment Maintenance (تارفا لصيانة المعدات)  
**Location:** Riyadh, Kingdom of Saudi Arabia (Al Sina'iyah, As Saman Al Saman, 2240, 12871)  
**Established:** 1983 (40+ Years of Industrial Service Excellence)  
**Taglines:** "Where Excellence Meets Expertise" | "House of Quality"  
**Domain:** Industrial B2B Electrical & Mechanical Engineering Services (Rewinding, Overhaul, Repair, Dynamic Balancing, Core Maintenance)

---

## 1. Brand Tokens & Color System

The color palette is derived directly from the Tarfa Equipment Maintenance official profile and brand mark. The brand red is an authoritative, high-visibility industrial vermilion—applied with surgical restraint (5–8% total surface area) as a technical marker, rule, active state, or primary action point. It is never used as large background floods.

```css
:root {
  /* Brand Primary Accents (Sharp, High-Visibility Industrial Vermilion) */
  --color-brand-red: #DC2324;         /* Primary brand accent */
  --color-brand-red-hover: #B81B1C;   /* Darker hover state */
  --color-brand-red-subtle: #FDF2F2;  /* Light tint for alerts/badges */
  --color-brand-red-glow: rgba(220, 35, 36, 0.12);

  /* Charcoal & Dark Surface Hierarchy (Stator Core & Cast-Iron Palette) */
  --color-charcoal-900: #0E1218;     /* Deep industrial ground / dark section background */
  --color-charcoal-800: #161C24;     /* Elevated dark card & mosaic panel */
  --color-charcoal-700: #222A35;     /* Dark component border & hairline divider */
  --color-charcoal-600: #344050;     /* Muted dark strokes */

  /* Neutral & Canvas Scale (Precision Machine Workshop Warm White) */
  --color-canvas-warm: #F8F9FA;      /* Page background (light mode) */
  --color-surface-pure: #FFFFFF;     /* White card & table row background */
  --color-canvas-subtle: #F0F2F5;    /* Alternate section background */
  --color-border-hairline: #E2E5E9;  /* 1px technical divider */
  --color-border-strong: #CBD1D8;    /* Interactive border */

  /* Typography Colors */
  --color-text-primary-dark: #0F172A;   /* Primary body text (light theme) */
  --color-text-secondary-dark: #4B5563; /* Secondary technical copy (light theme) */
  --color-text-primary-light: #F3F4F6;  /* Primary body text (dark theme) */
  --color-text-secondary-light: #9CA3AF;/* Secondary copy (dark theme) */
  --color-text-mono-label: #DC2324;     /* Eyebrow & spec indicators */

  /* Functional Industrial Status */
  --color-status-pass: #059669;      /* Test certification passed */
  --color-status-notice: #D97706;    /* High-voltage / warning note */
}
```

### Visual Surface Discipline
- **Light Surfaces (65%)**: Clean technical canvas with fine 1px borders (`#E2E5E9`) and crisp contrast.
- **Dark Surfaces (25–30%)**: Used for high-gravity sections: Header, Core Maintenance workshop mosaic, Footer, and technical data sheets.
- **Brand Red Accent (5–8%)**: Reserved strictly for eyebrow indices (`01 // MOTORS`), hairline active underlines, primary CTA buttons, status flags, and the signature diagonal chamfer trims.

---

## 2. Typography Architecture

An industrial engineering company requires confident, grounded, and legible grotesque typefaces paired with fixed-width mono numerals for specifications, combined with first-class Arabic typographic craftsmanship.

| Role | English Face | Arabic Face | Weight Range | Application |
| :--- | :--- | :--- | :--- | :--- |
| **Headings (Display)** | **Barlow** (Grotesque) | **IBM Plex Sans Arabic** / **Noto Kufi Arabic** | 600 SemiBold, 700 Bold, 800 ExtraBold | Page titles, section headlines, stat callouts, service indices. Tight letter tracking (`tracking-tight`), uppercase eyebrows. |
| **Body (Prose)** | **Barlow** / **Inter** (Neutral Sans) | **IBM Plex Sans Arabic** | 400 Regular, 500 Medium | Narrative copy, process descriptions, client briefs. High line-height (1.65–1.75 on Arabic) for effortless technical reading. |
| **Specs & Numbers (Mono)** | **JetBrains Mono** / **IBM Plex Mono** | **IBM Plex Mono** (Western digits) | 400 Regular, 600 SemiBold | Section numbering (`01 / 06`), voltage (`3.3kV / 13.8kV`), RPM, HP, timestamps, workshop coordinates, Est. 1983 badge. |

### Typography Rules
1. **No generic AI fonts**: Strictly no default unrefined sans or playful fonts (no Poppins, Montserrat, or Nunito).
2. **Arabic Typography Standard**:
   - Zero letter-spacing on Arabic text (letter-spacing breaks Arabic cursive connections).
   - Arabic line-height increased by 15–20% compared to English.
   - Natural Saudi industrial terminology (`إعادة لف المحركات`, `ضواغط التبريد`, `المحولات الكهربائية`, `موازنة العضو الدوار`).
   - Western numerals (`1983`, `+966 50 2640 474`, `40+`) used consistently across both languages as standard in modern Gulf engineering documentation. Phone numbers always enforce LTR reading direction.

---

## 3. Signature Motif: The Precision Diagonal Cut (Chamfer)

Extracted directly from the Tarfa 1983 corporate profile vector plates, where red and charcoal angled shapes frame workshop equipment and technical panels.

```
       English (LTR)                             Arabic (RTL)
┌───────────────────────┐                 ┌───────────────────────┐
│                       │                 │                       │
│    Workshop Visual    │                 │    Workshop Visual    │
│                       /                 \                       │
│                      /                   \                      │
└─────────────────────/                     \─────────────────────┘
  Slanted Chamfer Cut (15°-25°)             Mirrored RTL Chamfer Cut
```

### CSS Implementation
- **Component Class**: `.industrial-cut`
- **LTR polygon**: `clip-path: polygon(0 0, 100% 0, calc(100% - 36px) 100%, 0 100%);`
- **RTL polygon (`[dir="rtl"]`)**: `clip-path: polygon(36px 0, 100% 0, 100% 100%, 0 100%);`
- **Usage Guidelines**:
  - Image crop masks on hero and featured service panels.
  - Section divider accents and hairline red indicator tabs.
  - Engineering badges ("EST. 1983 / RIYADH").
  - Restrained and consistent: always uniform angle (~20° to 25°), never applied randomly to every card.

---

## 4. Architectural Lessons from Benchmark References

### Benchmark 1: PR electronics (Denmark) — `prelectronics.com`
- **Taxonomy over Marketing**: PR Electronics organizes everything through clear technical categories (Temperature, Isolation, I.S. Interfaces, Multifunctional, Displays) rather than subjective marketing buckets. Every service is a searchable, discrete engineering offering.
- **Application Alignment**: They demonstrate industrial relevance by mapping capabilities directly to heavy industries (Cement, Steel, Energy, Food, Water & Wastewater).
- **Instant RFQ Action**: The hero and top bar feature a persistent "Quick Quote within 24 hours" action—making conversion frictionless for plant engineers with urgent downtime.
- **Proof & Compliance**: Clear presentation of testing rigor, warranty badges, and real industrial plant references.
- **Application to Tarfa**: We organize Tarfa’s rewinding and electromechanical services with the exact same industrial rigor. Every service page features a concrete Spec Table (equipment type | service | capacity / notes) and direct links to heavy industry applications.

### Benchmark 2: Rawat Industries (India) — `rawatindustries.com`
- **Direct Domain Peer**: Rawat specializes in electric motors, pumps, and industrial rewinding.
- **Technical Specifics Upfront**: They provide raw engineering specifications upfront: HP/kW ratings, RPM, voltage, phase, and application duty cycles.
- **Addressing Maintenance Buyer Friction**: They feature dedicated FAQs answering the core operational questions maintenance managers ask: *"How do I know if my motor needs rewinding or replacement?"*, *"What testing standards are performed before handover?"*, *"What is the turnaround time?"*.
- **Direct WhatsApp & Phone Integration**: Prominent call and WhatsApp channels, which is also the universal B2B communication standard in Saudi Arabia.
- **Application to Tarfa**: Direct spec cards, practical diagnostic workflow, clear turnaround indicators, and persistent WhatsApp / call shortcuts with Hamid Ali (+966 50 2640 474).

---

## 5. Information Architecture & Page Manifest

```
├── /en & /ar
│   ├── Home (/)
│   ├── About Us (/about)
│   ├── Services (/services)
│   │   ├── Motors Rewinding & Overhaul (/services/motors)
│   │   ├── Chiller Compressors (/services/chiller-compressors)
│   │   ├── Water Pumps (/services/water-pumps)
│   │   ├── Generators, Alternators & Transformers (/services/generators-transformers)
│   │   ├── Core Maintenance (/services/core-maintenance)
│   │   └── Testing & Rotor Balancing (/services/testing-balancing)
│   ├── Industries (/industries)
│   ├── Our Process (/process)
│   ├── Clients (/clients)
│   ├── Request a Quote / Contact (/contact)
│   ├── Style Guide (/styleguide)  [Design system token verification]
│   ├── Privacy Policy (/privacy)
│   ├── Terms of Service (/terms)
│   └── 404 Not Found (/not-found)
```

---

## 6. Home Page Layout Strategy (Anti-AI Section Blueprints)

To avoid the generic AI template appearance (centered heroes, 3 identical cards, glowing blobs, soft shadows), each section utilizes a unique structural pattern:

1. **Hero Section (Asymmetric Split with Chamfer Mask)**:
   - Left side: High-contrast technical headline, Est. 1983 mono badge, single red primary CTA ("Request a Quote"), secondary text link ("Explore Services"), workshop location tag ("Al Sina'iyah, Riyadh").
   - Right side: Full-bleed workshop rewinding photography with the precision 25° diagonal cut mask, real workshop depth, subtle hairline technical grid overlay, zero floating cards or fake gradients.
2. **Credibility & Heritage Strip (Technical Grid Data Bar)**:
   - Clean 4-column border-separated bar: `SINCE 1983` (40+ Years of Operation), `RIYADH, KSA` (Central Industrial District), `400V - 13.8kV` (Low & High Voltage Capability), `100% TESTED` (Static & Dynamic Load Verification). Strictly client-confirmed facts.
3. **Services Master Index (Interactive Numbered Row Table)**:
   - Not repeating cards! An indexed 6-row technical registry (`01` through `06`).
   - Each row features: Mono number, service name, equipment scope, technical spec badge, and an interactive row-expand / hover image reveal showcasing real workshop work.
4. **Core Maintenance Focus (Dark Asymmetric Mosaic)**:
   - Full-bleed dark section (`#0E1218`) highlighting Tarfa's rare specialized capability: Core Testing, Core Cleaning & Re-varnishing, Core Spot Welding.
   - Asymmetric 3-panel mosaic using authentic photos extracted from the profile (Image 87, 89, 91).
5. **Industrial Workflow Timeline (7-Step Precision Path)**:
   - Horizontal pipeline on desktop, vertical rail on mobile.
   - Step 01: Receive & Log → Step 02: Dismantle & Surge Test → Step 03: Precision Rewinding & Strip Wire → Step 04: Vacuum Pressure Varnish & Oven Bake → Step 05: Dynamic Rotor Balancing → Step 06: Final Load & Insulation Testing → Step 07: Handover & Documentation.
6. **Industries Served (Editorial Split Layout)**:
   - Left side: Full-height industrial facility photograph (Steel/Cement/Infrastructure).
   - Right side: Clean 2-column checklist of sectors with specific motor/pump equipment applications (Government, Steel, Cement, Construction, Hospitals, Flour Mills, Food & Beverage).
7. **Client Wall of Trust (Restrained Typography & Wordmarks)**:
   - Understated technical grid of verified client entities: CAF Arabia, KSB Pumps Arabia, Al-Ameen Dev & Trade, Al-Watnia, Dr Muhammad Fagi Hospital, SAPPCO, Al-Jouf Mineral Water, King Saud University (Jamia Malik Saud), Al Munajem Food Company.
8. **Closing RFQ Action Band (Dark Engineering Callout)**:
   - Direct quote request gateway with direct dispatch phone line (+966 50 2640 474), WhatsApp link, and online RFQ button.
9. **Footer (Comprehensive B2B Engineering Footer)**:
   - Full physical address (As Saman Al Saman, 2240, Al Sina'iyah, Riyadh 12871), email (`nabbras@yahoo.com`), bilingual navigation, working hours, and emergency breakdown hotline.

---

## 7. Imagery Strategy & Asset Inventory

All photographic assets extracted from `Tarfa_Equipment_Maintenance.pdf` and `tarfa-profile.pdf` have been converted and cataloged:

| Asset ID | Dimensions | Subject & Workshop Context | Assigned Placement |
| :--- | :--- | :--- | :--- |
| `Tarfa_Equipment_Maintenance_p1_0_Image6.png` | 740x493 | Heavy motor stator rewinding in workshop | Home Hero Visual / About Hero |
| `Tarfa_Equipment_Maintenance_p5_0_Image46.png` | 669x485 | Heavy-duty AC/DC motor stator coils | Services / Motors Page Header |
| `Tarfa_Equipment_Maintenance_p6_3_Image59.png` | 936x491 | Chiller screw compressor disassembly | Services / Chiller Compressors Page |
| `Tarfa_Equipment_Maintenance_p7_0_Image73.png` | 1207x626 | Submersible and centrifugal water pump array | Services / Water Pumps Page |
| `Tarfa_Equipment_Maintenance_p8_1_Image79.png` | 706x377 | Industrial alternator & generator stator | Services / Generators & Transformers |
| `Tarfa_Equipment_Maintenance_p8_2_Image81.png` | 550x466 | High-voltage transformer core & coils | Services / Transformers Detail |
| `Tarfa_Equipment_Maintenance_p9_1_Image87.png` | 865x792 | Technician performing Stator Core Testing | Core Maintenance Mosaic (Panel 1) |
| `Tarfa_Equipment_Maintenance_p9_2_Image89.png` | 629x755 | Stator Core Cleaning & Re-varnishing | Core Maintenance Mosaic (Panel 2) |
| `Tarfa_Equipment_Maintenance_p9_3_Image91.png` | 598x628 | Stator Core Spot Welding Operation | Core Maintenance Mosaic (Panel 3) |
| `Tarfa_Equipment_Maintenance_p3_0_Image27.png` | 964x673 | Heavy industrial plant facility | Industries Split Visual |
| `Tarfa_Equipment_Maintenance_p11_0_Image114.png`| 768x486 | Riyadh workshop testing bay | Contact / Facility Location |
| `Tarfa_Equipment_Maintenance_p11_1_Image116.png`| 767x431 | Workshop overhead crane & assembly bench | Process Section / Facility |

*Note on Image Discipline*: Real workshop photos are treated with a consistent color profile: slightly desaturated (-10%), balanced contrast, 1px hairline border, and zero artificial glow or floating drop shadows. Any temporary placeholder slots will be neutral technical wireframes labeled with required dimensions and subject matter, cataloged in `MISSING-IMAGES.md`.

---

## 8. Anti-AI Design Rules Checklist (Codified in Development)

- [x] **No centered hero with two buttons**: Left-aligned, confident, editorial layout with single primary red button and quiet secondary text link.
- [x] **No repeating 3-column cards**: Every section has a distinct architectural structure (Index table, Asymmetric Mosaic, Timeline, Split-screen, Data Sheet).
- [x] **No gradients or glassmorphism**: Solid authentic tones: charcoal, white, warm canvas, and hairline borders.
- [x] **No generic marketing fluff**: Copy is grounded strictly in profile facts: what is rewound, what tests are conducted, what industrial standards apply.
- [x] **No rounded pills or soft shadows**: Hairline 1px borders (`#E2E5E9` / `#222A35`), 0–4px radii, sharp chamfer cuts.
- [x] **First-class Arabic RTL**: Native mirroring, CSS logical properties throughout, zero broken ligatures, correct technical Arabic vocabulary.

