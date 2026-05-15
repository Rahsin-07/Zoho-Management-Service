# ZoFlowX v5 — Zoho Managed Services

A premium, modern landing page for **ZoFlowX's Zoho Managed Services**, built on the same UI identity as v4 (the Zoho Integration Services page) but with refreshed content, deeper interactivity, and tighter polish.

> **Live route:** `/zoho-managed-services`
> Root `/` redirects to it.

---

## What changed from v4

### Same visual DNA (kept intact)
- Tri-color palette from the ZoFlowX logo X — **blue `#2563eb`**, **red `#dc2626`**, **yellow `#f59e0b`**
- Signature gradient: `--grad-tri: linear-gradient(95deg, #2563eb 0%, #dc2626 55%, #f59e0b 100%)`
- Plus Jakarta Sans (headings) + Inter (body) + JetBrains Mono (added for tickers/stats)
- Cream `#f6f1ea` surfaces, dark navy `#0b1220 → #1e3a8a` accent sections
- Same card pattern: white surface, `#e8e3dc` border, hover lift + colored shadow + animated top bar

### What's new in v5
- **New content end-to-end** — 12 sections aligned to the Managed Services brief
- **Premium polish** — refined easings (`--ease-out`, `--ease-spring`), softer animations (`float-y-soft`, `pulse-soft`, `marquee-x`, `grad-shift`)
- **New utilities** — `.section-label-blue`, `.section-label-yellow`, `.tri-bar-lg`, `.glass-dark`, `.chip-soft`, `.tri-underline`, `.marquee`, `.halo-tri`, `.btn-dark-soft`, `::selection`
- **Animated hero stats** — count-up from 0 to 14+ / 65% / 24h / 20+ on viewport entry, with the tri-color top bar
- **Floating module chips** — 8 Zoho modules (CRM, Books, Desk, Creator, Analytics, Recruit, Inventory, People) softly drift in the hero
- **Stronger interactivity** — every card has a hover transform, colored glow, and a top bar that scales in
- **Real case studies** — Brite Decking (construction), Image Star (distribution), CoWorkFlowX (coworking SaaS) — Arul's actual recent projects
- **Comparison table** — 8-row in-house vs ZoFlowX honest comparison, with stacked-card mobile layout
- **Monthly/Annual pricing toggle** — with a "SAVE 12%" badge on annual
- **Founder card** in Consultation section with Arul's tri-color avatar + quote

---

## Stack

- **Framework:** Next.js 14.2.5 (App Router)
- **UI:** React 18
- **Styling:** Bootstrap 5.3.2 grid + utility-first inline styles + `globals.css` design tokens
- **Icons:** bootstrap-icons 1.11.3
- **Fonts:** Google Fonts (Plus Jakarta Sans, Inter, JetBrains Mono)

No CSS framework lock-in beyond Bootstrap's grid. Components are pure JSX with scoped inline styles and CSS variables driving the theme.

---

## Run it locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` — you'll be redirected to `/zoho-managed-services`.

```bash
# production build
npm run build
npm start
```

---

## Structure

```
zoflowx-v5/
├── app/
│   ├── layout.js                          # Metadata + Google Fonts
│   ├── page.js                            # Redirects → /zoho-managed-services
│   └── zoho-managed-services/
│       └── page.js                        # The page itself — assembles all sections
├── components/
│   ├── Navbar.jsx                         # Sticky nav, tri-color logo, "Book My Free Audit" CTA
│   ├── Hero.jsx                           # § 01 — H1, dual CTAs, 4 animated stats, floating chips
│   ├── Problem.jsx                        # § 02 — 4 pain-point cards (rotating tri-colors)
│   ├── Services.jsx                       # § 03 — 8 services, dark CTA banner
│   ├── WhyUs.jsx                          # § 04 — 6 reasons, corner number reveal on hover
│   ├── Process.jsx                        # § 05 — 4-step timeline (horizontal desktop / vertical mobile)
│   ├── Comparison.jsx                     # § 06 — In-house vs ZoFlowX table + mobile stack
│   ├── CaseStudies.jsx                    # § 07 — 3 real client cards with metrics
│   ├── Testimonials.jsx                   # § 08 — 3 quotes, tri-color rotation
│   ├── Pricing.jsx                        # § 09 — 3 plans + Monthly/Annual toggle + add-ons
│   ├── Resources.jsx                      # § 10 — 3 journal articles
│   ├── Consultation.jsx                   # § 11 — Dark CTA + founder card + 3 contact options
│   ├── FAQ.jsx                            # § 12 — 8 accordion FAQs + related pages
│   ├── Footer.jsx                         # Dark footer, tri-color top stripe, 4 columns
│   ├── LogoMark.jsx                       # The tri-color X SVG
│   └── ScrollTop.jsx                      # Floating back-to-top button
├── styles/
│   └── globals.css                        # Design tokens + animations + utilities
├── next.config.js
└── package.json
```

---

## Design tokens (in `styles/globals.css`)

```css
--brand-blue:    #2563eb;
--brand-red:     #dc2626;
--brand-yellow:  #f59e0b;
--ink:           #0b1220;
--paper:         #f6f1ea;
--grad-tri:      linear-gradient(95deg, #2563eb 0%, #dc2626 55%, #f59e0b 100%);
--grad-tri-vivid:linear-gradient(95deg, #3b82f6 0%, #ef4444 55%, #fbbf24 100%);
--ease-out:      cubic-bezier(.2,.7,.2,1);
--ease-spring:   cubic-bezier(.34,1.56,.64,1);
```

---

## Author

Built for **Arul Raj** — Founder, ZoFlowX (an Inboxist company) — Zoho Authorized Partner with 13+ years on Zoho.
Tirunelveli & Chennai, India.

`info@zoflowx.com` · `+91 8190009222` · [zoflowx.com](https://zoflowx.com)
