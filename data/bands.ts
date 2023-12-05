import { StaticImageData } from "next/image";
import abbaramaLogo from "public/images/bands/abbarama-logo-colors.png";
import abbaramaPhoto from "public/images/bands/_EGB4672.jpg";
import baLogo from "public/images/bands/black-angus-font-logo-white.png";
import baPhoto from "public/images/bands/black-angus-photo2.jpg";
import cynicsPic from "public/images/bands/cynics-rnr.jpg";
import furLogo from "public/images/bands/2023-furbaby-logo_white.png";
import furPic from "public/images/bands/furbaby-leon-spain.jpeg";
import keithPic from "public/images/bands/keith-blues-junkies-2022.jpeg";
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
      facebook: "https://www.facebook.com/themidnightcallsofficial",
      instagram: "https://www.instagram.com/themidnightcallsofficial/",
      website: "https://www.themidnightcalls.com/",
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
      facebook: "https://www.facebook.com/urgeoverkillmusic",
      instagram: "https://www.instagram.com/urgeoverkill",
      website: "https://www.urgeoverkill.com/",
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
      facebook: "https://www.facebook.com/furBabyAndtheTightSpaces",
      instagram: "https://www.instagram.com/furbaby_rocks/",
      website: "https://www.furbaby.rocks/",
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
      facebook: "https://www.facebook.com/warriorsoulofficial/",
      instagram: "",
      website: "https://www.warriorsoulofficial.com/",
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
      facebook: "https://www.facebook.com/Black-Angus-Chicago-117537881596118/",
      instagram: "https://www.instagram.com/blackangusrock/",
      website: "https://www.blackangusrock.com/",
    },
    years: "2016 - current",
  },
  {
    description:
      "Chicago West Side Blues, occasionally I'll sit in with Keith's band!",
    logo: null,
    name: "Keith Scott and the Electric Blues Junkies",
    photo: keithPic,
    photoCredit: "",
    position: "Bass",
    url: {
      facebook: "https://www.facebook.com/keith.scott.5454",
      instagram: "https://www.instagram.com/fishing_blues/",
      website: "https://www.keithscottblues.com/",
    },
    years: "2014 - current",
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
    photo: cynicsPic,
    position: "Bass",
    url: {
      facebook: "",
      instagram: "",
      website: "",
    },
    years: "2006 - 2008",
  },
];
