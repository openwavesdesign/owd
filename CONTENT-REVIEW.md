# Content review: please approve or edit

Copy was carried over from openwavesdesign.com and localized for Greater Philadelphia.
Anything **new or changed** is listed below. Items marked ⚠️ are claims I wrote that only you can confirm.

## Changed from the current site

| Where | Current site | New site | Why |
| --- | --- | --- | --- |
| Home title tag | Web Design for Solopreneurs \| Open Waves Design | Web Design for Small Businesses in Greater Philadelphia \| Open Waves Design | Local SEO: city/region in the title |
| Home eyebrow | Web Design for Small Businesses | Web design for Greater Philadelphia small businesses | Local positioning |
| Home subhead | I create beautiful, strategic websites for solopreneurs and small business owners | …for local small businesses and solopreneurs. Sites that get you found, build trust, and turn visitors into customers. | Local, plus a clear outcome |
| Home trust line | (none) | 5.0 on Google · 20 years building websites | Social proof (your Google listing currently shows 5.0 from 2 reviews) |
| "Your website might be the reason…" | clients | customers | Local businesses often have customers, not clients |
| Built to Be Found | …so you show up when your ideal clients are searching | …so you show up when customers nearby search for what you do | Local |
| Built for your business | I specialize in websites for solopreneurs because I am one. | Local small businesses are my specialty, because I run one too. + a short paragraph | Local positioning; keeps your line |
| Contact page | "Contact Us… We're here to help" (we) | "Let's talk about your website." (I) | The rest of the site speaks as "I"; this makes it consistent |
| About | Bio as on home page | Same bio + one sentence about now focusing on local businesses in Greater Philadelphia | Local |
| Audit page H1 | Get Your Free Website Audit | Find out what your website is really doing for you. | More benefit-led; the button still says "free site audit" |

## New copy that needs your OK

- ⚠️ **Service areas:** Philadelphia, Montgomery, Bucks, Chester and Delaware Counties. Add or remove any (e.g. South Jersey).
- ⚠️ **"I work with service businesses and makers across Greater Philadelphia, and with clients across the country. You get one person who knows your business and picks up when you call."**
- ⚠️ **Contact page:** "I'll get back to you within one business day" and "Happy to meet in person locally or by video call."
- ⚠️ **About values:** "One point of contact", "Plain English", "Small by design" (drawn from your bio).
- ⚠️ **Services page "Every project includes" list:** written from your package bullets and process steps. Check that "Booking & contact" and "Training walkthrough" describe what you actually include.
- ⚠️ **"Most popular" badge** on the Standard package. Remove it if that isn't true.

## Kept as-is

Pricing (all three packages and bullets), the 3-step process, the Joanna Davis testimonial, the client-type list, the free audit offer and its 24–48 hour note.

## Recommendations (not built yet)

1. **Logo and headshot:** this build environment couldn't download your files. Add `public/images/logo.svg` (or .png) and `public/images/craig-allen.jpg`, then set `logo` and `headshot` in `src/config/site.ts`.
2. **HubSpot audit form:** your current audit form isn't in HubSpot. Create one (name, email, website, likes/dislikes) and paste its ID into `hubspot.auditFormId`.
3. **More reviews:** you have 2 Google reviews. Asking each past client for one is the single biggest local-SEO lever.
4. **Local landing pages later:** for example "Web design for Lansdale small businesses", once you have a local project or two to show.
5. **Portfolio / case studies:** even 2–3 short ones (Jo's Desserts?) would make the site much more convincing.
6. **Privacy policy page:** HubSpot forms and analytics set cookies, so add a privacy page (and a consent banner if you turn on GA).
7. **Share image:** add a 1200×630 `og:image` (it's easy to make in Canva).
8. **Fix on the current site:** your live /contact/ page sends a `noindex` robots tag, so Google won't index it. The new site doesn't do this.
