export type WorkCard = {
  description: string;
  title: string;
  githubUrl?: string;
  href: string;
  image: string;
  tags?: string[];
};

export const workCards: WorkCard[] = [
  {
    description: "Northwestern University Libraries Digital Collections app",
    githubUrl: "https://github.com/nulib/dc-nextjs",
    href: "https://dc.library.northwestern.edu/",
    image: "",
    tags: ["React", "Next.js", "TypeScript", "Radix UI", "AWS"],
    title: "NUL Digital Collections",
  },
  {
    description:
      "An open-source static site generator designed for fast creation, contextualization, and customization of a discovery-focused digital scholarship and collections website using IIIF APIs.",
    githubUrl: "https://github.com/canopy-iiif/canopy-iiif",
    href: "https://canopy-iiif.github.io/docs",
    image: "",
    tags: ["TypeScript", "IIIF", "React", "Nextra", "Next.js", "Radix UI"],
    title: "Canopy IIIF",
  },
  {
    description:
      "Extensible IIIF front-end toolkit and Manifest viewer. Accessible. Composable. Open Source.",
    githubUrl: "https://github.com/samvera-labs/clover-iiif",
    href: "https://samvera-labs.github.io/clover-iiif/",
    image: "",
    tags: ["React", "IIIF", "TypeScript", "NPM"],
    title: "Clover IIIF Component Library",
  },
  {
    description:
      "Northwestern University Libraries Repository management application",
    githubUrl: "https://github.com/nulib/meadow",
    href: "https://meadow.library.northwestern.edu/login",
    image: "",
    tags: ["React", "Elixir", "GraphQL", "ElasticSearch", "ESBuild", "Jest"],
    title: "Meadow",
  },
  {
    description:
      "Connecting independent music venues and creators with the world. Ran by artists, for artists.",
    githubUrl: "",
    href: "https://www.zuma.live/",
    image: "",
    tags: [
      "TypeScript",
      "Supabase",
      "Stripe",
      "PostGreSQL",
      "API",
      "NextJS",
      "TailwindCSS",
    ],
    title: "Zuma Live",
  },
];
