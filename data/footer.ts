import { SocialIcons } from "zuma-blocks";
import { nav, socialMedia } from "../nttb-config";

import { type Nav } from "../nttb-config";

export const footerNav: Array<Nav> = nav;

export type FooterSocial = {
  name: string;
  href: string;
  icon: React.FC<{ className: string }>;
};

export const footerSocials = [
  {
    name: "Facebook",
    href: socialMedia.facebook.url,
    icon: SocialIcons.FacebookIcon,
  },
  {
    name: "Instagram",
    href: socialMedia.instagram.url,
    icon: SocialIcons.InstagramIcon,
  },
  {
    name: "Github",
    href: socialMedia.github.url,
    icon: SocialIcons.GitHubIcon,
  },
  {
    name: "Twitter",
    href: socialMedia.twitter.url,
    icon: SocialIcons.TwitterIcon,
  },
];
