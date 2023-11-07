import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import BannerWrapper from "@/components/home/BannerWrapper";
import HeroWrapper from "./HeroWrapper";
import Main from "@/components/Main";
import { promises as fs } from "fs";
import path from "path";
import { shuffle } from "../utils/shuffle";

const sizeOf = require("image-size");

const folder = "masonry-images";

const GalleryPage = async () => {
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
    <Main flushTop={true}>
      <HeroWrapper />
      <section className="max-w-3xl py-8 mx-auto text-center">
        Something goes here
      </section>
      {images && <MasonryGallery dir={folder} images={shuffledImages} />}
    </Main>
  );
};

export default GalleryPage;
