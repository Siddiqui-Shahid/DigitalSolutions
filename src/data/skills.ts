/** Grouped technical skills for the portfolio */

export type SkillCategory = {
  title: string
  items: readonly string[]
}

export const aiDevelopmentIntro =
  'AI-assisted delivery: We use modern AI tooling to speed up implementation and reviews while keeping architecture, security, and production decisions human-led.'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming languages',
    items: ['TypeScript', 'JavaScript', 'Python'],
  },
  {
    title: 'Libraries & frameworks',
    items: [
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'REST API integration',
      'GraphQL',
      'Mobile app development',
      'Cloud integration',
      'Automation workflows',
      'Analytics and observability',
      'CMS and content management',
      'Secure AI-assisted engineering',
    ],
  },
  {
    title: 'Tools & platforms',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Docker',
      'AWS',
      'Firebase',
      'PostgreSQL',
      'CI/CD pipelines',
      'Cursor',
      'Claude',
      'Gemini',
      'GitHub Copilot',
    ],
  },
] as const
