export interface Stat {
  num: string;
  label: string;
}

export interface ExperienceEntry {
  version: string;
  current: boolean;
  role: string;
  org: string;
  dates: string;
  summary: string;
  highlights?: string[];
}

export interface ShippedApp {
  name: string;
  url: string;
  playStoreUrl?: string;
  icon: string;
  category: string;
  employer: string;
  description: string;
  caseStudySlug?: string;
}

export interface Service {
  title: string;
  tag: string;
  description: string;
}

export interface EducationEntry {
  title: string;
  sub: string;
}

export interface CertEntry {
  title: string;
  sub: string;
  certificateUrl?: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export const person = {
  name: 'Furkan Vijapura',
  role: 'Senior Mobile Engineer',
  roleLine: 'iOS Native & Flutter, Full-Stack Mobile',
  location: 'India',
  locationFull: 'India',
  timezone: 'GMT+5:30',
  email: 'furkanvijapura@gmail.com',
  phone: '+91 9727 664094',
  phoneHref: '+919727664094',
  avatar: '/assets/img/avatar.jpg',
  lastUpdated: '2026-09-13',
  lastUpdatedDisplay: '13 Sep 2026',
  heroHeadingLine1: 'Ships mobile apps across every platform.',
  heroHeadingLine2: 'Native code, serverless backends,',
  heroHeadingAccent: 'shipped end to end',
  heroLede:
    "I'm a full-stack mobile engineer based in India. Give me a rough idea and I'll turn it into a real app. Nine years and 30+ shipped apps across iOS, watchOS, iPadOS, and Android, for everyday users and businesses alike. I lead with native iOS and Flutter, and I build the whole thing: the app, the backend, and the release process. I've shipped a spirits-scanning app, a real estate photo app, and a vaping-cessation app used by hundreds of thousands of people. Each one runs on serverless infrastructure I built myself, on Firebase or AWS.",
};

export const socials: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/furkanvijapura' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/furkanvijapura' },
  { label: 'Medium', url: 'https://medium.com/@furkan.vijapura' },
  { label: 'DEV', url: 'https://dev.to/furkanvijapura' },
  { label: 'Stack Overflow', url: 'https://stackoverflow.com/users/8247434/furkan-vijapura' },
  { label: 'Twitter/X', url: 'https://twitter.com/furkanvijapura' },
];

export const heroStats: Stat[] = [
  { num: '9+', label: 'years shipping mobile' },
  { num: '11', label: 'shipped products' },
  { num: '5', label: 'companies' },
  { num: '8', label: 'certifications' },
];

