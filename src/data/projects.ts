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
    title: 'BookMyShow',
    tech: ['Swift', 'SwiftUI', 'UIKit', 'MVVM', 'Backend-driven UI'],
    bullets: [
      'Delivered high-visibility conversion surfaces with end-to-end ownership and stable release execution.',
      'Refactored revenue-critical modules for faster load time, stronger resilience, and cleaner extensibility.',
      'Implemented configurable backend-driven UI patterns for faster experimentation and rollout.',
      'Improved analytics integrity and reduced user drop-off through cross-team integration fixes.',
    ],
    impact:
      'Strengthened monetization reliability while enabling faster iteration on key acquisition and retention flows.',
    linkLabel: 'App Store',
    href: 'https://apps.apple.com/in/app/bookmyshow-movie-tickets/id405894842',
  },
  {
    title: 'District by Zomato',
    tech: ['Swift', 'SwiftUI', 'iOS'],
    bullets: [
      'Shipped discovery and booking improvements for high-intent marketplace journeys.',
      'Built event-triggered actions based on visibility conditions to improve engagement performance.',
      'Launched booking lifecycle flows including rescheduling and cancellation support.',
      'Handled production ownership during critical releases to maintain service quality.',
      'Used AI-assisted engineering workflows to speed up delivery without compromising stability.',
    ],
    impact:
      'Improved reliability for core booking experiences under high traffic and release pressure.',
    linkLabel: 'App Store',
    href: 'https://apps.apple.com/in/app/district-movies-events-dining/id6670536058',
  },
  {
    title: 'Memphis Grizzlies iOS App',
    tech: ['SwiftUI', 'Deeplinks', 'UIKit', 'REST API', 'Mixpanel', 'SDK', 'Firebase', 'Airship'],
    bullets: [
      'Owned end-to-end delivery across multiple fan-critical modules and release cycles.',
      'Built dynamic personalization architecture to adapt content by user context.',
      'Improved engagement through deep linking and targeted interaction design improvements.',
      'Integrated analytics and notification systems for measurable campaign optimization.',
      'Implemented robust API and caching layers for stable real-time experiences.',
      'Optimized memory and runtime behavior for smoother performance at scale.',
    ],
    linkLabel: 'App Store',
    href: 'https://apps.apple.com/us/app/memphis-grizzlies/id787339433',
  },
  {
    title: 'Miami HEAT iOS App',
    tech: ['SwiftUI', 'DeepLinks', 'Live Updates', 'SDK', 'UIKit', 'MVVM', 'XCFramework'],
    bullets: [
      'Integrated partner SDK infrastructure for venue and event utility experiences.',
      'Built real-time engagement modules with automated logic for contest flows.',
      'Managed live scoreboard data pipelines with historical accuracy and consistency.',
      'Improved delivery speed and maintainability through modular frontend patterns.',
      'Raised app responsiveness across key fan-facing journeys during live events.',
      'Closed high-risk release issues with QA and backend collaboration before launch.',
    ],
    linkLabel: 'App Store',
    href: 'https://apps.apple.com/us/app/miami-heat-mobile/id497407923',
  },
  {
    title: 'Las Vegas Aces iOS App',
    tech: ['UIKit', 'DeepLinks', 'Live Updates', 'SDK'],
    bullets: [
      'Integrated audio streaming and core content features for stronger in-app retention.',
      'Improved launch sequence reliability by modernizing startup data and initialization.',
    ],
    linkLabel: 'App Store',
    href: 'https://apps.apple.com/us/app/las-vegas-aces-app/id6448954083',
  },
  {
    title: 'Chicago Sky iOS App',
    tech: ['UIKit', 'Ticketmaster', 'REST API', 'SDKs'],
    bullets: [
      'Migrated the app to a modern toolchain to improve long-term maintainability.',
      'Preserved production stability by coordinating SDK upgrades and dependency compatibility.',
    ],
    linkLabel: 'App Store',
    href: 'https://apps.apple.com/us/app/chicago-sky-mobile/id1225686717',
  },
]
