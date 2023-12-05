"use client";

import { Button, ExternalLink } from "zuma-blocks";
import React, { use } from "react";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
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
          Humanities.
        </p>

        <p className="py-5">
          <ExternalLink
            classNames="px-8 py-4 no-underline border-teal-400 uppercase mt-3 mb-5 inline-block border"
            href="https://github.com/adamjarling"
          >
            <FiGithub className="inline-block w-6 h-6 mr-2" />
            View Work on Github
          </ExternalLink>
        </p>

        <p>Here are some recent projects.</p>

        <ul className="my-10 space-y-16">
          {workCards.map((workCard, index) => (
            <li className="space-y-2" key={index}>
              <h3 className="text-2xl">{workCard.title}</h3>
              <p className="text-gray-400">{workCard.description}</p>
              <div className="flex items-center justify-center space-x-5">
                <a href={workCard.href}>
                  <ArrowTopRightOnSquareIcon className="w-7 h-7" />
                </a>
                <a href={workCard.githubUrl}>
                  <FiGithub className="w-7 h-7" />
                </a>
              </div>
              <div className="pt-3">
                {workCard.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="p-2 mr-2 text-sm text-gray-400 bg-gray-800 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>

        {/* <p>Tag cloud goes here of tools used</p> */}

        {/* <p>
          I build stuff in TypeScript, React, Next.js, Vite, and publish
          component libraries to NPM for the world to use and share.
        </p> */}
      </div>
    </div>
  );
};

export default WorkContentWrapper;
