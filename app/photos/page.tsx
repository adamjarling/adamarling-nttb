import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import BannerSubheadline from "@/components/banner/Subheadline";
import Image from "next/image";
import Main from "@/components/Main";
import { promises as fs } from "fs";
import { motion } from "framer-motion";
import path from "path";
import { shuffle } from "../utils/shuffle";

const sizeOf = require("image-size");

const folder = "photos";

const PhotosPage = async () => {
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
    <Main flushTop={false}>
      <Banner>
        <BannerHeadline>Photos</BannerHeadline>
        <BannerSubheadline>
          Some random photos... friends, family always new adventures.
          Disclaimer: my better half makes me awkwardly pose for photos a lot...
          I’m really not that ego maniacal.
        </BannerSubheadline>
      </Banner>

      <MasonryGallery images={shuffledImages} />
    </Main>
  );
};

export default PhotosPage;