export const experience: ExperienceEntry[] = [
  {
    version: 'v5',
    current: true,
    role: 'Senior Mobile Developer',
    org: 'Wve Labs',
    dates: 'Jul 2021 – Present · 5 yrs 3 mos · India · Hybrid',
    summary:
      'Full-time iOS and Flutter developer, working on 24+ client apps across many industries. Consumer apps and business apps alike.',
    highlights: [
      "Shipped <strong>The Daily Pour</strong>, formerly Bottle Raiders: an AI-driven spirits review app that scans bottle labels and barcodes, covered by Forbes and Brewbound.",
      'Shipped <strong>Ovvy</strong>, an AI-powered real estate photography platform: engineered a custom native camera module for lag-free zoom and lens switching, plus a ProRAW processing pipeline that made photo turnaround much faster.',
      'Shipped <strong>Puff Count: Quit Vaping Now</strong>, a vaping cessation app used by hundreds of thousands with daily, weekly, and monthly progress tracking.',
      'Shipped <strong>The NotME App</strong>, an identity-verified consent logging tool built for dating safety.',
    ],
  },
  {
    version: 'v4',
    current: false,
    role: 'iOS & Flutter Developer',
    org: 'Ciright, Inc.',
    dates: 'May 2020 – Jun 2021 · 1 yr 2 mos · India · Hybrid',
    summary:
      'An enterprise productivity suite carried from prototype through App Store release.',
    highlights: [
      'Built <strong>Enterprise Note</strong>, a cross-device note-sync app with sharing and personal knowledge management features.',
      'Built <strong>Ciright Works</strong>, a task and project tracker with document, audio, and media storage for teams.',
      'Built <strong>Line Items</strong>, a record-keeping tool for sales and bidding teams tracking equipment and projects.',
    ],
  },
  {
    version: 'v3',
    current: false,
    role: 'iOS & Flutter Developer',
    org: 'WeblineIndia',
    dates: 'Sep 2019 – May 2020 · 9 mos · India · On-site',
    summary: 'Client apps across health, travel, and lifestyle categories.',
    highlights: [
      'Contributed as iOS developer, as part of the team, on <strong>DSD App</strong>, an iPad tool dentists use to design and simulate smiles and share treatment plans with patients and labs.',
      'Built <strong>Patient-Tracker Plus</strong>, an iPad app clinicians use to log patient vitals and medication history.',
      'Built <strong>Fast Tract Diet</strong>, a gut health tracker for logging meals and symptoms.',
      'Built <strong>Quotes Corner</strong>, a categorized quote-sharing app.',
    ],
  },
  {
    version: 'v2',
    current: false,
    role: 'Jr. iOS Developer',
    org: 'Discus Business Solutions',
    dates: 'Jul 2017 – Sep 2019 · 2 yrs 3 mos · India · On-site',
    summary: 'First professional role: sales and document management tooling for enterprise clients.',
    highlights: [
      'Built <strong>Odin Live Plus</strong>, a downstream supply chain app combining CRM, sales force automation, and inventory tracking.',
      'Built <strong>Greenbox DMS</strong>, a secure platform for document collaboration and management.',
    ],
  },
  {
    version: 'v1',
    current: false,
    role: 'iOS Developer (Training)',
    org: 'AGILE Infoways Pvt. Ltd',
    dates: 'Jan 2017 – Jun 2017 · 6 mos · India',
    summary: 'Entry into professional iOS development.',
  },
];

