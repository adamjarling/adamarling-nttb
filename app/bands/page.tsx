import BandsCardList from "@/components/bands/CardList";
import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import BannerSubheadline from "@/components/banner/Subheadline";
import Image from "next/image";
import Main from "@/components/Main";

const Bands = () => {
  return (
    <Main flushTop={false}>
      <Banner>
        <BannerHeadline>Music</BannerHeadline>
        <BannerSubheadline>
          Here are some of the projects I&apos;ve played guitar and bass in
          throughout the years..
        </BannerSubheadline>
      </Banner>

      <BandsCardList />
    </Main>
  );
};

export default Bands;
