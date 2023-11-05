"use client";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Button from "@/components/Button";
import HeroImage from "@/components/Hero";
import BannerWrapper from "@/components/home/BannerWrapper";
import Main from "@/components/Main";
import ParallaxHero from "@/components/ParallaxHero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Main flushTop>
        <BannerWrapper />
        <Banner className="">
          <BannerHeadline>New Single Out Now</BannerHeadline>
          <p className="">Some subhead content here</p>
        </Banner>

        <Banner className="text-white bg-black">
          <BannerHeadline>Another Banner Headline</BannerHeadline>
          <p>Some subhead content here</p>
        </Banner>
      </Main>
    </>
  );
}
