# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for Open Waves Design, a one-person web design business (owner: Craig Allen) targeting small businesses in Greater Philadelphia first, then nationwide. Static Astro site (Astro 7, Node >= 22.12), no UI framework, plain CSS. Replaces a WordPress/Elementor site at openwavesdesign.com.

## Commands

```bash
npm install          # install deps
npm run dev          # dev server at http://localhost:4321
npm run build        # static build to dist/ (also generates sitemap-index.xml)
npm run preview      # serve the production build
```

There is no test suite, linter or formatter configured. `npm run build` is the verification step. It fails on template/TypeScript errors.

## Architecture

- **Content is centralized, not hard-coded in pages.** Business facts (phone, email, region, service areas, Google reviews URL, HubSpot IDs, GA4 ID, logo/headshot paths) live in `src/config/site.ts`. Copy reused across pages (pricing plans, process steps, testimonial, client types) lives in `src/config/content.ts` and is rendered by `Pricing`, `Process` and `Testimonial` components. Change these files instead of editing page markup, so Home and Services stay in sync.
- **`src/layouts/Base.astro`** wraps every page: meta/OG tags, canonical URL, `ProfessionalService` JSON-LD (built from `site.ts`), optional GA4 (only rendered when `site.gaId` is set), skip link, Header, Footer.
- **Optional assets fall back gracefully.** `site.logo` and `site.headshot` are `null` until real files are added to `public/images/`. `Wordmark.astro` renders a text/SVG wordmark and `about.astro` renders a "CA" monogram when they're null.
- **Forms are HubSpot embeds** (`HubSpotForm.astro`, portal `242375212`, region `na2`). The audit page uses `hubspot.auditFormId`, falling back to `contactFormId` while that's empty. There is no form backend in this repo.
- **URLs use trailing slashes** (`trailingSlash: 'always'` in `astro.config.mjs`). `/contact/` and `/free-website-audit/` keep the old WordPress paths for SEO continuity, so don't rename them.

## Design system

Tokens are CSS custom properties in `src/styles/global.css` (shared utility classes: `.section`, `.section--cream`, `.section--navy`, `.btn--primary`, `.btn--secondary`, `.eyebrow`, `.card`, `.check-list`, etc.). Component-specific styles use scoped `<style>` blocks.

Brand colors come from the owner's Canva brand kit and logo: navy `#1B3A57`, coral `#F27C6B`, cream `#F4E6D8`, paper `#FFFDFB`, logo teal `#24ABCC`, logo gray `#6D6E71`. Contrast rules (WCAG AA) that the styles depend on:
- Never put white text on coral (2.7:1). Coral buttons use `--ink` (`#13293D`) text.
- Coral and teal fail as text on light backgrounds. Use them for decoration, or for text on navy only.

Fonts: Poppins (headings/UI) and Lora (body), self-hosted via `@fontsource`.

## Content conventions

- The site speaks in first person singular ("I", not "we").
- `CONTENT-REVIEW.md` tracks every copy change from the old site, plus new claims awaiting the owner's approval. Don't invent business claims (turnaround times, services, reviews, results). When adding new copy that makes a factual claim, list it there for confirmation.
