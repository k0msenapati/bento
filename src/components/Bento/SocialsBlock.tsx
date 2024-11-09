import React from "react";
import Block from "./Block";
import { SiGithub, SiYoutube, SiDiscord } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { SocialLinks } from "./types";

interface SocialsBlockProps {
  socials: SocialLinks;
}

const SocialsBlock: React.FC<SocialsBlockProps> = ({ socials }) => (
  <>
    {[
      { href: socials.youtube, className: "bg-red-500", icon: <SiYoutube />, textSize: "text-3xl" },
      { href: socials.github, className: "bg-green-600", icon: <SiGithub />, textSize: "text-3xl" },
      { href: socials.discord, className: "bg-[#7289da]", icon: <SiDiscord />, textSize: "text-4xl" },
      { href: socials.x, className: "bg-black", icon: <FaXTwitter />, textSize: "text-3xl" },
    ].map((social, index) => (
      <Block 
        key={index} 
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className={`col-span-6 ${social.className} md:col-span-3`} 
      >
        <a href={social.href} className={`grid h-full place-content-center ${social.textSize} text-white`}>
          {social.icon}
        </a>
      </Block>
    ))}
  </>
);

export default SocialsBlock;
