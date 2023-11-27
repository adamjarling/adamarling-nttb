import Image from "next/image";
import React from "react";
import tlvPic from "public/images/bands/tlv-old-school-loft.jpg";

const bands = [
  {
    description: "Hard rock band from Chicago, Illinois, USA.",
    logo: "",
    name: "The Last Vegas",
    photo: tlvPic,
    url: {
      facebook: "",
      instagram: "",
      website: "",
    },
    years: "2000 - current",
  },
  {
    description: "Hard rock band from Chicago, Illinois, USA.",
    logo: "",
    name: "The Last Vegas",
    photo: tlvPic,
    url: {
      facebook: "",
      instagram: "",
      website: "",
    },
    years: "2000 - current",
  },
];

const BandsCardList = () => {
  return (
    <div className="grid grid-cols-1 gap-3 mb-10 md:grid-cols-2">
      {bands.map((band) => {
        return (
          // Render a div which uses the bands.photo as a background image

          <div className="relative h-96" key={band.name}>
            {/* Render image tag with src of bands.photo and is absolutely positioned so text can lay over it */}
            <Image
              src={band.photo}
              alt={band.name}
              className="absolute object-cover w-full h-full"
            />
            <div className="absolute bottom-0 w-full h-36 bg-gradient-to-b from-transparent to-black" />
            <div className="absolute w-full bottom-3 left-3">
              <h3 className="text-3xl">{band.name}</h3>
              <p className="mb-0 text-gray-400">{band.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BandsCardList;
