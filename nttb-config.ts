const siteTitle =
  "Adam J. Arling - rock, blues guitarist, bassist and front end engineer living in Chicago USA";
const ogImage = "/images/simone-secci-WNLzDp4elWs-unsplash.jpg";
const url = "https://adamarling.com";

const description =
  "Adam J. Arling is a musician and front end engineer living in Chicago USA";

const config = {
  OPEN_GRAPH: {
    description,
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
    description,
    name: "Adam J. Arling",
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
