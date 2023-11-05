const siteTitle = "Next.js TypeScript Tailwind Boilerplate";
const ogImage = "/images/simone-secci-WNLzDp4elWs-unsplash.jpg";
const url = "https://adamarling.com";

const config = {
  OPEN_GRAPH: {
    description: "Showcasing the ..",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/api/og?cover=${encodeURIComponent(ogImage)}`,
      },
    ],
    locale: "en-US",
    siteName: siteTitle,
    title: siteTitle,
    type: "website",
    url,
  },
  SITE: {
    description: "Description of the site",
    name: "My Website",
    title: siteTitle,
    url,
  },
};

const nav = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/masonry-gallery",
    label: "Masonry Gallery",
  },
  {
    href: "/shows",
    label: "Shows",
  },
];

const socialMedia = {
  instagram: {
    handle: "",
    url: "",
  },
  facebook: {
    handle: "",
    url: "",
  },
  twitter: {
    handle: "",
    url: "",
  },
  spotify: {
    handle: "",
    url: "",
  },
  youTube: {
    handle: "",
    url: "",
  },
};

export { config, nav, socialMedia };
