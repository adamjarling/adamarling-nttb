import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import Main from "@/components/Main";
import { promises as fs } from "fs";
import path from "path";

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

  return (
    <Main>
      <section className="max-w-3xl py-8 mx-auto text-center">
        Something goes here
      </section>
      {images && <MasonryGallery dir={folder} images={images} />}
    </Main>
  );
};

export default GalleryPage;
