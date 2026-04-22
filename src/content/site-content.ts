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
  image: string;
};

export type WorkItem = {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  image: string;
  vimeoEmbedUrl?: string;
};

export type BehindTheScenesClip = {
  id: string;
  title: string;
  subtitle: string;
  vibe: string;
  src: string;
  accent: string;
};

export type GearItem = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type CustomerNameItem = {
  name: string;
  accent: string;
};

export type TestimonialItem = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  accent: string;
};

export type AboutMetricItem = {
  label: string;
  value: string;
};

export type CorePhilosophyItem = {
  id: string;
  title: string;
  description: string;
  accent: string;
};

export const instagramUrl = "https://www.instagram.com/reelio_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export const whatsappUrl = "https://wa.me/15551234567";

export const contactDetails = {
  email: "letstalk@reelio.co.in",
  phone: "+91 63856 66442",
  addressLine1: "",
  addressLine2: "Chennai 600056",
  address: "Chennai 600056",
};

export const socialUrls = {
  instagram: instagramUrl,
  whatsapp: whatsappUrl,
};

export const existingCustomers: CustomerNameItem[] = [
  { name: "NOVA PAY", accent: "#22D3EE" },
  { name: "ASTER LIVING", accent: "#FB923C" },
  { name: "PULSE ENERGY", accent: "#A78BFA" },
  { name: "FINORBIT", accent: "#FB7185" },
  { name: "GROWTHDOCK", accent: "#A3E635" },
  { name: "VERDANT LABS", accent: "#60A5FA" },
  { name: "SPYNAD", accent: "#FACC15" },
];

export const testimonials: TestimonialItem[] = [
  {
    id: "a1",
    quote:
      "Reelio rebuilt our short-form engine from scratch. In 90 days, we went from inconsistent uploads to a predictable inbound pipeline.",
    author: "Anika Raman",
    role: "Marketing Lead",
    company: "NOVA PAY",
    accent: "#22D3EE",
  },
  {
    id: "a2",
    quote:
      "The team blends creative instinct with hard numbers. Every campaign had a measurable goal and a clear feedback loop.",
    author: "Rahul Menon",
    role: "Founder",
    company: "PULSE ENERGY",
    accent: "#FB7185",
  },
  {
    id: "a3",
    quote:
      "What stood out was execution speed. Strategy, production, edits, and distribution were all synced and frictionless.",
    author: "Meera S",
    role: "Brand Director",
    company: "ASTER LIVING",
    accent: "#A3E635",
  },
];

export const aboutCopy = {
  intro:
    "At Reelio, we believe digital marketing is not just about going viral, but about staying relevant. We have built our foundation at the intersection of creativeness and the numbers.",
  supporting:
    "We are a Chennai based growth partner specializing in high impact short-form content. Our team combines the flair of social storytelling with the rigor of deep cycle analytics that will help take your brand to the next level.",
  fullCycle:
    "Full-cycle partner for brands to navigate the current digital landscape with content, short form marketing excellence and analytics.",
  origin:
    "Reelio was born from a group of creative minds that understand your business, combined with high-end creative production that ensures your brand gets the required visibility to exceed your revenue targets.",
};

export const aboutMetrics: AboutMetricItem[] = [
  { value: "1000+", label: "Projects" },
  { value: "50+", label: "Clients" },
  { value: "50X", label: "Leads" },
  { value: "5x", label: "ROI" },
];

