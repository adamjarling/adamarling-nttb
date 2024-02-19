type MediumArticle = {
  imageUrl?: string;
  publishDate: string;
  publishedIn?: string;
  readingTime: string;
  subheading?: string;
  title: string;
  url: string;
};

export const articles: MediumArticle[] = [
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*w6atZNMuXTgUysw4XLlBHQ.jpeg",
    publishDate: "Feb 4, 2024",
    readingTime: "3 min read",
    subheading:
      "Unleash flexibility and security for your builds with Next.js’s environment variable system.",
    title:
      "Dive into Environment Variables in Next.js: Security, Flexibility, and CMS Integration",
    url: "https://medium.com/@adamjarling/dive-into-environment-variables-in-next-js-security-flexibility-and-cms-integration-8f04b19447b1?sk=dc9828b017a34916f0861379ae28911b",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*VW5z5rDyB1oE9aNmWMxocw.png",
    publishDate: "Jul 7, 2023",
    readingTime: "7 min read",
    subheading: "",
    title: "Getting started with GitHub Copilot for Front End Developers",
    url: "https://medium.com/@adamjarling/getting-started-with-github-copilot-for-front-end-developers-8c06806b2756?sk=93cfc68603686707f621a730c311d4be",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*-ZIyLRPu3BGrwir4EqKYQg.jpeg",
    publishDate: "Feb 28, 2023",
    publishedIn: "JavaScript in Plain English",
    readingTime: "3 min read",
    subheading:
      "When working on large projects with multiple contributors, it can be challenging to maintain a consistent coding style. This is important…",
    title:
      "Get Organized: How to Auto Sort Your JavaScript Imports with ESLint",
    url: "https://medium.com/javascript-in-plain-english/get-organized-how-to-auto-sort-your-javascript-imports-in-vscode-34d786972112?sk=4cbb38a1b451efdbd79ae89dc52c045d",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*vcNKjHivrf7fiobBRgl0EA.jpeg",
    publishDate: "Feb 23, 2023",
    readingTime: "4 min read",
    subheading:
      "TypeScript is a powerful programming language that adds optional static typing and other advanced features to JavaScript. A key feature is…",
    title: "Create flexible functions using TypeScript generics",
    url: "https://medium.com/@adamjarling/how-to-use-generics-in-typescript-functions-c6f69c9af5ee?sk=2ea6fdf3ccbddfa5019580a386b8e3f8",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Uaa_I0UW0uaWFQ_nVG2OYQ.jpeg",
    publishDate: "Mar 11, 2022",
    publishedIn: "JavaScript in Plain English",
    readingTime: "4 min read",
    subheading: "Automate the task to catch type errors in Next.js",
    title: "Catch TypeScript Errors in Next.js Before Building Your App",
    url: "https://medium.com/javascript-in-plain-english/catch-typescript-errors-in-nextjs-before-building-your-app-df129682ee5c",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*XYEs0ooJcS68pDPIseKXUA.png",
    publishDate: "Jan 3, 2022",
    publishedIn: "JavaScript in Plain English",
    readingTime: "7 min read",
    subheading:
      "Looking for a simple, straightforward, development environment for a React component(s) that can be bundled and packaged for NPM…",
    title:
      "Build and Package an NPM Component with esbuild, React and TypeScript",
    url: "https://medium.com/javascript-in-plain-english/develop-and-publish-a-react-component-with-esbuild-and-typescript-3eb756adda6e?sk=9dd16b69b6e9dc35fe3a3c56bca4bd6b",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*qNxKt-9OmzfjFsPv6LfEKQ.png",
    publishDate: "Sept 27, 2020",
    publishedIn: "JavaScript in Plain English",
    readingTime: "6 min read",
    subheading:
      "React Hook Form is an incredibly useful package for building out simple to complex web forms. This article illustrates our team’s approach…",
    title: "Using React Hook Form in component tests",
    url: "https://medium.com/javascript-in-plain-english/using-react-hook-form-in-component-tests-497180abf3c0?sk=3533d031dbcb160881ef7df8403c13b9",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*NJjkxHR5me0aXbmWFY9abA.jpeg",
    publishDate: "Aug 27, 2020",
    publishedIn: "In The Startup",
    readingTime: "3 min read",
    subheading:
      "Learn how to create preview images for your Static Site generator project (for example Gatsby), using the Open Graph protocol.",
    title: "Share Website Preview Images in Gatsby",
    url: "https://medium.com/swlh/share-website-preview-images-in-gatsby-10cac58dd4d7",
  },
  {
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*_hmhjPbBJ_CPTNb_EE8w8w.png",
    publishDate: "Sept 24, 2019",
    publishedIn: "",
    readingTime: "2 min read",
    subheading:
      "Recently our UI team has switched from Enzyme to Kent Dodd’s Testing Library for a much improved, simplified experience in testing…",
    title: "Mocking a React Router match object in your component tests",
    url: "https://medium.com/@adamjarling/mocking-a-react-router-match-object-in-your-component-tests-fa95904dcc55?sk=66cc5372a3ede67fa115db6422f440bf",
  },
];
