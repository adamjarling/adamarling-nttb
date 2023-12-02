"use client";

import { FiFacebook, FiInstagram } from "react-icons/fi";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { ExternalLink } from "zuma-blocks";
import Image from "next/image";
import React from "react";
import { bands } from "data/bands";

const BandsCardList = () => {
  return (
    <div className="mb-10 space-y-10">
      {bands.map((band) => {
        return (
          // Render a div which uses the bands.photo as a background image

          <div className="relative h-96 md:h-144" key={band.name}>
            {/* Render image tag with src of bands.photo and is absolutely positioned so text can lay over it */}
            {band.photo && (
              <Image
                src={band.photo}
                alt={band.name}
                className="absolute object-cover w-full h-full"
              />
            )}

            <div className="absolute bottom-0 w-full h-72 bg-gradient-to-b from-transparent to-black" />
            <div className="absolute bottom-0 w-full px-5 py-1 space-y-1">
              {band.logo && (
                <Image
                  src={band.logo}
                  alt={band.name}
                  className="w-auto h-20 mb-4 md:h-36"
                />
              )}
              {!band.logo && <h3 className="text-5xl">{band.name}</h3>}
              <div className="grid grid-cols-12">
                <ul className="col-span-8 pr-3 text-sm text-gray-400 md:text-lg">
                  <li>{band.description}</li>
                  <li>
                    <i>{band.years}</i>
                  </li>
                  <li>{band.position}</li>
                </ul>
                <div className="flex items-end justify-end col-span-4 space-x-2 lg:space-x-4">
                  {band.url.website && (
                    <ExternalLink href={band.url.website}>
                      <ArrowTopRightOnSquareIcon className="w-6 h-6 md:w-8 md:h-8" />
                    </ExternalLink>
                  )}
                  {band.url.facebook && (
                    <ExternalLink href={band.url.facebook}>
                      <FiFacebook className="w-6 h-6 md:w-8 md:h-8" />
                    </ExternalLink>
                  )}
                  {band.url.instagram && (
                    <ExternalLink href={band.url.instagram}>
                      <FiInstagram className="w-6 h-6 md:w-8 md:h-8" />
                    </ExternalLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BandsCardList;
