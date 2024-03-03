import { motion, useScroll, useTransform } from "framer-motion";

import HomeBannerSocials from "./home/BannerSocials";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full overflow-hidden h-[100vh]"
    >
      <div className="absolute z-10 w-full bg-transparent opacity-50 h-80 md:h-2/3 lg:h-32 bg-gradient-to-t from-transparent to-black" />

      <MotionImage
        //style={{ y }}
        src={imageUrl}
        alt={altText}
        fill
        className="z-0 object-cover opacity-85"
      />
      {/* gradient overlay left side of viewport */}
      <div className="absolute w-2/3 h-screen bg-transparent opacity-60 bg-gradient-to-l from-transparent to-black" />

      <div className="container absolute z-10 w-full mt-32 text-center transform -translate-x-1/2 md:mt-40 lg:mt-24 lg:text-left left-1/2">
        <div className="lg:max-w-md">
          <h1 className="inline-block mb-4 text-4xl leading-none text-white md:text-6xl">
            {headline}
          </h1>
          {subHeadline && (
            <p className="hidden max-w-sm mx-auto mb-5 text-lg font-thin text-white md:inline bg-opacity-80 md:max-w-md md:text-xl">
              {subHeadline}
            </p>
          )}
          {Button && Button}

          <HomeBannerSocials />
        </div>
      </div>
    </motion.div>
  );
};

export default ParallaxHero;
