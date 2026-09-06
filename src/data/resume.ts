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
  description: string;
}

export interface Service {
  title: string;
  tag: string;
  description: string;
  evidence: string;
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
  buildTag: 'v5.3 · Wve Labs · current',
  lastUpdated: '2026-09-06',
  lastUpdatedDisplay: '6 Sep 2026',
  heroHeadingLine1: 'Ships mobile apps across every platform.',
  heroLede:
    "I'm a full-stack mobile engineer based in India, with nine years leading with native iOS and cross-platform Flutter development, backend and infrastructure included, not bolted on. At Wve Labs I've shipped a spirits-scanning app, an AI camera platform for real estate photography, and a vaping cessation app used by hundreds of thousands, each running on serverless infrastructure I built on Firebase or AWS. Lately I've been folding agentic AI tooling into how I actually build mobile software, not just what it ships.",
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
  { num: '12', label: 'shipped products' },
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
      'Full-time iOS and Flutter development across 24+ client apps for external clients, spanning consumer and enterprise work. This past year the role expanded into AI-assisted engineering: automated pull request review, custom hooks, and MCP-based tooling, culminating in an Anthropic Claude Code certification in March 2026.',
    highlights: [
      "Shipped <strong>The Daily Pour</strong>, formerly Bottle Raiders: an AI-driven spirits review app that scans bottle labels and barcodes, covered by Forbes and Brewbound.",
      'Shipped <strong>Ovvy</strong>, an AI-powered real estate photography platform: engineered a custom native camera module for lag-free zoom and lens switching, plus a ProRAW processing pipeline that cut turnaround time by 30 percent.',
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
      'An enterprise productivity suite carried from prototype through App Store release, built on Firebase, Firestore, and Crashlytics.',
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
    description:
      'Formerly Bottle Raiders. An AI-powered spirits review app that scans bottle labels and barcodes to surface aggregated ratings, covered by Forbes and Brewbound.',
  },
  {
    name: 'Ovvy: Real Estate Camera',
    url: 'https://apps.apple.com/us/app/ovvy-real-estate-camera/id6447063745',
    icon: '/assets/apps/ovvy.jpg',
    category: 'Photo & Video',
    description:
      'An AI camera platform that turns a smartphone into a real estate photography tool: a custom native camera module for lag-free zoom, a ProRAW pipeline for faster processing, virtual twilight rendering, and an asynchronous AWS media pipeline behind the scenes.',
  },
  {
    name: 'Puff Count: Quit Vaping Now',
    url: 'https://apps.apple.com/us/app/puff-count-quit-vaping-now/id1488580640',
    icon: '/assets/apps/puff-count.jpg',
    category: 'Lifestyle',
    description:
      'A puff-tracking app with custom quit plans, used by hundreds of thousands according to its own App Store listing, with daily, weekly, and monthly progress visualization and shared quit goals.',
  },
  {
    name: 'The NotME App',
    url: 'https://apps.apple.com/us/app/the-notme-app/id6745784550',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.thenotme.app',
    icon: '/assets/apps/notme.jpg',
    category: 'Lifestyle',
    description:
      'An enthusiastic consent verification app built on ID-verified profiles, per-meeting QR pairing, and securely stored consent records.',
  },
];

