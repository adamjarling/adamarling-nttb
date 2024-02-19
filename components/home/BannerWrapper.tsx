"use client";

import { HeroImage } from "zuma-blocks";
import React from "react";

const mobilePic = "/images/IMG_7183.jpg";
const desktopPic = "/images/adam-metal-banner-cropped.jpg";

const BannerWrapper = () => {
  return (
    <HeroImage
      images={[
        {
          mediaQuery: `(max-width: 640px)`,
          src: desktopPic,
          srcSet: desktopPic,
        },
        {
          mediaQuery: "(min-width: 641px)",
          src: desktopPic,
          srcSet: desktopPic,
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
