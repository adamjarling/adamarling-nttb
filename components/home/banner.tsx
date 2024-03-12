"use client";

import ParallaxHero from "@/components/ParallaxHero";

export default function Banner() {
  return (
    <>
      <ParallaxHero
        imageUrl="/images/adam-porto-wall.jpg"
        headline="Front End Engineer & Musician"
        altText="Porto, Porgtual street art"
        subHeadline="I’m Adam, a front end engineer and musician based in Chicago. I work in the cultural heritage space and develop user-centric JavaScript apps that empower research and discovery."
      />
    </>
  );
}
