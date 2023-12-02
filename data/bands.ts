import { StaticImageData } from "next/image";
import abbaramaLogo from "public/images/bands/abbarama-logo-colors.png";
import abbaramaPhoto from "public/images/bands/_EGB4672.jpg";
import baLogo from "public/images/bands/black-angus-font-logo-white.png";
import baPhoto from "public/images/bands/black-angus-photo2.jpg";
import furLogo from "public/images/bands/2023-furbaby-logo_white.png";
import furPic from "public/images/bands/furbaby-leon-spain.jpeg";
import mcLogo from "public/images/bands/mc-logo_white_cropped.png";
import mcPic from "public/images/bands/the-midnight-calls_promo-pic.jpg";
import tlvLogo from "public/images/bands/tlv-sweet-salvation-logo-white.png";
import tlvPic from "public/images/bands/tlv-old-school-loft.jpg";
import urgeLogo from "public/images/bands/UO-Logo-hi-res.png";
import urgePic from "public/images/bands/Bandas-ARF_Urge-Overkill-Saturation.jpg";
import warriorLogo from "public/images/bands/warrior-soul-logo-white2.png";
import warriorPic from "public/images/bands/warrior-soul-pic.jpg";

export type BandDetail = {
  description: string;
  logo: StaticImageData | null;
  name: string;
  photo: StaticImageData | null;
  photoCredit: string;
  position: string;
  url: {
    facebook: string;
    instagram: string;
    website: string;
  };
  years: string;
};

export const bands = [
  {
    description: "Hard rock band from Chicago, Illinois, USA.",
    logo: tlvLogo,
    name: "The Last Vegas",
    photo: tlvPic,
    photoCredit: "",
    position: "Guitar",
    url: {
      facebook: "https://www.facebook.com/thelastvegas/",
      instagram: "https://www.instagram.com/thelastvegas/",
      website: "https://thelastvegas.com/",
    },
    years: "2000 - current",
  },
  {
    description: "Blues rock band in the vein of Black Crowes, AC/DC, etc.",
    logo: mcLogo,
    name: "The Midnight Calls",
    photo: mcPic,
    photoCredit: "",
    position: "Guitar",
    url: {
      facebook: "",
      instagram: "",
      website: "",
    },
    years: "2022 - current",
  },
  {
    description: "Indie rock icons from Chicago",
    logo: urgeLogo,
    name: "Urge Overkill",
    photo: urgePic,
    position: "Bass",
    url: {
      facebook: "",
      instagram: "",
      website: "",
    },
    years: "2014 - current",
  },
  {
    description: "Experimental Garage Pop Rock Psych",
    logo: furLogo,
    name: "Furbaby and the Tight Spaces",
    photo: furPic,
    position: "Guitar & Vocals",
    url: {
      facebook: "",
      instagram: "",
      website: "",
    },
    years: "2020 - current",
  },

  {
    description:
      "Outspoken, political, and unapologetic rock n' roll from the mind of Kory Clarke",
    logo: warriorLogo,
    name: "Warrior Soul",
    photo: warriorPic,
    photoCredit: "",
    position: "Guitar",
    url: {
      facebook: "",
      instagram: "",
      website: "",
    },
    years: "2015 - current",
  },
  {
    description: "Bon Scott era AC/DC tribute act (rockin' faces since 2008)",
    logo: baLogo,
    name: "Black Angus",
    photo: baPhoto,
    photoCredit: "",
    position: "Bass",
    url: {
      facebook: "",
      instagram: "",
      website: "",
    },
    years: "2016 - current",
  },

  {
    description: "ABBA Tribute band from Los Angeles, CA and Stockholm, Sweden",
    logo: abbaramaLogo,
    name: "ABBARAMA",
    photo: abbaramaPhoto,
    position: "Guitar",
    url: {
      facebook: "",
      instagram: "",
      website: "",
    },
    years: "2019 - 2020",
  },
  {
    description: "Garage rock legends from Pittsburgh, PA and Get Hip Records",
    logo: null,
    name: "The Cynics",
    photo: null,
    position: "Bass",
    url: {
      facebook: "",
      instagram: "",
      website: "",
    },
    years: "2006 - 2008",
  },
];
