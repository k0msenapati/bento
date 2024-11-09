import React from "react";
import Block from "./Block";

interface AboutBlockProps {
  about: string[];
}

const AboutBlock: React.FC<AboutBlockProps> = ({ about }) => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      {about[0]} <span className="text-zinc-400">{about[1]}</span>
    </p>
  </Block>
);

export default AboutBlock;
