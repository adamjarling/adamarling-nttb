import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Image from "next/image";
import Main from "@/components/Main";

const About = () => {
  return (
    <Main flushTop={false}>
      <Banner>
        <BannerHeadline>About</BannerHeadline>
      </Banner>

      <section className="text-center section">Some text goes here</section>
    </Main>
  );
};

export default About;