export const services: Service[] = [
  {
    title: 'iOS Native Development',
    tag: 'Swift · SwiftUI · SwiftData',
    description:
      'Native iOS apps carried from architecture through App Store release: UIKit and SwiftUI, offline storage, computer vision with ARKit and the Vision framework, and performance tuning.',
    evidence: 'Evidence: 9+ yrs, 5 companies · Coursera "Programming in Swift 5" · Udemy SwiftUI/Swift 6',
  },
  {
    title: 'Flutter Cross-Platform Apps',
    tag: 'Flutter · Dart',
    description:
      'One codebase with a native feel on iOS and Android, proven across enterprise and consumer apps at three companies.',
    evidence: 'Evidence: WeblineIndia, Ciright, Wve Labs, majority Dart/Flutter across client work · early adoption of Apple\'s Liquid Glass design system in a production Flutter codebase · Udemy "Flutter & Dart" certification',
  },
  {
    title: 'AI & Agentic Tooling for Dev Workflows',
    tag: 'Claude Code · MCP · GitHub Actions',
    description:
      'Wiring AI assistants into the build pipeline itself: automated pull request review, custom hooks, MCP server integrations, and slash command workflows, not just AI features inside an app.',
    evidence: 'Evidence: Anthropic "Claude Code in Action" cert, Mar 2026 · shipped GitHub Actions automation',
  },
  {
    title: 'Serverless Backends & Release Engineering',
    tag: 'Firebase · AWS Amplify · Fastlane',
    description:
      'Serverless backends, crash reporting, analytics, and release automation, so shipping stops being manual.',
    evidence:
      'Evidence: Fastlane automation at WeblineIndia, Ciright, Wve Labs · Firebase/Firestore/Crashlytics across every role',
  },
  {
    title: 'Mobile AI Integration',
    tag: 'Google Gemini · OpenAI · Claude · On-device LLMs',
    description:
      'Wiring generative AI into mobile apps: cloud APIs from Google Gemini, OpenAI, and Anthropic Claude, plus custom on-device LLM inference for fully offline, privacy-first features, across iOS, Android, and Flutter.',
    evidence:
      'Evidence: Anthropic "Claude Code in Action" cert · production experience with Claude and MCP API workflows · Core ML and Vision framework in shipped iOS apps',
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
    sub: 'Udemy · Jan 2020',
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

export const skills: string[] = [
  'Swift', 'SwiftUI', 'SwiftData', 'Flutter', 'Dart', 'REST APIs',
  'Firebase', 'Crashlytics', 'Firestore', 'AWS Amplify', 'Fastlane',
  'GitHub Actions', 'MCP', 'Claude Code', 'ARKit / Vision', 'CLI tooling',
];

export interface TechItem {
  name: string;
  icon: string;
  /** Matches a language name in the auto-synced skills.json, to show a live usage badge. */
  languageKey?: string;
}

export const techStack: TechItem[] = [
  { name: 'Swift', icon: '/assets/icons/swift.svg', languageKey: 'Swift' },
  { name: 'Flutter', icon: '/assets/icons/flutter.svg' },
  { name: 'Android', icon: '/assets/icons/android.svg' },
  { name: 'Dart', icon: '/assets/icons/dart.svg', languageKey: 'Dart' },
  { name: 'TypeScript', icon: '/assets/icons/typescript.svg' },
  { name: 'Node.js', icon: '/assets/icons/node-js.svg' },
];

export const integrations: TechItem[] = [
  { name: 'Firebase', icon: '/assets/icons/firebase.svg' },
  { name: 'AWS Amplify', icon: '/assets/icons/aws-amplify.svg' },
  { name: 'MongoDB', icon: '/assets/icons/mongodb.svg' },
  { name: 'Socket.IO', icon: '/assets/icons/socket-io.svg' },
  { name: 'RevenueCat', icon: '/assets/icons/revenuecat.svg' },
  { name: 'Mapbox', icon: '/assets/icons/mapbox.svg' },
  { name: 'Fastlane', icon: '/assets/icons/fastlane.svg' },
  { name: 'GitHub Actions', icon: '/assets/icons/github-actions.svg' },
  { name: 'Astro', icon: '/assets/icons/astro.svg' },
  { name: 'Xcode', icon: '/assets/icons/xcode.svg' },
  { name: 'Claude / Anthropic', icon: '/assets/icons/anthropic.svg' },
];

export const faqs: FaqEntry[] = [
  {
    question: 'What does Furkan specialize in?',
    answer:
      'Full-stack mobile engineering: native iOS development with Swift and SwiftUI, cross-platform Flutter work, and the serverless backends on Firebase and AWS behind them, with a recent focus on bringing AI and agentic tooling such as Claude Code, MCP, and automated CI review into the mobile engineering workflow itself.',
  },
  {
    question: 'How much experience does he have?',
    answer:
      'Over nine years of professional mobile development since January 2017 across five companies in India, currently Senior Mobile Developer at Wve Labs since July 2021, where he has worked across 24+ client apps.',
  },
  {
    question: 'What apps has Furkan shipped?',
    answer:
      "Live App Store products from the Wve Labs era include The Daily Pour (formerly Bottle Raiders, an AI spirits review app), Ovvy (an AI real estate photography platform), Puff Count: Quit Vaping Now, and The NotME App. Earlier work includes Ciright's Enterprise Note and Ciright Works, and healthcare and lifestyle apps built at WeblineIndia.",
  },
  {
    question: 'Is he available for freelance or consulting work?',
    answer:
      'He is full-time at Wve Labs and open to select remote consulting engagements and architecture reviews. Reach out by email or LinkedIn.',
  },
];