export const shippedApps: ShippedApp[] = [
  {
    name: 'The Daily Pour',
    url: 'https://apps.apple.com/us/app/the-daily-pour/id6502606142',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.bottleraiders',
    icon: '/assets/apps/the-daily-pour.jpg',
    category: 'Food & Drink',
    employer: 'Wve Labs',
    description:
      'Formerly Bottle Raiders. An AI-powered spirits review app that scans bottle labels and barcodes to surface aggregated ratings, covered by Forbes and Brewbound.',
    caseStudySlug: 'the-daily-pour',
  },
  {
    name: 'Ovvy: Real Estate Camera',
    url: 'https://apps.apple.com/us/app/ovvy-real-estate-camera/id6447063745',
    icon: '/assets/apps/ovvy.jpg',
    category: 'Photo & Video',
    employer: 'Wve Labs',
    description:
      'An AI camera platform that turns a smartphone into a real estate photography tool: a custom native camera module for lag-free zoom, a ProRAW pipeline for faster processing, virtual twilight rendering, and an asynchronous AWS media pipeline behind the scenes.',
    caseStudySlug: 'ovvy',
  },
  {
    name: 'Puff Count: Quit Vaping Now',
    url: 'https://apps.apple.com/us/app/puff-count-quit-vaping-now/id1488580640',
    icon: '/assets/apps/puff-count.jpg',
    category: 'Lifestyle',
    employer: 'Wve Labs',
    description:
      'A puff-tracking app with custom quit plans, used by hundreds of thousands according to its own App Store listing, with daily, weekly, and monthly progress visualization and shared quit goals.',
    caseStudySlug: 'puff-count',
  },
  {
    name: 'The NotME App',
    url: 'https://apps.apple.com/us/app/the-notme-app/id6745784550',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.thenotme.app',
    icon: '/assets/apps/notme.jpg',
    category: 'Lifestyle',
    employer: 'Wve Labs',
    description:
      'An enthusiastic consent verification app built on ID-verified profiles, per-meeting QR pairing, and securely stored consent records.',
    caseStudySlug: 'the-notme-app',
  },
  {
    name: 'Unity: The Better Dating App',
    url: 'https://apps.apple.com/us/app/unity-the-better-dating-app/id6698861488',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mixrdating',
    icon: '/assets/apps/unity-dating.jpg',
    category: 'Social Networking',
    employer: 'Wve Labs',
    description:
      'A dating app built around real places and live activity instead of endless swiping. Real-time presence over Socket.IO, map-based discovery with clustered pins, and subscriptions handled through RevenueCat.',
  },
  {
    name: 'CardWhale: Collect, Track, Grow',
    url: 'https://apps.apple.com/us/app/cardwhale-collect-track-grow/id6757435852',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=app.cardwhale.live',
    icon: '/assets/apps/cardwhale.jpg',
    category: 'Reference',
    employer: 'Wve Labs',
    description:
      'A trading card collection tracker for Pokémon, Magic, and sealed product. Catalogue cards with the camera, see what a collection is worth, and follow how it changes over time.',
  },
  {
    name: 'InHealer',
    url: 'https://apps.apple.com/us/app/inhealer/id6447936654',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.dooroowa',
    icon: '/assets/apps/inhealer.jpg',
    category: 'Health & Fitness',
    employer: 'Wve Labs',
    description:
      'A self-guided app for managing panic symptoms, built with a clinical psychology practice. Guided audio exercises, reminders, and progress tracking to help people stay in control.',
  },
  {
    name: 'Worldie Draft Futbol',
    url: 'https://apps.apple.com/us/app/worldie-draft-futbol/id6749269769',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.worldiedraftfutbol',
    icon: '/assets/apps/worldie-draft-futbol.jpg',
    category: 'Sports',
    employer: 'Wve Labs',
    description:
      'A fantasy soccer draft game built around international tournaments. Players draft real national teams, compete with friends, and score points as the real matches play out.',
  },
  {
    name: 'Five Star Sitters',
    url: 'https://apps.apple.com/us/app/five-star-sitters/id1449806107',
    icon: '/assets/apps/five-star-sitters.jpg',
    category: 'Lifestyle',
    employer: 'Wve Labs',
    description:
      'An on-call babysitting app for Las Vegas families. Parents set up a family profile and book a vetted, background-checked sitter, with in-app payment through Square and address lookup through Google Places.',
  },
  {
    name: 'DSD App',
    url: 'https://apps.apple.com/us/app/dsd-app/id6476902245',
    icon: '/assets/apps/dsd-app.jpg',
    category: 'Medical',
    employer: 'WeblineIndia',
    description:
      'An iPad app dentists use to design and simulate smiles, take precise measurements, and share treatment plans with patients and dental labs, built as part of the team.',
  },
  {
    name: 'Fast Tract Diet',
    url: 'https://apps.apple.com/us/app/fast-tract-diet/id1062915865',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.selfhealthpublishing.fasttractdiet',
    icon: '/assets/apps/fast-tract-diet.jpg',
    category: 'Health & Fitness',
    employer: 'WeblineIndia',
    description:
      'A gut-health tracker built around the Fast Tract Diet\'s FP scoring system: log meals and symptoms, and look up symptom potential across 800+ foods and drinks.',
  },
];

