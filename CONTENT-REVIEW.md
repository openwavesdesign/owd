# Content review: please approve or edit

Copy was carried over from openwavesdesign.com and localized for Greater Philadelphia.
Anything **new or changed** is listed below. Items marked ⚠️ are claims I wrote that only you can confirm.

## Changed from the current site

| Where | Current site | New site | Why |
| --- | --- | --- | --- |
| Home title tag | Web Design for Solopreneurs \| Open Waves Design | Philadelphia Small Business Web Design \| Open Waves Design | Local SEO: city/region in the title (owner-approved wording) |
| Home eyebrow | Web Design for Small Businesses | Web design for Greater Philadelphia small businesses | Local positioning |
| Home subhead | I create beautiful, strategic websites for solopreneurs and small business owners | …for local small businesses and solopreneurs. Sites that get you found, build trust, and turn visitors into customers. | Local, plus a clear outcome |
| Home trust line | (none) | 5.0 on Google · 20 years building websites | Social proof (your Google listing currently shows 5.0 from 2 reviews) |
| "Your website might be the reason…" | clients | customers | Local businesses often have customers, not clients |
| Built to Be Found | …so you show up when your ideal clients are searching | …so you show up when customers nearby search for what you do | Local |
| Built for your business | I specialize in websites for solopreneurs because I am one. | Local small businesses are my specialty, because I run one too. + a short paragraph | Local positioning; keeps your line |
| Contact page | "Contact Us… We're here to help" (we) | "Let's talk about your website." (I) | The rest of the site speaks as "I"; this makes it consistent |
| About | Bio as on home page | Same bio + one sentence about now focusing on local businesses in Greater Philadelphia, plus "I'm based in Lansdale, PA, and I also work with clients remotely." | Local (Lansdale and remote work confirmed by owner) |
| Audit page H1 | Get Your Free Website Audit | Find out what your website is really doing for you. | More benefit-led; the button still says "free site audit" |

## New copy that needs your OK

- ✅ **Service areas (confirmed by owner):** Philadelphia, Montgomery County, Bucks County, Delaware County and Chester County, PA. Short form: "Greater Philadelphia".
- ✅ **Based in Lansdale, PA; also works with clients remotely (confirmed by owner).** Shown on the About and Contact pages.
- ✅ **Footer (confirmed by owner):** "Websites for solopreneurs and small businesses in Greater Philadelphia and beyond."
- ⚠️ **"I work with service businesses and makers across Greater Philadelphia, and with clients across the country. You get one person who knows your business and picks up when you call."**
- ⚠️ **Contact page:** "I'll get back to you within one business day" (now under "Prefer to write?", below the scheduler).
- ⚠️ **About values:** "One point of contact", "Plain English", "Small by design" (drawn from your bio).
- ⚠️ **Services page "Every project includes" list:** written from your package bullets and process steps. Check that "Booking & contact" and "Training walkthrough" describe what you actually include.
- ⚠️ **Contact page intro:** "Book a free 15-minute discovery call. Pick a time below and I'll call you." (matches your Calendly event: 15 min, phone).
- ⚠️ **Removed "Happy to meet in person locally or by video call."** Discovery calls are phone only now, so the contact page now says "Based in Lansdale, PA. Serving Greater Philadelphia and clients remotely." Add the in-person line back if you still offer local meetings for projects.
- ⚠️ **Pricing card buttons** now say "Book a free call" (was "Get started") and open your Calendly scheduler in a pop-up.
- ⚠️ **"Most popular" badge** on the Standard package. Remove it if that isn't true.

## Google Ads landing pages (/lp/website-audit/, /lp/audit-thanks/)

Copy was supplied by you and kept as written. These items need a decision before ads go live:

- ⚠️ **FAQ "Do you only work locally?":** "I'm based in Lansdale and love working with Montgomery County businesses…" The rest of the site now says Greater Philadelphia. Change to match?
- ⚠️ **Hero eyebrow:** "Web design for solopreneurs · Philadelphia area". The rest of the site says "Greater Philadelphia".
- ⚠️ **Footer:** "Open Waves Design, LLC". "LLC" isn't stated anywhere else on the site. Confirm the legal name.
- ⚠️ **Portfolio captions:** "Simplify Your Space, Professional organizer" and "Jo's Desserts, Custom cookie baker". Neither client is named elsewhere on the site, and the site's client list says "Home bakers". Confirm both, and that you have permission to show them.
- ⚠️ **Thank-you page button:** "View case studies" links to /case-studies/, which doesn't exist (404).
- OK: the testimonial now renders from `src/config/content.ts`, so it stays identical to the main site. "$3,000 for up to 4 pages", "24–48 hours", "a limited number of sites each month" and "No surprise invoices" all match existing site copy.

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
