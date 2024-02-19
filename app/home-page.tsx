import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import BannerWrapper from "@/components/home/BannerWrapper";
import Button from "@/components/Button";
import HeroImage from "@/components/Hero";
import Main from "@/components/Main";
import ParallaxHero from "@/components/ParallaxHero";
import WorkContentWrapper from "@/components/work/ContentWrapper";
import { promises as fs } from "fs";
import { motion } from "framer-motion";
import path from "path";
import { shuffle } from "./utils/shuffle";

const sizeOf = require("image-size");

const folder = "masonry-images";

export default async function Home() {
  // Get filenames from a directory
  const imageDirectory = path.join(process.cwd(), `/public/${folder}`);
  const imageFilenames = (await fs.readdir(imageDirectory)).filter(
    (f) => f !== ".DS_Store"
  );

  const images = imageFilenames.map((ifn): MasonryImage => {
    const dimensions = sizeOf(`${imageDirectory}/${ifn}`);
    return {
      filename: `/${folder}/${ifn}`,
      ...dimensions,
    };
  });

  const shuffledImages = shuffle(images);

  return (
    <>
      <Main flushTop>
        <BannerWrapper />
        <Banner className="">
          <BannerHeadline>Hi / Hallo!</BannerHeadline>
          <div className="container max-w-4xl text-center text-gray-300">
            <p className="">
              My name is Adam, and I am a Senior Front End Developer from
              Chicago USA, creating exceptional user experiences using
              JavaScript, React, TypeScript, NextJS, and API-driven development.
            </p>
            <p>
              I have been fortunate to work in the following sectors: Cultural
              Heritage, Financial Services, Consulting, Digital Agencies,
              Entertainment Industry and Start-ups. I love working with teams,
              making new friends, learning from diverse viewpoints, and commited
              to staying on the bleeding edge of Front End Engineering trends
              and best practices.
            </p>
          </div>
        </Banner>
        <p className="py-20 text-center">2x2 grid of Main Nav cards</p>
      </Main>
    </>
  );
}
