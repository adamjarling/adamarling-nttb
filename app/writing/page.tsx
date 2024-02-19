"use client";

import ArticleList from "@/components/writing/ArticleList";
import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import BannerSubheadline from "@/components/banner/Subheadline";
import { ExternalLink } from "zuma-blocks";
import { FaMedium } from "react-icons/fa";
import Image from "next/image";
import Main from "@/components/Main";

const About = () => {
  return (
    <Main flushTop={false}>
      <Banner>
        <BannerHeadline>Writing</BannerHeadline>
        <BannerSubheadline>
          Having fun writing and sharing Front End Development tips and tricks
          on{" "}
          <ExternalLink href="https://medium.com/@adamjarling">
            Medium.com
          </ExternalLink>
        </BannerSubheadline>
      </Banner>

      <section className="container pb-16 mx-auto md:pt-6">
        <ArticleList />
      </section>

      <div className="flex items-center justify-center mb-20">
        <ExternalLink
          href="https://medium.com/@adamjarling"
          classNames="button button-outline"
        >
          <span className="flex items-center justify-center">
            <FaMedium className="w-6 h-6 mr-2" />
            <span>View All Articles on Medium</span>
          </span>
        </ExternalLink>
      </div>
    </Main>
  );
};

export default About;
