"use client";

import { HeroImage } from "zuma-blocks";
import React from "react";

const HeroWrapper = () => {
  return (
    <HeroImage
      images={[
        {
          mediaQuery: `(max-width: 640px)`,
          src: "/images/adam-vigo.jpeg",
          srcSet: "/images/adam-vigo.jpeg",
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

export default HeroWrapper;
