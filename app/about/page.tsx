import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Image from "next/image";
import Main from "@/components/Main";
import ParallaxVideo from "@/components/ParallaxVideo";
import casey from "@/public/images/IMG_0221.jpg";

const About = () => {
  return (
    <Main flushTop={true}>
      <ParallaxVideo altText="Some alt text" videoUrl="/IMG_9825.mp4" />
      <Banner>
        <BannerHeadline>About</BannerHeadline>
      </Banner>

      <Image src={casey} alt="Casey artwork" />
      <section className="text-center section">Some text goes here</section>
    </Main>
  );
};

export default About;