export const services: Service[] = [
  {
    title: 'iOS Native Development',
    tag: 'Swift · SwiftUI · SwiftData',
    description:
      'Native iOS apps carried from architecture through App Store release: UIKit and SwiftUI, offline storage, computer vision with ARKit and the Vision framework, and performance tuning.',
  },
  {
    title: 'Flutter Cross-Platform Apps',
    tag: 'Flutter · Dart',
    description:
      'One codebase with a native feel on iOS and Android, proven across enterprise and consumer apps at three companies.',
  },
  {
    title: 'Wearables & Device Integration',
    tag: 'Garmin ConnectIQ · Strava · watchOS',
    description:
      'Connecting phones to the devices people actually wear: Garmin watch pairing and device management on native iOS through the ConnectIQ SDK, plus linking accounts to fitness services like Strava.',
  },
  {
    title: 'Serverless Backends & Release Engineering',
    tag: 'Firebase · AWS Amplify · Fastlane',
    description:
      'Serverless backends, crash reporting, analytics, and release automation, so shipping stops being manual.',
  },
  {
    title: 'Mobile AI Integration',
    tag: 'Google Gemini · OpenAI · Claude · On-device LLMs',
    description:
      'Wiring AI into mobile apps: cloud AI from Google Gemini, OpenAI, and Anthropic Claude, plus on-device AI that works fully offline, across iOS, Android, and Flutter.',
  },
];

export const education: EducationEntry[] = [
  { title: 'MCA, Computer Software Engineering', sub: 'Suresh Gyan Vihar University · 2020–2022' },
  { title: 'Master of Mobile Application Development', sub: 'Ganpat University · 2016–2018 · Grade A' },
  { title: 'Bachelor of Computer Applications', sub: 'Grow More Group of Institutions · 2013–2016' },
  { title: 'Higher Secondary Education', sub: 'Adarsh Higher & Secondary School · 2001–2012' },
];

export const certifications: CertEntry[] = [
  {
    title: 'Claude Code in Action',
    sub: 'Anthropic · Mar 2026',
    certificateUrl: 'https://verify.skilljar.com/c/drdn6xrquvjv',
  },
  {
    title: 'SwiftUI',
    sub: 'Udemy · Jan 2025',
    certificateUrl: 'https://www.udemy.com/certificate/UC-a972e8e8-6d37-4e20-a22b-dcb0df2c5d48/',
  },
  {
    title: 'iOS App Store & In-App Purchases',
    sub: 'Coursera · Jun 2021',
    certificateUrl: 'https://coursera.org/share/8bd770c4c09a892f848415d131d49694',
  },
  {
    title: 'Programming in Swift 5',
    sub: 'Coursera · Jun 2021',
    certificateUrl: 'https://coursera.org/share/eb1835900309c04097ab6c3e8e1361b0',
  },
  {
    title: 'Flutter & Dart',
    sub: 'Udemy · Nov 2020',
    certificateUrl: 'https://www.udemy.com/certificate/UC-58a99672-a873-4d0d-b266-895cb5039bb6/',
  },
  {
    title: 'Swift and Xcode Development',
    sub: 'Udemy · Jun 2020',
    certificateUrl: 'https://www.udemy.com/certificate/UC-0a068419-691e-43e9-8b9c-9b46d90a813d/',
  },
  {
    title: 'Google Digital Unlocked',
    sub: 'Google',
    certificateUrl:
      'https://drive.google.com/file/d/0BwOz3owcAb4WYnctd1pmRnZHc2M/view?usp=sharing&resourcekey=0-79iJnemvBjQ93CJ6JqxhPA',
  },
  { title: 'IICT Certification', sub: 'International Institute for Consulting and Training' },
];

export interface SkillTier {
  tier: string;
  note: string;
  items: string[];
}

/** Core is the platforms everything ships on; Working is what gets shipped
 *  with regularly alongside them; Exploring is in real use, still deepening. */
export const skillTiers: SkillTier[] = [
  {
    tier: 'Core',
    note: 'The platforms everything ships on',
    items: ['Swift', 'SwiftUI', 'UIKit', 'Objective-C', 'Flutter', 'Dart'],
  },
  {
    tier: 'Working',
    note: 'Shipped with regularly',
    items: [
      'GetX', 'Dio', 'Firebase', 'REST APIs', 'Cloud Functions', 'Crashlytics',
      'Android', 'Kotlin', 'watchOS', 'iPadOS', 'SwiftData',
      'Garmin ConnectIQ', 'Strava API', 'ARKit / Vision',
      'Node.js / Express', 'MongoDB', 'PostgreSQL',
      'AWS Amplify', 'AWS S3', 'Socket.IO', 'RevenueCat', 'Stripe',
      'Google Maps', 'Mapbox', 'Fastlane', 'GitHub Actions',
    ],
  },
  {
    tier: 'Exploring',
    note: 'In real use, still going deeper',
    items: [
      'Hugging Face', 'Ollama', 'On-device LLMs',
      'Redis', 'Docker', 'MCP', 'Claude Code', 'CLI tooling',
    ],
  },
];

