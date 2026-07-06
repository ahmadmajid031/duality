import notionThumbnail from '../assets/Notion Case Study.jpg'
import hockeystackThumbnail from '../assets/Hockeystack Case Study.jpg'

export const tagColors = {
  Design: 'bg-[rgba(127,86,217,0.16)] text-[rgb(177,151,242)]',
  Research: 'bg-[rgba(67,97,238,0.18)] text-[rgb(150,170,250)]',
  Onboarding: 'bg-[rgba(219,39,119,0.18)] text-[rgb(244,151,196)]',
  'Design Systems': 'bg-[rgba(124,58,237,0.18)] text-[rgb(196,168,250)]',
  Engineering: 'bg-[rgba(2,132,199,0.18)] text-[rgb(146,206,250)]',
  Product: 'bg-[rgba(5,150,105,0.18)] text-[rgb(134,224,189)]',
  'Product Design': 'bg-[rgba(127,86,217,0.16)] text-[rgb(177,151,242)]',
  'UX Research': 'bg-[rgba(67,97,238,0.18)] text-[rgb(150,170,250)]',
  AI: 'bg-[rgba(6,182,212,0.18)] text-[rgb(103,232,249)]',
  Analytics: 'bg-[rgba(5,150,105,0.18)] text-[rgb(134,224,189)]',
}

