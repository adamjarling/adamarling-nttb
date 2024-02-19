"use client";

import { ExternalLink } from "zuma-blocks";
import Image from "next/image";
import React from "react";
import { articles } from "@/data/medium-articles";
import { motion } from "framer-motion";

const ArticleList = () => {
  return (
    <ul className="space-y-16">
      {articles.map((article, index) => (
        <li
          key={article.title}
          className="grid grid-cols-1 gap-6 md:grid-cols-12"
        >
          <div className="col-span-1 md:col-span-3">
            <Image
              className="rounded-lg"
              src={article.imageUrl || "/images/placeholder.jpg"}
              alt={article.title}
              width={500}
              height={500}
            />
          </div>
          <div className="col-span-1 space-y-2 md:col-span-9">
            <ExternalLink href={article.url} classNames="no-underline">
              <motion.h2
                className="text-2xl normal-case"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
              >
                {article.title}
              </motion.h2>
            </ExternalLink>

            <p className="text-gray-400">{article.subheading}</p>
            <div className="flex text-gray-300">
              <span className="">Published on {article.publishDate}</span>
              <span className="pl-5">{article.readingTime}</span>
              {article.publishedIn && (
                <span className="pl-5">{article.publishedIn}</span>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
