"use client";

import { HeroImage } from "zuma-blocks";
import React from "react";

const BannerWrapper = () => {
  return (
    <HeroImage
      images={[
        {
          mediaQuery: `(max-width: 640px)`,
          src: "../masonry-images/310692583_534548905340415_6981777318805823681_n.jpeg",
          srcSet:
            "../masonry-images/310692583_534548905340415_6981777318805823681_n.jpeg",
        },
        {
          mediaQuery: "(min-width: 641px)",
          src: "/images/adam-vigo.jpeg",
          srcSet: "/images/adam-vigo.jpeg",
        },
        // {
        //   mediaQuery: "",
        //   src: "/images/the-midnight-calls_promo-pic.jpg",
        //   srcSet: "/images/the-midnight-calls_promo-pic.jpg",
        // },
      ]}
    />
  );
};

export default BannerWrapper;
