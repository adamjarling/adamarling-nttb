"use client";

import React, { use } from "react";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { ExternalLink } from "zuma-blocks";
import { FiGithub } from "react-icons/fi";
import WorkCards from "./WorkCards";
import { workCards } from "@/data/work-cards";

const WorkContentWrapper = () => {
  return (
    <div className="">
      <div className="container max-w-4xl text-center">
        <p>
          I&apos;m a Senior Front End Engineer / Manager at{" "}
          <ExternalLink href="">Northwestern University Libraries</ExternalLink>
          ,{" "}
          <ExternalLink href="https://dc.library.northwestern.edu/about">
            Repository and Digital Curation
          </ExternalLink>
          . Our teams builds open-source web applications to empower
          discoverability of Cultural Heritage assets for researchers in the
          Humanities. Here&apos;s some of our work.
        </p>

        <ul className="my-10 space-y-10">
          {workCards.map((workCard, index) => (
            <li className="space-y-2" key={index}>
              <h3 className="text-2xl">{workCard.title}</h3>
              <p className="text-gray-400">{workCard.description}</p>
              <div className="flex items-center justify-center space-x-3">
                <a href={workCard.href}>
                  <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                </a>
                <a href={workCard.githubUrl}>
                  <FiGithub className="w-6 h-6" />
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p>Tag cloud goes here of tools used</p>

        {/* <p>
          I build stuff in TypeScript, React, Next.js, Vite, and publish
          component libraries to NPM for the world to use and share.
        </p> */}
      </div>
    </div>
  );
};

export default WorkContentWrapper;
