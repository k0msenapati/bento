import React from "react";
import Block from "./Block";
import { FiMapPin } from "react-icons/fi";

interface LocationBlockProps {
  location: string;
}

const LocationBlock: React.FC<LocationBlockProps> = ({ location }) => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">{location}</p>
  </Block>
);

export default LocationBlock;
