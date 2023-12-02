const siteTitle =
  "Adam J. Arling - rock, blues guitarist, bassist and front end engineer living in Chicago USA";
const ogImage = "/images/adam-vigo.jpeg";
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

export type Nav = {
  href: string;
  name: string;
};

const nav: Array<Nav> = [
  // {
  //   href: "/about",
  //   name: "About",
  // },
  {
    href: "/bands",
    name: "Bands",
  },
  {
    href: "/work",
    name: "Work",
  },
];

const socialMedia = {
  facebook: {
    handle: "adam.arling",
    url: "https://www.facebook.com/adam.arling/",
  },
  github: {
    handle: "adamjarling",
    url: "https://github.com/adamjarling",
  },
  instagram: {
    handle: "adamjarling",
    url: "https://www.instagram.com/adamjarling/",
  },
  twitter: {
    handle: "AdamJArling",
    url: "https://twitter.com/AdamJArling",
  },
};

export { config, nav, socialMedia };
