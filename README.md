# Open Waves Design: website

A minimal, static [Astro](https://astro.build) site for Open Waves Design.

## Commands

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm install`     | Install dependencies (Node 22.12+)        |
| `npm run dev`     | Local dev server at http://localhost:4321 |
| `npm run build`   | Build the static site to `dist/`          |
| `npm run preview` | Preview the production build              |

## Where things live

- `src/config/site.ts`: business details (phone, email, service areas), HubSpot form IDs, GA4 ID, logo/headshot paths
- `src/config/content.ts`: pricing, process steps, testimonial, client types (shared across pages)
- `src/styles/global.css`: brand tokens (colors, fonts, spacing) and shared styles
- `src/pages/`: Home, Services & Pricing, About, Free Website Audit, Contact, 404
- `public/images/`: put the logo and headshot here

## Brand tokens

| Token     | Hex       | Use                                                    |
| --------- | --------- | ------------------------------------------------------ |
| `--navy`  | `#1B3A57` | Primary text, dark sections                            |
| `--coral` | `#F27C6B` | Primary buttons (with `--ink` text), accents           |
| `--cream` | `#F4E6D8` | Alternate section backgrounds                          |
| `--paper` | `#FFFDFB` | Page background                                        |
| `--teal`  | `#24ABCC` | Logo teal: decorative details and text on navy only    |
| `--ink`   | `#13293D` | Text on coral (white on coral fails WCAG contrast)     |
| `--gray`  | `#6D6E71` | Logo gray: secondary text                              |

Fonts: Poppins (headings) and Lora (body), self-hosted through Fontsource.

## Forms

The Contact and Free Audit pages embed HubSpot forms (portal `242375212`, region `na2`).
The audit page uses the contact form until `hubspot.auditFormId` is set in `src/config/site.ts`.

## Deploying

The output is plain static files in `dist/`, so it works on any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
Build command `npm run build`, publish directory `dist`.
