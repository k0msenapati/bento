import React from "react";
import Block from "./Block";
import { FiArrowRight } from "react-icons/fi";

interface HeaderBlockProps {
  avatar: string;
  header: string[];
  contact: string;
}

const HeaderBlock: React.FC<HeaderBlockProps> = ({ avatar, header, contact }) => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img src={avatar} alt="avatar" className="mb-4 w-14 h-14 rounded-full" />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      {header[0]} <span className="text-zinc-400">{header[1]}</span>
    </h1>
    <a href={contact} className="flex items-center gap-1 text-red-300 hover:underline">
      Contact me <FiArrowRight />
    </a>
  </Block>
);

export default HeaderBlock;
