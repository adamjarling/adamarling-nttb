import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";

type ParallaxHeroProps = {
  headline: string;
  imageUrl: string;
  altText: string;
  subHeadline?: string;
  Button?: React.ReactNode;
};

const MotionImage = motion(Image);

const ParallaxHero: React.FC<ParallaxHeroProps> = ({
  headline,
  imageUrl,
  altText,
  subHeadline,
  Button,
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0", "10%"]);

  return (
    <div className="relative w-full overflow-hidden h-[80vh]">
      <div className="absolute z-10 w-full h-32 bg-transparent opacity-50 bg-gradient-to-t from-transparent to-black" />
      <MotionImage
        style={{ y }}
        src={imageUrl}
        alt={altText}
        fill
        className="z-0 object-cover"
      />
      <div className="container absolute z-10 w-full mt-20 text-center transform -translate-x-1/2 lg:mt-24 lg:text-left left-1/2">
        <div className="lg:max-w-md">
          <h1 className="inline-block mb-4 text-4xl leading-none text-white md:text-6xl">
            {headline}
          </h1>
          {subHeadline && (
            <p className="max-w-sm mx-auto mb-5 text-lg text-white md:max-w-md md:text-xl">
              {subHeadline}
            </p>
          )}
          {Button && Button}
        </div>
      </div>
    </div>
  );
};

export default ParallaxHero;
