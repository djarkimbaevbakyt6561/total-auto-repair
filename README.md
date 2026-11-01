This is a [Next.js](https://nextjs.org) AUTO REPAIR STARTER KIT

## Structure of Landing Page:

+------------------------------------------------------------------+
| Top Bar: Phone, Address, Operating Hours (Image 2 Structure) |
+------------------------------------------------------------------+
| Navigation: Logo | Services | About | Reviews | [BOOK NOW] CTA |
+------------------------------------------------------------------+
| HERO SECTION (Image 1 High-Conversion Layout): |
| - High-contrast stencil headline ("AUTO REPAIR DONE RIGHT.") |
| - Integrated Quick Quote Form Overlay (Name, Phone, Service) |
+------------------------------------------------------------------+
| TRUST STATS BAR: 25+ Yrs | ASE Certified | Sat Hours | 100% Rate |
+------------------------------------------------------------------+
| INDUSTRIAL HAZARD STRIPE DIVIDER (Signature Accent) |
+------------------------------------------------------------------+
| SERVICES SECTION (Image 1 Numbered Row Design): |
| - Off-white background (#F4F4F0) for high visual contrast |
| - Bold "01, 02, 03" horizontal accordion / service listings |
+------------------------------------------------------------------+
| STOREFRONT SPOTLIGHT (Image 1): Shop Photo + Address Tagging |
+------------------------------------------------------------------+
| GALLERY ("RECENT WORK"): 2-Column Real Shop Repairs Split |
+------------------------------------------------------------------+
| TESTIMONIALS SECTION (Image 1): Rating metrics & customer cards |
+------------------------------------------------------------------+
| HAZARD STRIPE DIVIDER |
+------------------------------------------------------------------+
| FOOTER QUOTE & CONTACT (Image 2 Form + Image 1 Info Layout): |
| - Left: Direct phone, address, hours |
| - Right: Resend-powered full quote request form |
+------------------------------------------------------------------+

auto-repair-starter/
├── app/
│   ├── layout.tsx                  # Root layout (fonts, metadata, providers)
│   ├── page.tsx                    # Landing page assembling sections
│   ├── globals.css                 # Tailwind v4 theme setup & CSS variables
│   └── api/
│       └── quote/route.ts          # Resend API endpoint for quote submissions
├── components/
│   ├── ui/                         # Reusable design primitives (TV styled)
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── card.tsx
│   │   └── hazard-stripe.tsx       # Industrial striped section divider
│   ├── layout/
│   │   ├── header.tsx              # Top bar + main navigation
│   │   └── footer.tsx
│   └── sections/                   # High-converting page sections
│       ├── hero-quote.tsx          # Hero with quick quote form overlay
│       ├── trust-bar.tsx           # ASE / Experience stats ribbon
│       ├── services-list.tsx       # Numbered expandable rows (from Image 1)
│       ├── services-grid.tsx       # Alternative 8-card grid (from Image 2)
│       ├── storefront-spotlight.tsx# Location & shop image showcase
│       ├── gallery-showcase.tsx    # Recent work split gallery
│       ├── testimonials.tsx        # Customer reviews & ratings
│       └── quote-section.tsx       # Comprehensive bottom contact form
├── config/
│   └── site.ts                     # SINGLE SOURCE OF TRUTH (All client data)
├── lib/
│   ├── resend.ts                   # Resend client instance
│   └── variants.ts                 # Tailwind Variants helper utilities
└── public/
    └── images/                     # Placeholder images for shop assets