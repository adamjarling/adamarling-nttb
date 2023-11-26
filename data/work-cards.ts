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
      "International Image Interoperability Framework (IIIF) Image and Media Viewer",
    githubUrl: "https://github.com/samvera-labs/clover-iiif",
    href: "https://samvera-labs.github.io/clover-iiif/",
    image: "",
    tags: ["React", "IIIF", "TypeScript", "NPM"],
    title: "Clover IIIF Viewer",
  },
];
