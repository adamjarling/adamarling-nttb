import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import BannerSubheadline from "@/components/banner/Subheadline";
import Main from "@/components/Main";

const CV = () => {
  return (
    <Main flushTop={false}>
      <Banner>
        <BannerHeadline>CV</BannerHeadline>
        <BannerSubheadline>
          Please find my CV below. Created using Figma.
        </BannerSubheadline>
      </Banner>

      <section className="container">
        <iframe
          src="/assets/Adam_J_Arling_Front_End_Engineer.pdf#zoom=100&&navpanes=0"
          title="Adam's CV"
          width="100%"
          height="1600px"
        ></iframe>
      </section>
    </Main>
  );
};

export default CV;
