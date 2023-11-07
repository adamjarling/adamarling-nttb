import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

import Link from "next/link";
import React from "react";
import { socialMedia } from "nttb-config";

const socialIcons = [
  {
    label: "Instagram",
    Icon: FiInstagram,
    url: socialMedia.instagram.url,
  },
  {
    label: "Github",
    Icon: FiGithub,
    url: socialMedia.github.url,
  },
  {
    label: "Facebook",
    Icon: FiFacebook,
    url: socialMedia.facebook.url,
  },
  {
    label: "X",
    Icon: FiTwitter,
    url: socialMedia.twitter.url,
  },
];

const SocialMediaIcons = () => {
  return (
    <ul className="flex">
      {socialIcons.map((si) => (
        <li key={si.label} className="px-2 text-stone-400">
          <Link href={si.url}>{si.Icon && <si.Icon size="24" />}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaIcons;
