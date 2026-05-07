import type { LucideIcon } from 'lucide-react'
import { Gauge, Layers, Rocket, Smartphone, Sparkles } from 'lucide-react'

export type Service = {
  title: string
  description: string
  Icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Positioning and Offer Clarity',
    description:
      'Define a specific, results-focused message so prospects quickly understand who you help, what you solve, and why you are different.',
    Icon: Smartphone,
  },
  {
    title: 'Proof-Driven Funnel Build',
    description:
      'Implement lean, high-converting funnel pages designed to turn cold traffic into qualified booked calls.',
    Icon: Layers,
  },
  {
    title: 'Direct-Response Ad Systems',
    description:
      'Create short, direct ad frameworks with stronger proof and cleaner calls to action for better front-end conversion.',
    Icon: Rocket,
  },
  {
    title: 'AI Follow-Up Automation',
    description:
      'Set up automated lead nurture and reactivation flows so prospects who do not book immediately are still converted.',
    Icon: Gauge,
  },
  {
    title: 'Implementation and Optimization',
    description:
      'Launch fast, monitor the full funnel, and continuously improve messaging, booking rates, and show-up quality.',
    Icon: Sparkles,
  },
]
