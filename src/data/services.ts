import type { LucideIcon } from 'lucide-react'
import { Gauge, Layers, Rocket, Smartphone, Sparkles } from 'lucide-react'

export type Service = {
  title: string
  description: string
  Icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Product Engineering',
    description:
      'End-to-end web and mobile product development with scalable architecture and clean delivery workflows.',
    Icon: Smartphone,
  },
  {
    title: 'Web and Mobile Development',
    description:
      'Build high-performance platforms across iOS, Android, and modern web stacks with consistent user experience.',
    Icon: Layers,
  },
  {
    title: 'MVP and Rapid Delivery',
    description:
      'Turn ideas into launch-ready products quickly, then iterate based on real user and market feedback.',
    Icon: Rocket,
  },
  {
    title: 'Cloud and Integration Services',
    description:
      'Connect APIs, third-party systems, and cloud infrastructure to create reliable, scalable business workflows.',
    Icon: Gauge,
  },
  {
    title: 'AI and Automation Solutions',
    description:
      'Apply practical AI automation to reduce manual effort, improve turnaround time, and support better decisions.',
    Icon: Sparkles,
  },
]
