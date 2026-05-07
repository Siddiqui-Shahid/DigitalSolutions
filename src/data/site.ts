/** Central contact and meta copy */
export const site = {
  name: 'DigitalSolutions',
  email: 'teamworkwithshahid@gmail.com',
  hero: {
    headline: 'We build AI-powered client acquisition systems for service businesses',
    subheadline:
      'DigitalSolutions helps agencies and growth-focused teams land more qualified calls with better positioning, proof-driven ads, a simple 3-page funnel, and automated AI follow-up that recovers missed leads.',
    photoAlt: 'DigitalSolutions team visual',
    /** Short labels for the hero visual — stacked cards */
    stackCards: ['Clear positioning', '3-page funnel', 'AI follow-up automation'] as const,
    /** One-line proof points under the subhead */
    stats: [
      'Short, proof-heavy messaging',
      'Funnels designed for booked calls',
      'Follow-up that prevents revenue leaks',
    ] as const,
    /** Companies / products — trust chips (subset of full TrustBar) */
    trustChips: [
      'Agencies and service teams',
      'Cold traffic to qualified calls',
      'Automation-first delivery',
      'Built for fast implementation',
    ] as const,
  },
  about:
    'DigitalSolutions is a software and automation partner focused on one business outcome: helping you consistently generate and convert quality leads. We implement clear market positioning, direct-response funnel pages, and AI-assisted follow-up systems that keep opportunities moving. From strategy to engineering and optimization, we build practical systems that are measurable, scalable, and easy for your team to operate.',
  nextProject: {
    title: 'Ready to build your client acquisition system',
    subtext:
      'If your ads, funnel, or follow-up are leaking revenue, we can rebuild the system end-to-end.',
    cta: 'Book Strategy Call',
  },
  contact: {
    heading:
      'Tell us your niche, offer, and current funnel. We will map the fastest path to more booked calls.',
  },
  /** Full URL (https://…) or a PDF under `public/`, e.g. `resume.pdf` */
  resume: {
    href: '',
    label: '',
  },
} as const
