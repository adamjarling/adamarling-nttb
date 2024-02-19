export type WorkCard = {
  description: string;
  githubUrl?: string;
  href: string;
  image: string;
  projectDescription?: string[];
  tags?: string[];
  title: string;
};

export const workCards: WorkCard[] = [
  {
    description: "Northwestern University Libraries Digital Collections app",
    githubUrl: "https://github.com/nulib/dc-nextjs",
    href: "https://dc.library.northwestern.edu/",
    image: "images/work/work-card-dc.jpg",
    tags: ["React", "Next.js", "TypeScript", "Radix UI", "AWS"],
    title: "NUL Digital Collections",
    projectDescription: [
      "Launched Digital Collection v2 in 2023. Refactored the primary discovery application for scholars, researchers and course-access to over 204,000 Works across 193 Collections in NUL's digitized archives",
      "Architected tech stack in NextJS, Radix UI, TypeScript, Stitches.dev, IIIF APIs, OpenSearch, Jest + TestingLibrary and maintain continuous integration staging/production deployments in AWS Amplify.",
      "Planned, managed and executed the project over 12 months from early-stage wire-framing, user-testing, requirements gathering and monthly Library open process demos.",
    ],
  },
  {
    description:
      "A IIIF Collection sourced site generator in Next.js for digital collections, humanities, and exhibitions",
    githubUrl: "https://github.com/canopy-iiif/canopy-iiif",
    href: "https://canopy-iiif.github.io/docs",
    image: "images/work/work-card-canopy.jpg",
    tags: ["TypeScript", "IIIF", "React", "Nextra", "Next.js", "Radix UI"],
    title: "Canopy IIIF",
    projectDescription: [
      "An open-source static site generator designed for fast creation, contextualization, and customization of a discovery-focused digital scholarship and collections website using IIIF APIs.",
      "Canopy is an open source site generator built with IIIF and Next.js.",
      "Using a IIIF Collection as a data source, Canopy IIIF generates a browseable and searchable static site and provides a straightforward solution using Markdown for adding scholary context to the resources that are referenced.",
    ],
  },
  {
    description:
      "Extensible IIIF front-end toolkit and Manifest viewer. Accessible. Composable. Open Source.",
    githubUrl: "https://github.com/samvera-labs/clover-iiif",
    href: "https://samvera-labs.github.io/clover-iiif/",
    image: "images/work/work-card-clover.jpg",
    tags: [
      "React",
      "IIIF",
      "TypeScript",
      "NPM",
      "Vite",
      "Radix UI",
      "Nextra",
      "Vitest",
    ],
    title: "Clover IIIF",
    projectDescription: [
      "Co-developer of React component library featuring 15+ exports designed for digital humanist developers composing modular IIIF (International Image Interoperability Framework) web applications.",
      "Focus on exceeding accessibility standards, Developer experience (DX), and clear, easy to read documentation.",
      "Built with: React, TypeScript, Vite (bundling/packaging), Nextra (documentation wrapper), Vitest, CSS in JS, and RadixUI.",
    ],
  },
  {
    description:
      "Speculative Annotation is a dynamic website, presenting items from the Library’s collections for students, teachers, and other users to annotate through captions, drawings, and other types of markmaking.",
    githubUrl: "https://github.com/adamjarling/loc-speculative-annotations",
    href: "https://labs.loc.gov/work/experiments/annotation/",
    image: "images/work/work-card-sa.jpg",
    tags: [
      "FabricJS",
      "React",
      "OpenSeadragon",
      "ChakraUI",
      "EmotionCSS",
      "Jest",
      "Testing Library",
    ],
    title: "Speculative Annotations",
    projectDescription: [
      "Lead Developer for “Speculative Annotations” Library of Congress Labs Artist in Residency project 2021.",
      "Created an interactive web experience for high-school students to annotate curated Digital Works from LOC archives. Students can draw, stamp, highlight, annotate, pose questions, type text, on a deep zoom canvas of the image.  They can further save their annotations and share with friends/teachers/classmates.",
    ],
  },
  {
    description:
      "Cryptocurrency trade forecasting/tracking system for swing trading",
    githubUrl: "",
    href: "https://trade-r.com/",
    image: "images/work/work-card-trader.jpg",
    tags: ["React", "Firebase", "FireStore", "ReCharts", "BulmaCSS"],
    title: "Trade-R",
    projectDescription: [
      "Built a trade forecasting/tracking system for cryptocurrency trading, providing individual and dashboard alerts when Stop trigger prices exceed user-defined thresholds",
      "Supports 8 global currency pairs (ie. BTC/USD, BTC/GBP, etc), and provides real-time crypto pricing information for end users for the top 100 market cap coins (BTC, ETH, etc).",
    ],
  },
  {
    description:
      "Connecting independent music venues and creators with the world. Ran by artists, for artists.",
    githubUrl: "",
    href: "https://www.zuma.live/",
    image: "images/work/work-card-zuma.jpg",
    tags: [
      "Vimeo API",
      "Supabase",
      "Stripe",
      "PostGreSQL",
      "API",
      "NextJS",
      "TailwindCSS",
      "SendGrid",
    ],
    title: "Zuma Live",
    projectDescription: [
      "Architected a full-stack, livestream video platform ticketing service connecting independent music venues, artists and digital concert attendees for 100+ events.",
      "In parallel, built an authenticated, multi-user tier administrative back-end to manage livestreams, customers, payments, venues, artists, billing, and real-time revenue forecasting / graph visualizations for over 2500 customers.",
      "A full stack architecture solution handling ticketing, payments and customer records built with Stripe, Supabase Auth, DB and File-storage, Vimeo API, NextJS, Custom API Middleware, PostGres, SendGrid, React Query, Chakra UI, TailwindCSS, Sentry, ChartJS and more.",
    ],
  },
];
