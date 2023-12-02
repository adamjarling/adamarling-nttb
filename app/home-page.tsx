import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import BannerWrapper from "@/components/home/BannerWrapper";
import Button from "@/components/Button";
import HeroImage from "@/components/Hero";
import Main from "@/components/Main";
import ParallaxHero from "@/components/ParallaxHero";
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
          <BannerHeadline>Europe 2023</BannerHeadline>
          <p className="">
            Super excited to be touring in Spain, England and Scotland with the
            gentlemen in Warrior Soul.
          </p>
        </Banner>

        {images && <MasonryGallery dir={folder} images={shuffledImages} />}

        {/* <Banner className="text-white bg-black">
          <BannerHeadline>Another Banner Headline</BannerHeadline>
          <p>Some subhead content here</p>
        </Banner> */}
      </Main>
    </>
  );
}
