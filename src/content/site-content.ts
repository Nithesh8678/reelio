export type CollaboratorTag = {
  name: string;
  accent: string;
};

export type OfferingItem = {
  id: string;
  title: string;
  label: string;
  shortDescription: string;
  longDescription: string;
  bullets: string[];
  accent: string;
};

export type WorkItem = {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  image: string;
};

export const instagramUrl = "https://instagram.com/reelio.agency";

export const whatsappUrl = "https://wa.me/15551234567";

export const collaboratorTags: CollaboratorTag[] = [
  { name: "Northlane Ventures", accent: "#E31E24" },
  { name: "Founders Circle", accent: "#F97316" },
  { name: "Aster Studio", accent: "#22D3EE" },
  { name: "Pilot Growth", accent: "#A3E635" },
  { name: "Signal Labs", accent: "#60A5FA" },
  { name: "Craft Narrative", accent: "#C084FC" },
  { name: "Orbit Partners", accent: "#F43F5E" },
  { name: "Velocity Guild", accent: "#38BDF8" },
];

export const offeringsContent: OfferingItem[] = [
  {
    id: "pulse",
    title: "reelio Pulse",
    label: "Short-Form Velocity",
    shortDescription: "High-energy under 90-second hooks designed for viral reach and engagement.",
    longDescription:
      "Pulse is built for momentum. We engineer fast, memorable cuts and opening hooks that are tuned for retention spikes and replay behavior across social feeds.",
    bullets: [
      "Optimized for social media reels",
      "Promos",
      "Brand awareness",
      "Credibility building",
    ],
    accent: "#22D3EE",
  },
  {
    id: "feature",
    title: "reelio Feature",
    label: "Long-Form Authority",
    shortDescription: "Cinematic and in-depth over 2-minute content that builds authority and trust.",
    longDescription:
      "Feature is where your expertise gets narrative depth. We produce longer editorial cuts that translate positioning, substance, and credibility into watch time.",
    bullets: [
      "Optimized for YouTube",
      "Long-form streaming platforms",
      "Reviews, trainings, thought leadership",
      "Documentary",
    ],
    accent: "#FB923C",
  },
  {
    id: "voice",
    title: "reelio Voice",
    label: "Audio Influence",
    shortDescription:
      "Thought leadership and expert conversations shaped into a multi-channel audio strategy.",
    longDescription:
      "Voice turns raw conversation into consistent influence. We help structure, produce, and distribute expert audio presence into formats audiences actually follow.",
    bullets: ["Podcasts", "Studio setup"],
    accent: "#A78BFA",
  },
  {
    id: "catalyst",
    title: "reelio Catalyst",
    label: "Creative Conversion",
    shortDescription:
      "Precision-targeted ads designed to turn viewers into high-value customers.",
    longDescription:
      "Catalyst blends media strategy with conversion creative. We test fast, iterate hard, and align design assets with business outcomes rather than vanity metrics.",
    bullets: ["Advertisements", "Logo and poster design", "Animations", "Printables"],
    accent: "#FB7185",
  },
  {
    id: "insights",
    title: "reelio Insights",
    label: "Intelligence Layer",
    shortDescription:
      "Turning social metrics into actionable business intelligence and ROI mapping.",
    longDescription:
      "Insights connects content performance to decision-making. We map signals from audience behavior into clear strategic moves and measurable growth frameworks.",
    bullets: ["Sentiment and trend mapping", "SEO and GEO", "Competitor benchmarking"],
    accent: "#A3E635",
  },
  {
    id: "persona",
    title: "reelio Persona",
    label: "Executive Positioning",
    shortDescription:
      "Transforming founders and executives into influential industry voices.",
    longDescription:
      "Persona defines how leadership is perceived at scale. We shape narrative, visual tone, and communication rhythm so founders are recognized as category voices.",
    bullets: ["Personal branding", "Storytelling and positioning", "High-value networking"],
    accent: "#60A5FA",
  },
];

export const homeWorks: WorkItem[] = [
  {
    id: "atlas",
    title: "Atlas Launch Sprint",
    category: "Growth Narrative",
    year: "2026",
    summary: "From first teaser to conversion campaign in six weeks for a fintech scale-up.",
    image: "https://picsum.photos/seed/atlaswork/1600/1000",
  },
  {
    id: "nova",
    title: "Nova Thought Series",
    category: "Founder Positioning",
    year: "2026",
    summary: "Executive-led video and podcast system that tripled qualified inbound conversations.",
    image: "https://picsum.photos/seed/novawork/1600/1000",
  },
  {
    id: "linea",
    title: "Linea Performance Stack",
    category: "Paid Creative",
    year: "2025",
    summary: "Cross-platform ad creative engine tuned for CAC efficiency and sustained ROAS gains.",
    image: "https://picsum.photos/seed/lineawork/1600/1000",
  },
];

export const resourcesWorks: WorkItem[] = [
  {
    id: "operator-playbook",
    title: "Operator Playbook Film",
    category: "Brand Documentary",
    year: "2026",
    summary: "A cinematic founder story crafted for YouTube and executive events.",
    image: "https://picsum.photos/seed/operatorfilm/1200/800",
  },
  {
    id: "signal-room",
    title: "Signal Room Podcast",
    category: "Audio Strategy",
    year: "2026",
    summary: "Weekly thought-leadership format distributed across Spotify, YouTube, and Shorts.",
    image: "https://picsum.photos/seed/signalroom/1200/800",
  },
  {
    id: "motion-lab",
    title: "Motion Lab Ads",
    category: "Performance Creative",
    year: "2025",
    summary: "Ad concept library with rapid testing loops and measurable conversion lift.",
    image: "https://picsum.photos/seed/motionlab/1200/800",
  },
];
