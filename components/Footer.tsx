"use client";

import { footerNav, footerSocials } from "@/data/footer";

import { FooterSimpleCentered } from "zuma-blocks";
import React from "react";
import { config } from "@/nttb-config";

const Footer = () => {
  return (
    <FooterSimpleCentered
      bandName={config.SITE.name}
      className="bg-transparent border-t border-gray-800"
      nav={footerNav}
      socials={footerSocials}
    />
  );
};

export default Footer;
