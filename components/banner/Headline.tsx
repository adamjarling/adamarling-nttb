"use client";

import React from "react";
import { motion } from "framer-motion";

interface BannerHeadlineProps {
  children: React.ReactNode;
}

const BannerHeadline: React.FC<BannerHeadlineProps> = ({ children }) => {
  return (
    <motion.h2
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="banner-headline"
    >
      {children}
    </motion.h2>
  );
};

export default BannerHeadline;
