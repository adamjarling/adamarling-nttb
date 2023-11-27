import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Main from "@/components/Main";
import WorkContentWrapper from "@/components/work/ContentWrapper";

const WorkPage = () => {
  return (
    <Main>
      <Banner className="">
        <BannerHeadline>Work</BannerHeadline>
      </Banner>

      <WorkContentWrapper />
    </Main>
  );
};

export default WorkPage;