export const corePhilosophy: CorePhilosophyItem[] = [
  {
    id: "engine",
    title: "The Engine",
    description:
      "We handle the heavy lifting of production, from thumb stopping scripts and creative direction to high quality shooting and editing.",
    accent: "#22D3EE",
  },
  {
    id: "precision",
    title: "Creative Precision",
    description:
      "Edited to perfection, every reel, video or post is designed with a specific conversion goal in mind.",
    accent: "#FB7185",
  },
  {
    id: "intelligence",
    title: "The Intelligence",
    description:
      "We use sentiment analysis, AIEO and SEO to ensure your brand is found by those who matter.",
    accent: "#A78BFA",
  },
  {
    id: "outcome",
    title: "The Outcome",
    description:
      "Human centric growth, with communities lasting a lifetime rather than just Likes and Follows.",
    accent: "#A3E635",
  },
];

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
    title: "Reelio Pulse",
    label: "Short-Form Velocity",
    shortDescription: "High-energy, sub-90-second hooks designed for viral reach and engagement.",
    longDescription:
      "Pulse is built for momentum. We engineer fast, memorable cuts and opening hooks that are tuned for retention spikes and replay behavior across social feeds.",
    bullets: [
      "Optimized for social media Reels",
      "Promotional Content",
      "Brand awareness",
      "Credibility Building",
    ],
    accent: "#22D3EE",
    image: "/offerings/pulse.JPG",
  },
  {
    id: "feature",
    title: "Reelio Feature",
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
    image: "/offerings/feature.PNG",
  },
  {
    id: "voice",
    title: "Reelio Voice",
    label: "Audio Influence",
    shortDescription:
      "Thought leadership and expert conversations shaped into a multi-channel audio strategy.",
    longDescription:
      "Voice turns raw conversation into consistent influence. We help structure, produce, and distribute expert audio presence into formats audiences actually follow.",
    bullets: ["Podcasts", "Studio setup"],
    accent: "#A78BFA",
    image: "/offerings/voice.JPG",
  },
  {
    id: "catalyst",
    title: "Reelio Catalyst",
    label: "Creative Conversion",
    shortDescription:
      "Precision-targeted ads designed to turn viewers into high-value customers.",
    longDescription:
      "Catalyst blends media strategy with conversion creative. We test fast, iterate hard, and align design assets with business outcomes rather than vanity metrics.",
    bullets: ["Advertisements", "Logo and poster design", "Animations", "Printables"],
    image: "/offerings/catalyst.jpeg",
    accent: "#FB7185",
  },
  {
    id: "insights",
    title: "Reelio Insights",
    label: "Intelligence Layer",
    shortDescription:
      "Turning social metrics into actionable business intelligence and ROI mapping.",
    longDescription:
      "Insights connects content performance to decision-making. We map signals from audience behavior into clear strategic moves and measurable growth frameworks.",
    image: "/offerings/insights.JPG",
    bullets: ["Sentiment and trend mapping", "SEO and GEO", "Competitor benchmarking"],
    accent: "#A3E635",
  },
  {
    id: "persona",
    title: "Reelio Persona",
    label: "Executive Positioning",
    shortDescription:
      "Transforming founders and executives into influential industry voices.",
    longDescription:
      "Persona defines how leadership is perceived at scale. We shape narrative, visual tone, and communication rhythm so founders are recognized as category voices.",
    bullets: ["Personal branding", "Storytelling and positioning", "High-value networking"],
    accent: "#60A5FA",
    image: "/offerings/persona.JPG",
  },
];

export const homeWorks: WorkItem[] = [
  {
    id: "nova",
    title: "Nova Thought Series",
    category: "Founder Positioning",
    year: "2026",
    summary: "Executive-led video and podcast system that tripled qualified inbound conversations.",
    image: "https://picsum.photos/seed/novawork/1600/1000",
    vimeoEmbedUrl:
      "https://player.vimeo.com/video/1183963998?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: "linea",
    title: "Linea Performance Stack",
    category: "Paid Creative",
    year: "2025",
    summary: "Cross-platform ad creative engine tuned for CAC efficiency and sustained ROAS gains.",
    image: "https://picsum.photos/seed/lineawork/1600/1000",
    vimeoEmbedUrl:
      "https://player.vimeo.com/video/76979871?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
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
    vimeoEmbedUrl:
      "https://player.vimeo.com/video/1184874799?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  },
  {
    id: "signal-room",
    title: "Signal Room Podcast",
    category: "Audio Strategy",
    year: "2026",
    summary: "Weekly thought-leadership format distributed across Spotify, YouTube, and Shorts.",
    image: "https://picsum.photos/seed/signalroom/1200/800",
    vimeoEmbedUrl:
      "https://player.vimeo.com/video/1183963998?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: "motion-lab",
    title: "Motion Lab Ads",
    category: "Performance Creative",
    year: "2025",
    summary: "Ad concept library with rapid testing loops and measurable conversion lift.",
    image: "https://picsum.photos/seed/motionlab/1200/800",
    vimeoEmbedUrl:
      "https://player.vimeo.com/video/1183963980?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
  },
];

export const behindTheScenesClips: BehindTheScenesClip[] = [
  {
    id: "bts-01",
    title: "Set Motion 01",
    subtitle: "Raw creative process from the floor",
    vibe: "Fast cuts, real direction, no filters",
    src: "/IMG_8763.MOV",
    accent: "#22D3EE",
  },
  {
    id: "bts-02",
    title: "Set Motion 02",
    subtitle: "Energy moments between takes",
    vibe: "Short, high-impact, cinematic snippets",
    src: "/IMG_9048.MOV",
    accent: "#F97316",
  },
];

export const equipmentShowcase: GearItem[] = [
  {
    id: "cinema-camera",
    name: "Cinema Camera Kit",
    description: "High dynamic range capture for premium storytelling.",
    image: "https://picsum.photos/seed/reelio-cinema-camera/1200/900",
  },
  {
    id: "audio-rig",
    name: "Broadcast Audio Rig",
    description: "Crisp, studio-grade voice capture for every format.",
    image: "https://picsum.photos/seed/reelio-audio-rig/1200/900",
  },
  {
    id: "lighting-setup",
    name: "Pro Lighting Setup",
    description: "Controlled, cinematic lighting for consistent brand quality.",
    image: "https://picsum.photos/seed/reelio-lighting-setup/1200/900",
  },
];
