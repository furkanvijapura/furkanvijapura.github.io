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
  icon: string;
  category: string;
  developer: string;
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
  roleLine: 'iOS, Flutter, Serverless & AI',
  location: 'Ahmedabad, IN',
  locationFull: 'Ahmedabad, Gujarat, India',
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
    "I'm a Senior Mobile Engineer based in Ahmedabad, India, with nine years shipping native iOS and cross-platform Flutter apps end to end, backend included. At Wve Labs I've shipped a spirits-scanning app for Dan Abrams' Mediaite, an AI camera platform for real estate photography, and a vaping cessation app used by hundreds of thousands, each running on serverless infrastructure I built on Firebase or AWS. Lately I've been folding agentic AI tooling into how I actually build mobile software, not just what it ships.",
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
    dates: 'Jul 2021 – Present · 5 yrs 3 mos · Ahmedabad, IN · On-site',
    summary:
      'Full-time iOS and Flutter development for external clients across consumer and enterprise apps. This past year the role expanded into AI-assisted engineering: automated pull request review, custom hooks, and MCP-based tooling, culminating in an Anthropic Claude Code certification in March 2026.',
    highlights: [
      "Shipped <strong>The Daily Pour</strong>, formerly Bottle Raiders: an AI-driven spirits review app for Dan Abrams' Mediaite that scans bottle labels and barcodes, covered by Forbes and Brewbound.",
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
    dates: 'May 2020 – Jun 2021 · 1 yr 2 mos · Ahmedabad, IN · Hybrid',
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
    dates: 'Sep 2019 – May 2020 · 9 mos · Ahmedabad, IN · On-site',
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
    dates: 'Jul 2017 – Sep 2019 · 2 yrs 3 mos · Ahmedabad, IN · On-site',
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
    dates: 'Jan 2017 – Jun 2017 · 6 mos · Ahmedabad, IN',
    summary: 'Entry into professional iOS development.',
  },
];

export const shippedApps: ShippedApp[] = [
  {
    name: 'The Daily Pour',
    url: 'https://apps.apple.com/us/app/the-daily-pour/id6502606142',
    icon: '/assets/apps/the-daily-pour.jpg',
    category: 'Food & Drink',
    developer: 'Mediaite LLC',
    description:
      'Formerly Bottle Raiders. An AI-powered spirits review app that scans bottle labels and barcodes to surface aggregated ratings, founded by Dan Abrams and covered by Forbes, Brewbound, and Mediaite.',
  },
  {
    name: 'Ovvy: Real Estate Camera',
    url: 'https://apps.apple.com/us/app/ovvy-real-estate-camera/id6447063745',
    icon: '/assets/apps/ovvy.jpg',
    category: 'Photo & Video',
    developer: 'Tyler Good · built by Wve Labs',
    description:
      'An AI camera platform that turns a smartphone into a real estate photography tool: a custom native camera module for lag-free zoom, a ProRAW pipeline for faster processing, virtual twilight rendering, and an asynchronous AWS media pipeline behind the scenes.',
  },
  {
    name: 'Puff Count: Quit Vaping Now',
    url: 'https://apps.apple.com/us/app/puff-count-quit-vaping-now/id1488580640',
    icon: '/assets/apps/puff-count.jpg',
    category: 'Lifestyle',
    developer: 'Rodger Studio',
    description:
      'A puff-tracking app with custom quit plans, used by hundreds of thousands according to its own App Store listing, with daily, weekly, and monthly progress visualization and shared quit goals.',
  },
  {
    name: 'The NotME App',
    url: 'https://apps.apple.com/us/app/the-notme-app/id6745784550',
    icon: '/assets/apps/notme.jpg',
    category: 'Lifestyle',
    developer: 'Not Me LLC',
    description:
      'An enthusiastic consent verification app built on ID-verified profiles, per-meeting QR pairing, and securely stored consent records.',
  },
];

export const services: Service[] = [
  {
    title: 'iOS Native Development',
    tag: 'Swift · SwiftUI · SwiftData',
    description:
      'Native iOS apps carried from architecture through App Store release: UIKit and SwiftUI, offline storage, and performance tuning.',
    evidence: 'Evidence: 9+ yrs, 5 companies · Coursera "Programming in Swift 5" · Udemy SwiftUI/Swift 6',
  },
  {
    title: 'Flutter Cross-Platform Apps',
    tag: 'Flutter · Dart',
    description:
      'One codebase with a native feel on iOS and Android, proven across enterprise and consumer apps at three companies.',
    evidence: 'Evidence: WeblineIndia, Ciright, Wve Labs · Udemy "Flutter & Dart" certification',
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
];

export const education: EducationEntry[] = [
  { title: 'MCA, Computer Software Engineering', sub: 'Suresh Gyan Vihar University · 2020–2022' },
  { title: 'Master of Mobile Application Development', sub: 'Ganpat University · 2016–2018 · Grade A' },
  { title: 'Bachelor of Computer Applications', sub: 'Grow More Group of Institutions · 2013–2016' },
  { title: 'Higher Secondary Education', sub: 'Adarsh Higher & Secondary School · 2001–2012' },
];

export const certifications: CertEntry[] = [
  { title: 'Claude Code in Action', sub: 'Anthropic · Mar 2026' },
  { title: 'SwiftUI', sub: 'Udemy · Jan 2025' },
  { title: 'iOS App Store & In-App Purchases', sub: 'Coursera · Jun 2021' },
  { title: 'Programming in Swift 5', sub: 'Coursera · Jun 2021' },
  { title: 'Flutter & Dart', sub: 'Udemy · Nov 2020' },
  { title: 'Swift and Xcode Development', sub: 'Udemy · Jan 2020' },
  { title: 'Google Digital Unlocked', sub: 'Google' },
  { title: 'IICT Certification', sub: 'International Institute for Consulting and Training' },
];

export const skills: string[] = [
  'Swift', 'SwiftUI', 'SwiftData', 'Flutter', 'Dart', 'REST APIs',
  'Firebase', 'Crashlytics', 'Firestore', 'AWS Amplify', 'Fastlane',
  'GitHub Actions', 'MCP', 'Claude Code', 'CLI tooling',
];

export const faqs: FaqEntry[] = [
  {
    question: 'What does Furkan specialize in?',
    answer:
      'Native iOS development with Swift and SwiftUI, cross-platform Flutter work, and serverless backends on Firebase and AWS, with a recent focus on bringing AI and agentic tooling such as Claude Code, MCP, and automated CI review into the mobile engineering workflow itself.',
  },
  {
    question: 'How much experience does he have?',
    answer:
      'Over nine years of professional mobile development since January 2017 across five companies in Ahmedabad, India, currently Senior Mobile Developer at Wve Labs since July 2021.',
  },
  {
    question: 'What apps has Furkan shipped?',
    answer:
      "Live App Store products from the Wve Labs era include The Daily Pour (formerly Bottle Raiders, an AI spirits review app for Dan Abrams' Mediaite), Ovvy (an AI real estate photography platform), Puff Count: Quit Vaping Now, and The NotME App. Earlier work includes Ciright's Enterprise Note and Ciright Works, and healthcare and lifestyle apps built at WeblineIndia.",
  },
  {
    question: 'Is he available for freelance or consulting work?',
    answer:
      'He is full-time at Wve Labs and open to select remote consulting engagements and architecture reviews. Reach out by email or LinkedIn.',
  },
];
