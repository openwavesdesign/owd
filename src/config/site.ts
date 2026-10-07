// Central place for business details. Edit here, not in individual pages.

export const site = {
  name: 'Open Waves Design',
  url: 'https://openwavesdesign.com',
  owner: 'Craig Allen',
  phone: '267-328-5079',
  email: 'craig@openwavesdesign.com',
  region: 'Greater Philadelphia',
  areas: ['Philadelphia', 'Montgomery County', 'Bucks County', 'Chester County', 'Delaware County'],
  googleReviewsUrl: 'https://maps.google.com/?cid=17575922742765262274',
  description:
    'Web design for small businesses in Greater Philadelphia. Beautiful, strategic websites that help local businesses get found and booked. Free video site audit.',

  // Optional assets. Drop the files into /public/images and set the paths.
  // Leave as null to use the built-in text wordmark / monogram.
  logo: null as string | null, // e.g. '/images/logo.svg'
  headshot: null as string | null, // e.g. '/images/craig-allen.jpg'

  // Google Analytics 4 measurement ID (e.g. 'G-XXXXXXX'). Leave empty to disable.
  gaId: '',

  hubspot: {
    portalId: '242375212',
    region: 'na2',
    contactFormId: '0eb6a393-9431-4872-a334-42336221d6af',
    // Create a "Free Website Audit" form in HubSpot and paste its ID here.
    // Until then the audit page uses the contact form.
    auditFormId: '',
  },
};

export const nav = [
  { href: '/services/', label: 'Services & Pricing' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
