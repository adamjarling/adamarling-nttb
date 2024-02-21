import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Image from "next/image";
import Main from "@/components/Main";
import BannerSubheadline from "@/components/banner/Subheadline";

const About = () => {
  return (
    <Main flushTop={false}>
      <Banner>
        <BannerHeadline>C.V.</BannerHeadline>
        <BannerSubheadline>Available upon request...</BannerSubheadline>
      </Banner>

      {/* <section className="container">
        <iframe
          src="/assets/Adam J. Arling - Senior Front End Developer.pdf#zoom=100&&navpanes=0"
          title="Adam's CV"
          width="100%"
          height="1600px"
        ></iframe>
      </section> */}
    </Main>
  );
};

export default About;
