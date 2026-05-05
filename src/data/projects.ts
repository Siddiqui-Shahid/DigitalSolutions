export type Project = {
  title: string
  tech: string[]
  bullets: string[]
  impact?: string
  /** App Store or external product link */
  href?: string
  linkLabel?: string
  imageSrc?: string
}

export const projects: Project[] = [
  {
    title: 'Ecommerce Modernization Platform',
    tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Cloud APIs'],
    bullets: [
      'Rebuilt the storefront architecture for faster performance and improved conversion-critical user flows.',
      'Integrated payments, fulfillment, and inventory systems across multiple backend services.',
      'Implemented analytics dashboards for funnel visibility and real-time campaign measurement.',
      'Reduced checkout friction through UX optimization and resilient API fallback handling.',
    ],
    impact:
      'Increased conversion and reliability while enabling faster feature rollout for growth teams.',
    linkLabel: 'Case Study',
    href: 'https://example.com',
  },
  {
    title: 'Operations Automation Suite',
    tech: ['Python', 'Django', 'REST APIs', 'AWS', 'Workflow Automation'],
    bullets: [
      'Built a centralized operations panel to automate repetitive business tasks across departments.',
      'Connected CRM, billing, notifications, and reporting modules with event-driven integrations.',
      'Added role-based permissions, audit logs, and approvals for enterprise-grade process control.',
      'Automated SLA alerts and exception handling to minimize manual intervention.',
      'Delivered deployment playbooks and support workflows for stable production operations.',
    ],
    impact:
      'Cut operational overhead and improved process turnaround with consistent platform reliability.',
    linkLabel: 'Case Study',
    href: 'https://example.com',
  },
  {
    title: 'Customer Engagement Mobile App',
    tech: ['Flutter', 'Firebase', 'Push Notifications', 'Analytics', 'CMS'],
    bullets: [
      'Designed and launched a cross-platform app for customer communication and self-service.',
      'Built personalized content modules powered by user segmentation and behavior data.',
      'Integrated analytics and campaign automation to support retention and re-engagement.',
      'Implemented secure authentication and robust offline-first behavior for field users.',
      'Delivered scalable release workflows for frequent feature and content updates.',
      'Improved app responsiveness with targeted performance optimization and caching strategies.',
    ],
    linkLabel: 'Case Study',
    href: 'https://example.com',
  },
  {
    title: 'Business Intelligence Dashboard',
    tech: ['Next.js', 'TypeScript', 'Data Pipelines', 'Visualization', 'RBAC'],
    bullets: [
      'Built executive dashboards combining data from sales, support, and marketing systems.',
      'Implemented role-based access controls and tenant-aware reporting architecture.',
      'Added near real-time ingestion pipelines with validation and error observability.',
      'Created KPI drill-down experiences for faster decision-making by leadership teams.',
      'Improved frontend responsiveness with modular components and progressive loading.',
      'Partnered with analysts and stakeholders to align reports with business outcomes.',
    ],
    linkLabel: 'Case Study',
    href: 'https://example.com',
  },
  {
    title: 'AI Support Assistant Integration',
    tech: ['LLM APIs', 'Knowledge Base', 'Node.js', 'Security Controls'],
    bullets: [
      'Integrated an AI assistant into customer support workflows for faster first responses.',
      'Connected internal knowledge bases to improve answer quality and consistency.',
    ],
    linkLabel: 'Case Study',
    href: 'https://example.com',
  },
  {
    title: 'Legacy System Upgrade Program',
    tech: ['API Refactoring', 'Cloud Migration', 'Monitoring', 'DevOps'],
    bullets: [
      'Migrated core services from legacy infrastructure to modern cloud-native architecture.',
      'Introduced monitoring, alerting, and deployment automation for higher release confidence.',
    ],
    linkLabel: 'Case Study',
    href: 'https://example.com',
  },
]
