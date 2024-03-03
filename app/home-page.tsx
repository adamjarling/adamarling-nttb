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
          subHeadline="I’m Adam, a front end engineer and musician based in Chicago. I work in the cultural heritage space and develop user-centric JavaScript apps that empower research and discovery."
        />
      </Main>
    </>
  );
}
