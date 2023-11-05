"use client";

import { motion } from "framer-motion";
import React from "react";

const PageTitleBanner = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-title">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 1 }}
      >
        {children}
      </motion.h1>
    </div>
  );
};

export default PageTitleBanner;
