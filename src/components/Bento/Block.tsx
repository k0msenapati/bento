import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { BlockProps } from "./types";

const Block: React.FC<BlockProps> = ({ className, children, whileHover }) => (
  <motion.div
    variants={{
      initial: { scale: 0.5, y: 50, opacity: 0 },
      animate: { scale: 1, y: 0, opacity: 1 },
    }}
    transition={{
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50,
    }}
    whileHover={whileHover}
    className={twMerge("col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6", className)}
  >
    {children}
  </motion.div>
);

export default Block;
