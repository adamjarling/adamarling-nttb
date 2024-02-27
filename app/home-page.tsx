"use client";

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
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
          subHeadline="Hi, I'm Adam a developer &amp; musician based in Chicago. I make web apps for Northwestern University Libraries &amp; love blues music, traveling, reading, &amp; messing with my cat."
        />
        <Banner className="">
          <BannerHeadline>Hi / Hallo</BannerHeadline>
          <p className="">
            2024 is off to the races, and Casey and I have some big news coming
            up... In the meantime, check out some latest work:
          </p>
          <Link className="mt-5 button" href="/work">
            <span className="flex items-center justify-center">
              View Work <ArrowRightIcon className="w-5 h-5" />
            </span>
          </Link>
        </Banner>
      </Main>
    </>
  );
}
