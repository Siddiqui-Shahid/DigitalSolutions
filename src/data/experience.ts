export type Role = {
  company: string
  title: string
  period: string
  location: string
  highlights: string[]
}

/** Reverse chronological. */
export const experience: Role[] = [
  {
    company: 'DigitalSolutions',
    title: 'Product Engineering Partner',
    period: '2023 – Present',
    location: 'Remote / India',
    highlights: [
      'Deliver full-cycle product execution from discovery and architecture to launch and post-release optimization.',
      'Build web, mobile, and integration-heavy platforms for startups, SMBs, and enterprise teams.',
      'Own project delivery with clear milestones, transparent communication, and measurable business impact.',
      'Use AI-assisted engineering workflows to accelerate delivery while maintaining quality and security standards.',
    ],
  },
  {
    company: 'Client Delivery Practice',
    title: 'Senior Software Engineer',
    period: '2021 – 2023',
    location: 'Mumbai',
    highlights: [
      'Led development of custom business applications and modernization projects across domains.',
      'Implemented performance improvements, observability, and resilient release workflows.',
      'Coordinated cross-functional teams across design, QA, and backend to ensure reliable launches.',
    ],
  },
  {
    company: 'Technology Consulting',
    title: 'Software Engineer',
    period: '2019 – 2021',
    location: 'Mumbai',
    highlights: [
      'Delivered enterprise-grade solutions across mobile, web, and backend systems.',
      'Built reusable components and service modules to speed up delivery across multiple client projects.',
      'Supported ongoing maintenance, feature scaling, and integration of third-party platforms.',
      'Contributed to successful production releases with strong quality and support ownership.',
      'Established a reputation for dependable execution under tight timelines.',
      'Helped improve engineering standards through documentation and collaborative code reviews.',
    ],
  },
]
