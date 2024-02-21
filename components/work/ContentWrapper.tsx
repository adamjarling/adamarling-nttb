"use client";

import { FiDownload, FiGithub } from "react-icons/fi";

import { ExternalLink } from "zuma-blocks";
import Link from "next/link";
import ProjectsGrid from "./ProjectsGrid";
import React from "react";

const subheadText =
  "I have 16+ years of experience in React, TypeScript, JavaScript, and building scalable web applications. Deep understanding of component-based architecture and extensive knowledge of modern front end frameworks and libraries. Excited to leverage expertise in creating exceptional user experiences, lead development teams, and drive innovation in front end development.";

const WorkContentWrapper = () => {
  return (
    <div className="">
      <div className="container max-w-4xl text-center">
        <div className="space-y-10">
          <p className="text-gray-300">
            I have 16+ years of experience in React, TypeScript, JavaScript, and
            building scalable web applications. I am a Senior Developer at{" "}
            <ExternalLink href="">
              Northwestern University Libraries
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://dc.library.northwestern.edu/about">
              Repository and Digital Curation
            </ExternalLink>
            , where we build open-source, web applications for scholarly
            research in Cultural Heritage and the humanities. I also am very
            curious about blockchain technology and distributed systems, and
            decentralization.
          </p>

          <div className="flex flex-col items-center justify-center mt-6 mb-10 space-y-5 md:space-y-0 md:flex-row md:space-x-5">
            <ExternalLink
              classNames="button button-outline"
              href="https://github.com/adamjarling"
            >
              <FiGithub className="inline-block w-6 h-6 mr-2" />
              View Work on Github
            </ExternalLink>
            <Link className="button button-outline" href="/cv">
              <FiDownload className="inline-block w-6 h-6 mr-2" />
              CV / Resume
            </Link>
          </div>
        </div>
      </div>

      <ProjectsGrid />

      {/* <div className="container">
        <p className="py-20 text-center">
          Include a grid 2x2 here of other highlighted sites
        </p>
      </div> */}
    </div>
  );
};

export default WorkContentWrapper;
