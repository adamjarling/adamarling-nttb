import React, { use } from "react";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { ExternalLink } from "zuma-blocks";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import WorkCards from "./WorkCards";
import { motion } from "framer-motion";
import { workCards } from "@/data/work-cards";

const ProjectsGrid = () => {
  return (
    <section className="container pt-10">
      <ul className="grid grid-cols-1 gap-16 mb-10 lg:gap-24 lg:grid-cols-2">
        {workCards.map((workCard, index) => (
          <motion.li
            className="flex flex-col items-center justify-start space-y-8 text-center"
            key={index}
            whileInView={{ opacity: 1, y: 1 }}
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 2 }}
          >
            <div className="w-full border-t border-gray-800" />
            <h3 className="py-5 text-4xl break-words md:text-7xl">
              {workCard.title}
            </h3>
            <Image
              alt={workCard.title}
              className="w-full h-auto rounded-lg"
              height={800}
              src={`/${workCard.image}`}
              sizes="100vw"
              width={1280}
            />

            <div className="break-words">
              <ExternalLink href={workCard.href}>
                <span className="flex items-center justify-center text-lg">
                  {workCard.href}{" "}
                  <ArrowTopRightOnSquareIcon className="pl-2 w-7 h-7" />
                </span>
              </ExternalLink>
            </div>

            {/* <p className="text-gray-400">{workCard.description}</p> */}
            <ul className="pl-3 text-left text-gray-300">
              {workCard.projectDescription &&
                workCard.projectDescription.map((desc, index) => (
                  <li key={index} className="pb-3 list-disc">
                    {desc}
                  </li>
                ))}
            </ul>
            <div className="flex items-center justify-center space-x-5">
              <a href={workCard.href} title="View website">
                <ArrowTopRightOnSquareIcon className="w-7 h-7" />
              </a>
              <a href={workCard.githubUrl} title="View on Github">
                <FiGithub className="w-7 h-7" />
              </a>
            </div>
            <div className="flex flex-wrap justify-center">
              {workCard.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="p-2 m-2 text-xs text-gray-400 bg-gray-800 rounded-lg lg:text-sm "
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsGrid;