export const useCases = [
  {
    slug: 'notion-ai-ux-redesign',
    image: notionThumbnail,
    author: 'DualityUX',
    date: '18 Mar 2025',
    client: 'Notion',
    kicker: 'Embedded Product Designer · AI feature redesign, live surface · 3 months · Notion AI',
    title: 'Taking Notion AI from ignored to indispensable: 11% adoption to 4× deeper use',
    subtitle: "The AI wasn't broken. It just didn't behave like the AI people had already learned to trust — so we redesigned the container, not the model.",
    description:
      'How aligning an AI feature with the mental model users had already built elsewhere turned a 3.2 average into 12.3 — without touching the underlying model.',
    tags: ['Product Design', 'UX Research', 'AI'],
    blocks: [
      {
        type: 'stats',
        stats: [
          { value: '+60%', label: 'Total AI interactions after redesign' },
          { value: '3.2 → 12.3', label: 'Average interactions per user' },
          { value: '11%', label: 'Adoption at project start — the number that triggered the engagement' },
        ],
      },
      {
        type: 'tldr',
        text: "Notion bet a $10/month pricing tier on its AI feature; only 11% of users touched it, and those who did drifted off after three tries. Research showed users weren't rejecting the output — they were rejecting an interaction model that contradicted the one ChatGPT had just taught the entire market. We replaced the one-shot command dialog with a persistent conversational surface and streamed responses instead of delivering them instantly. Interactions rose 60%, and depth of use nearly quadrupled.",
      },
      {
        type: 'text',
        heading: 'The stakes',
        paragraphs: [
          "Notion had shipped AI as a new paid tier at $10 per month. This wasn't a feature experiment — it was a revenue bet, priced and public.",
          "Eleven percent of users touched it at all. The ones who did used it about 3.2 times on average, then drifted off. Nobody was rejecting it loudly — they were just skipping it. And quiet skipping is worse than loud rejection: there was no complaint to fix, just a paid tier that wasn't earning its price.",
          "The question on the table wasn't whether the output was any good. The output was fine. The question was: why does no one come back?",
        ],
      },
      {
        type: 'text',
        heading: 'The constraint',
        paragraphs: [
          "Three months. A feature that had already launched. I wasn't drawing on a blank page — I was redesigning a live surface that people were quietly walking past, without breaking it for the 11% who used it.",
        ],
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&h=875&fit=crop&auto=format&q=80',
      },
      {
        type: 'text',
        heading: 'The diagnosis',
        paragraphs: [
          "I started with surveys across 150 users, paired with interaction analytics. Two findings reframed the entire project.",
          "Around 95% of AI users at the time had learned AI through ChatGPT. It had just landed and, within weeks, defined what talking to an AI was supposed to feel like — you ask, it pauses, it answers one character at a time, like a person typing back. That became the default mental model for an entire category of users, fast.",
          "Almost nobody used AI in a single shot. Real use was iterative — people refined, corrected, asked again.",
          "Notion's AI contradicted both findings at once. You inserted an AI block, hit /, and a cramped dialog opened, optimized for a one-shot request that returned a finished text block. Functionally complete. Experientially, a different species from the thing everyone had just gotten used to — and actively hostile to iteration, the one thing AI use actually demands.",
          "The problem wasn't the model's output. It was the container and the choreography around it.",
        ],
      },
      {
        type: 'text',
        heading: 'Decision one: a conversation, not a command box',
        paragraphs: [
          "We replaced the ephemeral / dialog with a persistent conversational surface — somewhere a thread could actually accumulate. This matched both the grammar users imported from ChatGPT and the iterative way they demonstrably worked.",
          "The strategic call underneath it: when a category is being defined by someone else, you don't get to invent your own interaction grammar. You meet users where their expectations already sit, then differentiate on substance.",
        ],
      },
      {
        type: 'text',
        heading: 'Decision two: make the work visible, on purpose',
        paragraphs: [
          "The old behavior: you submit, the system thinks in silence, then the complete answer appears all at once. Sounds efficient. It wasn't — it was unsettling.",
          "There's a perception-of-labour problem hiding here. Import a thousand records and have it finish in a blink, and your first thought isn't 'how fast' — it's 'what broke?' Instant, complete output reads as suspicious, not impressive.",
          "So we did something that looks like adding friction: we streamed responses with a continuous typewriter animation instead of dropping them in whole. We weren't removing a feature — we were removing the instantaneity that was quietly eroding trust. The system needed to be seen doing work on the user's behalf.",
        ],
      },
      {
        type: 'image-grid',
        images: [
          'https://images.unsplash.com/photo-1552581234-26160f608093?w=900&h=650&fit=crop&auto=format&q=80',
          'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=900&h=650&fit=crop&auto=format&q=80',
        ],
      },
      {
        type: 'text',
        heading: 'The results',
        paragraphs: [
          "After the redesign, total AI interactions rose 60%. Average interactions per user climbed from 3.2 to 12.3 — not just more people trying it once, but people staying in it long enough to iterate, which was the whole point, and the behavior a subscription price depends on.",
          "Both findings were validated by the same instruments used in diagnosis — the survey panel and interaction analytics — so we were measuring the thing we set out to move, not a proxy.",
        ],
      },
      {
        type: 'text',
        heading: 'The principle',
        paragraphs: [
          "Conversion problems are trust problems. Users didn't skip Notion AI because the output was weak. They skipped it because two design choices — an unfamiliar interaction grammar and invisible, instant labour — made the system feel untrustworthy in ways nobody could articulate. The redesign added no capability. It restored trust, and usage followed.",
          "This is the lens we bring to every engagement: before assuming your feature needs more power, ask what's making users hesitate to rely on the power it already has.",
        ],
      },
      {
        type: 'cta',
        text: "Shipped an AI feature that users aren't adopting? That gap between \"it works\" and \"people use it\" is usually a design problem with a measurable fix.",
        links: [
          { label: 'See how a 21-day Sprint works', href: '/contact' },
          { label: 'Send us the feature — we\'ll take a first look for free', href: '/contact' },
        ],
      },
    ],
  },
  {
    slug: 'hockeystack-attribution-dashboard',
    image: hockeystackThumbnail,
    author: 'DualityUX',
    date: '12 May 2025',
    client: 'HockeyStack',
    kicker: 'HockeyStack · Attribution dashboard · Embedded product design',
    title: 'The information was right. The packaging wasn\'t.',
    description:
      'HockeyStack already gave marketers every touchpoint that led to a purchase. The problem wasn\'t the data. It was that nobody knew where to look.',
    tags: ['Product Design', 'UX Research', 'Analytics'],
    blocks: [
      {
        type: 'quote',
        text: "There is so much information on this page. I didn't know where to look. It was super useful — but quickly getting information was a task.",
      },
      {
        type: 'text',
        heading: 'Context',
        paragraphs: [
          'HockeyStack unifies analytics, attribution and reporting so a B2B marketer can trace every touch a buyer took before converting — LinkedIn ads, blog visits, webinar signups, sales calls — inside one product. Attribution is the wedge. Everything else exists to make it defensible.',
          'I joined as an embedded product designer to work on the attribution dashboard experience.',
        ],
      },
      {
        type: 'text',
        heading: '01 — The problem',
        paragraphs: [
          'The attribution dashboard held everything: CTR, CPC, MQLs, cost per lead, ROAS, bounce rate, session duration, conversions — per channel, per campaign, per week, all rendered at once. Every number was correct. Every number was useful to somebody, sometime. But laid out flat, the page didn\'t answer the one question a marketer arrives with: is what I did last week working, and where should I put next week\'s budget?',
        ],
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=875&fit=crop&auto=format&q=80',
      },
      {
        type: 'text',
        heading: '02 — The reframe',
        paragraphs: [
          'What we got right: giving marketers the whole picture. The data was there. The measurements were correct.',
          "What we got wrong: trusting that having the data was the same as using it. It wasn't packaged for how a marketer reads a dashboard. The information was right. The packaging wasn't.",
          "This wasn't a data problem. It was a composition problem — a question of what to put next to what, at what size, and in what order. Same ingredients, different plate.",
        ],
      },
      {
        type: 'quote',
        text: "A user's attention is a limited magic potion. Every glance, click, keypress and eye-flick spends some of it. Even if the data tells a hundred stories, if the eye has to hunt to piece them together, the user is spending potion on plumbing — and will leave frustrated before they get the story.",
      },
      {
        type: 'image-grid',
        images: [
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=650&fit=crop&auto=format&q=80',
          'https://images.unsplash.com/photo-1553484771-371a605b060b?w=900&h=650&fit=crop&auto=format&q=80',
        ],
      },
      {
        type: 'text',
        heading: '03 — Two paths we tested',
        paragraphs: [
          'Marketers care about two things at once: which channel is working, and which metric is moving. Same numbers, two very different mental models. We prototyped both.',
          'Path A — Group by metric. One card per metric (CTR, conversion rate, ROAS), each listing every channel underneath. Answers "which channel has the best CTR?" in one glance. Doesn\'t answer "how is LinkedIn doing this month, overall?" — that becomes a four-card scavenger hunt.',
          'Path B — Group by channel. One card per channel (LinkedIn ads, Google ads, Meta ads), each listing every metric inside. Answers "how is LinkedIn performing?" in one glance. The trade-off: comparing one metric across channels becomes a two-step scan instead of one. We took it, because that wasn\'t the question users started with.',
          'We ran both through five users on planned tasks — "tell me if LinkedIn is still worth the spend," "find our worst channel this quarter." Channel-grouping won on task time and on the follow-up question: which layout would you rather explain to your manager on a Monday morning?',
        ],
      },
      {
        type: 'text',
        heading: '04 — The solution',
        paragraphs: [
          'Once each channel had its own card, the next question was how to show what happens inside that channel. The old dashboard used bar and pie charts — easy to implement, but they show composition, not movement. And the marketer\'s real question was always about movement: where do people go, and where do they drop off?',
          'We swapped in Sankey diagrams. Same information, but the eye now follows a flow instead of counting slices. Reading it takes about three seconds. LinkedIn is the biggest source, but its drop-off ribbon is heavier than its converting one. Google\'s story is worse. Organic search punches above its weight. That\'s the story the old bar chart contained but never told.',
        ],
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1400&h=875&fit=crop&auto=format&q=80',
      },
      {
        type: 'text',
        heading: '05 — What changed',
        paragraphs: [
          'We rolled the redesign out behind a feature flag to a subset of accounts and ran user interviews and Hotjar surveys against both versions for four weeks.',
          'Time to answer a task question — noticeably faster. Users found the metric they wanted without scrolling back up. Measured qualitatively; we didn\'t have a rigorous task-time instrument in place.',
          'Feedback tone — warmer. "Overwhelming" stopped appearing in Hotjar surveys. "Clear" and "I can see the story" started showing up in its place.',
        ],
      },
      {
        type: 'image-grid',
        images: [
          'https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=900&h=650&fit=crop&auto=format&q=80',
          'https://images.unsplash.com/photo-1526628953301-3cd5f5e7a9e4?w=900&h=650&fit=crop&auto=format&q=80',
        ],
      },
      {
        type: 'text',
        heading: 'Reflection',
        paragraphs: [
          'If the users had been revenue teams instead of marketers, I\'d have grouped by metric — because a revenue team\'s first question is "what\'s moving?", not "which channel?" Packaging is a function of who\'s reading. Get into the head of the user before you touch the layout, and the rest is arrangement.',
          'Design decisions live and die by whose question you\'re answering first.',
        ],
      },
    ],
  },
]

export function getUseCaseBySlug(slug) {
  return useCases.find((useCase) => useCase.slug === slug)
}