/** Named from the categories of the apps actually shipped — each one is
 *  checkable against a live store listing. */
export const industries: string[] = [
  'Spirits & drinks',
  'Real estate',
  'Health & wellness',
  'Dating & personal safety',
  'Collectibles',
  'Sports & fantasy',
  'Childcare',
  'Dental & medical',
  'Enterprise productivity',
];

export interface TechItem {
  name: string;
  icon: string;
}

/* Each list below runs current-first: what's most actively used today leads,
   legacy or wind-down tools trail. */

export const techStack: TechItem[] = [
  { name: 'Swift', icon: '/assets/icons/swift.svg' },
  { name: 'Flutter', icon: '/assets/icons/flutter.svg' },
  { name: 'Dart', icon: '/assets/icons/dart.svg' },
  { name: 'Kotlin', icon: '/assets/icons/kotlin.svg' },
  { name: 'TypeScript', icon: '/assets/icons/typescript.svg' },
  { name: 'Node.js', icon: '/assets/icons/node-js.svg' },
  { name: 'Android', icon: '/assets/icons/android.svg' },
  { name: 'Objective-C', icon: '/assets/icons/objective-c.svg' },
];

/** Third-party services and SDKs the apps themselves talk to. */
export const integrations: TechItem[] = [
  { name: 'Firebase', icon: '/assets/icons/firebase.svg' },
  { name: 'PostgreSQL', icon: '/assets/icons/postgresql.svg' },
  { name: 'RevenueCat', icon: '/assets/icons/revenuecat.svg' },
  { name: 'Stripe', icon: '/assets/icons/stripe.svg' },
  { name: 'AWS Amplify', icon: '/assets/icons/aws-amplify.svg' },
  { name: 'Redis', icon: '/assets/icons/redis.svg' },
  { name: 'MongoDB', icon: '/assets/icons/mongodb.svg' },
  { name: 'Socket.IO', icon: '/assets/icons/socket-io.svg' },
  { name: 'Garmin ConnectIQ', icon: '/assets/icons/garmin.svg' },
  { name: 'Strava', icon: '/assets/icons/strava.svg' },
  { name: 'Mapbox', icon: '/assets/icons/mapbox.svg' },
  { name: 'Google Maps', icon: '/assets/icons/google-maps.svg' },
  { name: 'Lottie', icon: '/assets/icons/lottie.svg' },
  { name: 'JWT', icon: '/assets/icons/jwt.svg' },
  { name: 'Braintree', icon: '/assets/icons/braintree.svg' },
  { name: 'Facebook', icon: '/assets/icons/facebook.svg' },
];

/** AI wired into the apps themselves — the cloud models and the on-device
 *  runtimes behind the Mobile AI Integration service. */
export const aiIntegrations: TechItem[] = [
  { name: 'Claude API', icon: '/assets/icons/anthropic.svg' },
  { name: 'OpenAI', icon: '/assets/icons/openai.svg' },
  { name: 'Google Gemini', icon: '/assets/icons/googlegemini.svg' },
  { name: 'Ollama', icon: '/assets/icons/ollama.svg' },
  { name: 'Hugging Face', icon: '/assets/icons/huggingface.svg' },
];

