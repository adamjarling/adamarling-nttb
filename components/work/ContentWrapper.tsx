"use client";

import { Button, ExternalLink } from "zuma-blocks";
import { FiDownload, FiGithub } from "react-icons/fi";
import React, { use } from "react";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import ProjectsGrid from "./ProjectsGrid";
import WorkCards from "./WorkCards";
import { workCards } from "@/data/work-cards";

const WorkContentWrapper = () => {
  return (
    <div className="">
      <div className="container max-w-4xl text-center">
        <div className="space-y-10">
          <p className="text-gray-300">
            I am a Senior Front End Engineer at{" "}
            <ExternalLink href="">
              Northwestern University Libraries
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://dc.library.northwestern.edu/about">
              Repository and Digital Curation
            </ExternalLink>
            . My team builds open-source web applications for digital humanists
            and researchers to enhance discoverability of digital records for
            Cultural Heritage.
          </p>

          <p className="flex flex-col items-center justify-center mt-6 mb-10 space-y-5 md:space-y-0 md:flex-row md:space-x-5">
            <ExternalLink
              classNames="button button-outline"
              href="https://github.com/adamjarling"
            >
              <FiGithub className="inline-block w-6 h-6 mr-2" />
              View Work on Github
            </ExternalLink>
            <ExternalLink
              classNames="button button-outline"
              href="https://github.com/adamjarling"
            >
              <FiDownload className="inline-block w-6 h-6 mr-2" />
              CV / Resume
            </ExternalLink>
          </p>

          <p>Here are some recent projects.</p>
        </div>
      </div>

      <ProjectsGrid />
    </div>
  );
};

export default WorkContentWrapper;
