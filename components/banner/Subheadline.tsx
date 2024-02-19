"use client";

import React, { ReactNode } from "react";

import { motion } from "framer-motion";

const BannerSubheadline = ({ children }: { children: ReactNode }) => {
  return (
    <motion.p
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="max-w-4xl mx-auto text-gray-300"
    >
      {children}
    </motion.p>
  );
};

export default BannerSubheadline;
