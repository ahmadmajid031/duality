export const tagColors = {
  Design: 'bg-[rgba(127,86,217,0.16)] text-[rgb(177,151,242)]',
  Research: 'bg-[rgba(67,97,238,0.18)] text-[rgb(150,170,250)]',
  Onboarding: 'bg-[rgba(219,39,119,0.18)] text-[rgb(244,151,196)]',
  'Design Systems': 'bg-[rgba(124,58,237,0.18)] text-[rgb(196,168,250)]',
  Engineering: 'bg-[rgba(2,132,199,0.18)] text-[rgb(146,206,250)]',
  Product: 'bg-[rgba(5,150,105,0.18)] text-[rgb(134,224,189)]',
}

const lumenParagraphs = [
  [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lumen new users were stalling out before they ever reached the product’s core value, and the activation team had no clear read on where the drop-off was happening. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Support tickets were piling up faster than the team could triage them, and every proposed fix was a guess rather than something grounded in real user behavior.',
  ],
  [
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. We ran moderated usability sessions with twelve active and lapsed users, then mapped every drop-off point against session-replay data to find the real pattern underneath the noise.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The first-run flow was rebuilt around a single guided setup step instead of five disconnected ones, and every change was validated with a follow-up round of testing before a single line of production code shipped.',
  ],
  [
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. With the new flow in front of real users again, the team watched completion rates climb steadily across every channel rather than in one isolated test group.',
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Within six weeks of launch, onboarding completion was up across every signup channel, and support volume for setup-related tickets dropped by more than half.',
  ],
  [
    'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. The team now treats activation as a living surface, revisiting it every quarter instead of once a year.',
  ],
]

const northwindParagraphs = [
  [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Three product teams at Northwind had each built their own component library, and the result was visual drift across the product and weeks of avoidable QA on every release.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Designers were re-solving the same button and form patterns three different ways, and nobody could say with confidence which version was current.',
  ],
  [
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident. We audited every component in use across the three teams, consolidated overlapping patterns, and built a single Figma-to-code system with shared tokens for color, spacing, and type.',
    'Sunt in culpa qui officia deserunt mollit anim id est laborum. Migration happened incrementally, screen by screen, so no team had to pause feature work to adopt it.',
  ],
  [
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis. Every new component shipped with documentation, usage guidance, and accessibility notes baked in from day one.',
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Engineers stopped asking which button to use and started just using the one that already existed.',
  ],
  [
    'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    'Northwind now ships new features in roughly half the time it used to take to reconcile three different UI kits, and design QA bugs have dropped to nearly zero across every team that adopted the system.',
  ],
]

export const useCases = [
  {
    slug: 'lumen-onboarding-redesign',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=750&fit=crop&auto=format&q=80',
    author: 'Olivia Rhye',
    date: '20 Jan 2025',
    client: 'Lumen',
    title: "Cutting Lumen's onboarding drop-off by 38%",
    description:
      "A full UX research and redesign engagement that turned a confusing first-run flow into one of Lumen's highest-converting funnels.",
    tags: ['Design', 'Research', 'Onboarding'],
    blocks: [
      { type: 'text', heading: 'The challenge', paragraphs: lumenParagraphs[0] },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&h=875&fit=crop&auto=format&q=80',
      },
      { type: 'text', heading: 'Our approach', paragraphs: lumenParagraphs[1] },
      {
        type: 'image-grid',
        images: [
          'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=900&h=650&fit=crop&auto=format&q=80',
          'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&h=650&fit=crop&auto=format&q=80',
        ],
      },
      { type: 'text', heading: 'The result', paragraphs: lumenParagraphs[2] },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=875&fit=crop&auto=format&q=80',
      },
      { type: 'text', heading: "What's next", paragraphs: lumenParagraphs[3] },
      {
        type: 'image-grid',
        images: [
          'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=900&h=650&fit=crop&auto=format&q=80',
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&h=650&fit=crop&auto=format&q=80',
        ],
      },
    ],
  },
  {
    slug: 'northwind-design-system',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=750&fit=crop&auto=format&q=80',
    author: 'Phoenix Baker',
    date: '15 Feb 2025',
    client: 'Northwind',
    title: 'Migrating Northwind to a unified design system',
    description:
      'We replaced three inconsistent UI libraries with one shared system—shipping twice as fast with half the QA overhead.',
    tags: ['Design Systems', 'Engineering', 'Product'],
    blocks: [
      { type: 'text', heading: 'The challenge', paragraphs: northwindParagraphs[0] },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&h=875&fit=crop&auto=format&q=80',
      },
      { type: 'text', heading: 'Our approach', paragraphs: northwindParagraphs[1] },
      {
        type: 'image-grid',
        images: [
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=650&fit=crop&auto=format&q=80',
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=650&fit=crop&auto=format&q=80',
        ],
      },
      { type: 'text', heading: 'What we tested', paragraphs: northwindParagraphs[2] },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1400&h=875&fit=crop&auto=format&q=80',
      },
      { type: 'text', heading: 'The result', paragraphs: northwindParagraphs[3] },
      {
        type: 'image-grid',
        images: [
          'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=900&h=650&fit=crop&auto=format&q=80',
          'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&h=650&fit=crop&auto=format&q=80',
        ],
      },
    ],
  },
]

export function getUseCaseBySlug(slug) {
  return useCases.find((useCase) => useCase.slug === slug)
}
