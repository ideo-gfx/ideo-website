/* Site copy and data. Items marked PLACEHOLDER were not in the Figma design
   (or were duplicated placeholders there) and need real content. */

const a = (file) => `/assets/${file}`;

export const EMAIL = 'info@ideogfx.com';
export const PHONE = '+91 892 170 0822';
export const PHONE_HREF = 'tel:+918921700822';
export const ADDRESS =
  '5H1, BCG Residency Towers, Opp. CSEZ, Seaport-Airport Road, Kakkanad, Kochi, Kerala 682 037';

export const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Service', href: '#services', hasMenu: true },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#team' },
];

export const CLIENT_LOGOS = [
  { name: 'Sofort', src: a('logo-sofort.svg') },
  { name: 'Apple Pay', src: a('logo-applepay.svg') },
  { name: 'Mastercard', src: a('logo-mastercard.svg'), inset: '20.96% 18.51% 23.21% 17.24%' },
  { name: 'Visa', src: a('logo-visa.svg') },
  { name: 'Amazon', src: a('logo-amazon.svg'), inset: '37.5% 12.07% 26.6% 9.77%' },
  { name: 'Affirm', src: a('logo-affirm.svg'), inset: '25% 13.79% 31.77% 11.49%' },
  { name: 'Paysafe', src: a('logo-paysafe.svg'), inset: '31.21% 13.79% 23.59% 11.49%' },
  { name: 'Klarna', src: a('logo-klarna.svg') },
  { name: 'Google Pay', gpay: true },
  { name: 'Stripe', src: a('logo-stripe.svg') },
  { name: 'Elo', src: a('logo-elo.svg'), inset: '30.7% 13.79% 29.46% 11.49%' },
  { name: 'Payoneer', src: a('logo-payoneer.svg'), inset: '30.64% 13.79% 31.13% 11.49%' },
];

export const MARQUEE_SERVICES = [
  'UI/UX DESIGN', 'BRANDING STRATEGY', 'DIGITAL MARKETING', 'UX RESEARCH',
  'CONTENT MARKETING', 'ANIMATION DESIGN', 'SOCIAL MEDIA MANAGEMENT', 'WEB DEVELOPMENT',
  'VISUAL IDENTITY', 'RESPONSIVE DESIGN', 'LOGO CREATION', '3D MODELING',
  'INTERFACE DESIGN', 'VIDEO PRODUCTION', 'MOTION DESIGN',
];

/* DESIGN copy is from Figma; BUILD / BRANDING / MARKETING copy is PLACEHOLDER. */
export const SERVICE_CATEGORIES = [
  {
    id: 'design',
    label: 'DESIGN',
    services: [
      { name: 'Web Design', description: 'Thoughtful websites, designed around your audience and made to turn visits into meaningful action.' },
      { name: 'Branding', description: 'A distinctive visual language that brings your story to life and keeps every touchpoint consistent.' },
    ],
  },
  {
    id: 'build',
    label: 'BUILD',
    services: [
      { name: 'Web Development', description: 'Fast, accessible, responsive builds that stay true to the design and are easy for your team to update.' },
      { name: 'CMS & E-commerce', description: 'Content and commerce platforms set up so you can publish, sell and grow without waiting on developers.' },
    ],
  },
  {
    id: 'branding',
    label: 'BRANDING',
    services: [
      { name: 'Visual Identity', description: 'Logo, colour, type and imagery shaped into one coherent system your audience recognises instantly.' },
      { name: 'Logo Creation', description: 'A mark built from your story, tested at every size and ready for every surface it will live on.' },
    ],
  },
  {
    id: 'marketing',
    label: 'MARKETING',
    services: [
      { name: 'Digital Marketing', description: 'Campaigns and landing pages designed to reach the right people and turn attention into results.' },
      { name: 'Social Media', description: 'Consistent, on-brand content and motion that keeps your audience engaged across every channel.' },
    ],
  },
];

