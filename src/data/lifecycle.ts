import type { LucideIcon } from 'lucide-react'
import {
  ClipboardList,
  Code2,
  Lightbulb,
  Rocket,
  TestTube,
  TrendingUp,
} from 'lucide-react'

export type LifecycleStep = {
  Icon: LucideIcon
  title: string
  description: string
}

export const lifecycleSteps: LifecycleStep[] = [
  {
    Icon: Lightbulb,
    title: 'Idea',
    description: 'Align business goals, user needs, and success metrics before development starts.',
  },
  {
    Icon: ClipboardList,
    title: 'Planning',
    description: 'Define architecture, integrations, scope, and milestones around your roadmap.',
  },
  {
    Icon: Code2,
    title: 'Development',
    description: 'Build reliable features with maintainable code and delivery transparency.',
  },
  {
    Icon: TestTube,
    title: 'Testing',
    description: 'Validate business-critical flows, edge cases, security, and performance.',
  },
  {
    Icon: Rocket,
    title: 'Launch',
    description: 'Launch confidently with production monitoring, alerting, and support readiness.',
  },
  {
    Icon: TrendingUp,
    title: 'Scale',
    description: 'Optimize with analytics, automation, and continuous improvement for growth.',
  },
]
