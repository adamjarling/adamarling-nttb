"use client";

import { HeroImage } from "zuma-blocks";
import React from "react";

const BannerWrapper = () => {
  return (
    <HeroImage
      images={[
        {
          mediaQuery: `(max-width: 640px)`,
          src: "/images/IMG_1697.jpg ",
          srcSet: "/images/IMG_1697.jpg",
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