export const PROJECTS = [
  { title: 'SMITH & CRAFT', tags: 'WEB DESIGN · UI/UX · INTERIORS', img: a('work-smithcraft.png'), w: 832, ratio: '832 / 576', col: 'left' },
  { title: 'TRIPFINITY', tags: 'WEB DESIGN · UI/UX · TRIP BOOKING', img: a('work-tripfinity.png'), w: 491, ratio: '491 / 508', col: 'right', bg: '#f5f5f5', fit: 'contain' },
  { title: 'DEFAB', tags: 'WEB DESIGN · UI/UX · ECOMMERCE', img: a('work-defab.png'), w: 491, ratio: '491 / 508', col: 'left', bg: '#f5f5f5' },
  { title: 'TGSCO', tags: 'WEB DESIGN · UI/UX · ECOMMERCE', img: a('work-tgsco.png'), w: 650, ratio: '650 / 508', col: 'right' },
  { title: 'GOLDEN CREST', tags: 'WEB DESIGN · UI/UX · HOTEL BOOKING', img: a('work-goldencrest.png'), w: 650, ratio: '650 / 508', col: 'left', bg: '#dabe83', inset: true },
  { title: 'WEARTUAL REALITY', tags: 'WEB DESIGN · UI/UX · INTERACTIVE KIOSK', img: a('work-weartual.png'), w: 400, ratio: '400 / 440', col: 'right', bg: '#262626' },
  { title: 'CASATALE', tags: 'WEB DESIGN · UI/UX · CMS PLATFORM', img: a('work-casatale.png'), w: 837, ratio: '837 / 440', col: 'left', bg: '#dabe83' },
];

/* PLACEHOLDER: the Figma design repeats one review five times. */
const REVIEW =
  'We are extremely satisfied with the collaboration with Joel. He developed both the website and a complete catering platform for us, The Sandwich Bar. From the very...';
export const TESTIMONIALS = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  review: REVIEW,
  name: 'Julia Alting Siberg',
  initial: 'J',
  date: 'a month ago',
}));

export const PROCESS_STEPS = [
  { title: 'Discovery & Research', text: 'We understand your goals, users, product context, and project requirements.', rotate: -4, offset: 2 },
  { title: 'Define & Structure', text: 'We organise content and features, map user journeys, and establish the experience direction.', rotate: 2, offset: 20, highlight: true },
  { title: 'Wireframe & Prototype', text: 'We plan screen layouts and build interactive flows to explore how the product will work.', rotate: -2, offset: 20 },
  { title: 'Visual Design', text: 'We develop the interface using a consistent visual language and responsive design principles.', rotate: 5, offset: 0 },
  { title: 'Review, Refine & Handoff', text: 'We gather feedback, refine the design, and prepare assets and specifications for the development team.', rotate: -2, offset: 7 },
];

export const PRICING = [
  {
    label: 'Starter',
    price: '$2,000',
    tone: 'var(--pink-100)',
    features: ['1 request at a time', '3-day delivery', 'Unlimited revisions', 'Brand and content'],
  },
  {
    label: 'Most chosen · Studio',
    price: '$3,500',
    tone: 'var(--pink-200)',
    features: ['2 requests at a time', 'Motion and 3D', 'Web design', 'Priority queue'],
    meter: 42,
    note: 'Add a one-off project from $10,000',
  },
];

/* PLACEHOLDER: both Figma team cards use the same name and role. */
export const TEAM = [
  { name: 'GURUPRAKASH', role: 'Founder · Design lead', img: a('team-1.png') },
  { name: 'GURUPRAKASH', role: 'Founder · Design lead', img: a('team-2.png'), position: 'center 20%' },
];

/* PLACEHOLDER: social profile URLs are not in the design. */
export const FOOTER_PAGES = [
  { label: 'Home', href: '#top' },
  { label: 'About us', href: '#team' },
  { label: 'Services', href: '#services' },
  { label: 'Our Works', href: '#work' },
  { label: 'Contact us', href: '#contact' },
];
export const FOOTER_SOCIAL = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
];

export const ASSETS = {
  logo: a('logo-white.png'),
  chevron: a('chevron-down.svg'),
  divider: a('divider-line.svg'),
  gpayPay: a('logo-gpay-pay.svg'),
  gpayG: a('logo-gpay-g.svg'),
  hero: a('hero.png'),
  plus: a('icon-plus.svg'),
  moveRight: a('icon-move-right.svg'),
  services: a('services.png'),
  feature: a('feature.png'),
  showreel: a('showreel.png'),
  stars: a('five-stars.svg'),
  google: a('google.svg'),
  arrowLeft: a('arrow-left.svg'),
  arrowRight: a('arrow-right.svg'),
  teamGlow: a('team-glow.svg'),
  footerArt: a('footer-art.png'),
};
