import React from "react";
import { motion } from "framer-motion";
import { Profile } from "./types";
import HeaderBlock from "./HeaderBlock";
import SocialsBlock from "./SocialsBlock";
import AboutBlock from "./AboutBlock";
import LocationBlock from "./LocationBlock";
import EmailListBlock from "./EmailListBlock";
import Footer from "./Footer";

export const RevealBento: React.FC<Profile> = (data) => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock avatar={data.avatar} header={data.header} contact={data.contact} />
        <SocialsBlock socials={data.socials} />
        <AboutBlock about={data.about} />
        <LocationBlock location={data.location} />
        <EmailListBlock email={data.email} />
      </motion.div>
      <Footer github={data.socials.github} username={data.name} />
    </div>
  );
};
