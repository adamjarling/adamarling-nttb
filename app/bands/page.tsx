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
        <BannerHeadline>Bands</BannerHeadline>
        <BannerSubheadline>
          Yea, I like to rock too 😀 Toured everywhere in USA and Europe with my
          best friends, playing basement caves to Madison Square Garden.
          It&apos;s been quite a trip, so thanks Mom for making us take piano
          lessons.
        </BannerSubheadline>
      </Banner>

      <BandsCardList />
    </Main>
  );
};

export default Bands;
