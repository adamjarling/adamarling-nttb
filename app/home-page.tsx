"use client";

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import BannerWrapper from "@/components/home/BannerWrapper";
import Button from "@/components/Button";
import Link from "next/link";
import Main from "@/components/Main";
import ParallaxHero from "@/components/ParallaxHero";

export default function Home() {
  return (
    <>
      <Main flushTop>
        <ParallaxHero
          imageUrl="/images/adam-porto.jpeg"
          headline="Front End Engineer & Musician"
          altText="Porto, Porgtual street art"
          subHeadline="Hi, I'm Adam a developer &amp; musician based in Chicago. I make web apps for Northwestern University Libraries &amp; love blues music, traveling, reading, and messing with my cat."
        />
        <Banner className="">
          <BannerHeadline>Hi / Hallo</BannerHeadline>
          <p className="">
            Check out some of the latest projects I&apos;ve been working on...
          </p>
          <Link className="mt-5 button" href="/work">
            <span className="flex items-center justify-center">
              View Work <ArrowRightIcon className="w-5 h-5" />
            </span>
          </Link>
        </Banner>

        {/* <Banner className="text-white bg-black">
          <BannerHeadline>Another Banner Headline</BannerHeadline>
          <p>Some subhead content here</p>
        </Banner> */}
      </Main>
    </>
  );
}