/** What the work gets built, tested, shipped, and watched with. */
export const tooling: TechItem[] = [
  { name: 'Claude Code', icon: '/assets/icons/anthropic.svg' },
  { name: 'MCP', icon: '/assets/icons/modelcontextprotocol.svg' },
  { name: 'Antigravity', icon: '/assets/icons/antigravity.svg' },
  { name: 'Xcode', icon: '/assets/icons/xcode.svg' },
  { name: 'VS Code', icon: '/assets/icons/vscode.svg' },
  { name: 'GitHub Actions', icon: '/assets/icons/github-actions.svg' },
  { name: 'Fastlane', icon: '/assets/icons/fastlane.svg' },
  { name: 'Bitrise', icon: '/assets/icons/bitrise.svg' },
  { name: 'App Distribution', icon: '/assets/icons/firebase.svg' },
  { name: 'Postman', icon: '/assets/icons/postman.svg' },
  { name: 'Sentry', icon: '/assets/icons/sentry.svg' },
  { name: 'Docker', icon: '/assets/icons/docker.svg' },
  { name: 'Android Studio', icon: '/assets/icons/android-studio.svg' },
  { name: 'Astro', icon: '/assets/icons/astro.svg' },
];

/** Where the work gets planned and tracked. */
export const planningTools: TechItem[] = [
  { name: 'Linear', icon: '/assets/icons/linear.svg' },
  { name: 'Jira', icon: '/assets/icons/jira.svg' },
  { name: 'Notion', icon: '/assets/icons/notion.svg' },
  { name: 'Asana', icon: '/assets/icons/asana.svg' },
  { name: 'Confluence', icon: '/assets/icons/confluence.svg' },
  { name: 'Trello', icon: '/assets/icons/trello.svg' },
];

/** Design handoff — what screens get built from. */
export const collaborationTools: TechItem[] = [
  { name: 'Figma', icon: '/assets/icons/figma.svg' },
  { name: 'Sketch', icon: '/assets/icons/sketch.svg' },
  { name: 'Adobe XD', icon: '/assets/icons/adobexd.svg' },
];

/** Real tools with no brand icon available (Zeplin and TestFlight aren't in the
 *  icon set), so they ride along on the PDF rather than getting a tile. */
const iconlessTools: string[] = ['Zeplin', 'TestFlight'];

/** Flat list for the PDF resume. Declared last so every array it reads is
 *  already initialised, derived so the page and the PDF can never differ, and
 *  de-duplicated because tiers and the icon groups legitimately overlap
 *  (Ollama and Hugging Face appear in both). */
export const skills: string[] = [
  ...new Set([
    ...skillTiers.flatMap((t) => t.items),
    ...aiIntegrations.map((t) => t.name),
    ...planningTools.map((t) => t.name),
    ...collaborationTools.map((t) => t.name),
    ...iconlessTools,
  ]),
];

export const faqs: FaqEntry[] = [
  {
    question: 'What does Furkan specialize in?',
    answer:
      'Full-stack mobile engineering. Native iOS apps with Swift and SwiftUI, cross-platform apps with Flutter, and the backends on Firebase and AWS that power them.',
  },
  {
    question: 'How much experience does he have?',
    answer:
      'Over nine years of professional mobile development since January 2017, shipping 30+ apps across iOS, watchOS, iPadOS, and Android for both consumer and enterprise clients, across five companies in India. He is currently Senior Mobile Developer at Wve Labs since July 2021, where he has worked across 24+ client apps.',
  },
  {
    question: 'What apps has Furkan shipped?',
    answer:
      "Eleven apps are live on the App Store, seven of them on Google Play too. They include The Daily Pour (formerly Bottle Raiders, an AI spirits review app), Ovvy (an AI real estate photography platform), Puff Count: Quit Vaping Now, The NotME App, Unity (a dating app), CardWhale (a trading card tracker), InHealer (panic support), Worldie Draft Futbol (fantasy soccer), and Five Star Sitters (on-call babysitting). Earlier work includes Fast Tract Diet, a gut-health tracker, DSD App, an iPad smile-design tool for dentists built as part of the team, and Ciright's Enterprise Note and Ciright Works.",
  },
  {
    question: 'Is he available for freelance or consulting work?',
    answer:
      'He is full-time at Wve Labs and open to select remote consulting engagements and architecture reviews. Reach out by email or LinkedIn.',
  },
];
