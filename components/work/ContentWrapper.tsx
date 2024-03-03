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
            I’ve been a Front End Engineer / UI Developer / JavaScript app
            builder for over 16 years, working in consulting, cultural heritage,
            the financial sector, arts & entertainment industry and top digital
            agencies. Here is a few random recent projects. Check out my Github
            link below!
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
    </div>
  );
};

export default WorkContentWrapper;
