import BandsCardList from "@/components/bands/CardList";
import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Image from "next/image";
import Main from "@/components/Main";

const Bands = () => {
  return (
    <Main flushTop={false}>
      <Banner>
        <BannerHeadline>Bands</BannerHeadline>
      </Banner>

      <BandsCardList />
    </Main>
  );
};

export default Bands;
