/** Central contact and meta copy */
export const site = {
  name: 'DigitalSolutions',
  email: 'teamworkwithshahid@gmail.com',
  hero: {
    headline: 'We build digital products that help businesses grow faster',
    subheadline:
      'DigitalSolutions partners with startups and enterprises to design, build, and scale web and mobile platforms. Product engineering, cloud integrations, automation, analytics, and AI-assisted delivery with secure, review-ready workflows.',
    photoAlt: 'DigitalSolutions team visual',
    /** Short labels for the hero visual — stacked cards */
    stackCards: ['Web & Mobile Apps', 'Cloud & Automation', 'AI-assisted delivery'] as const,
    /** One-line proof points under the subhead */
    stats: [
      'End-to-end product delivery',
      'Web, mobile, cloud, and data',
      'Reliable launches and long-term support',
    ] as const,
    /** Companies / products — trust chips (subset of full TrustBar) */
    trustChips: [
      'Product teams and founders',
      'SMBs and enterprise units',
      'Cloud-native delivery',
      'Cross-functional execution',
    ] as const,
  },
  about:
    'DigitalSolutions is a product engineering partner focused on turning business goals into reliable digital platforms. We deliver full-cycle execution: discovery, architecture, design collaboration, development, QA, launch, and continuous optimization. Our team works across web, mobile, APIs, cloud services, analytics, and AI-assisted workflows to ship high-impact solutions with clear ownership and measurable outcomes.',
  nextProject: {
    title: 'Ready to build your next digital solution',
    subtext:
      'From product idea to production launch, we help you move faster with confidence.',
    cta: 'Book a Discovery Call',
  },
  contact: {
    heading:
      'Have a product idea or business challenge? Reach out and our team will respond quickly.',
  },
  /** Full URL (https://…) or a PDF under `public/`, e.g. `resume.pdf` */
  resume: {
    href: '',
    label: '',
  },
} as const
