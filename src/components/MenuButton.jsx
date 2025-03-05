import React from "react";
import { motion } from "framer-motion";

export const MenuButton = () => {
  return (
    <div className="grid h-screen place-content-center bg-gradient-to-br from-violet-500 to-indigo-500">
      <AnimationButton />
    </div>
  );
};

const AnimationButton = () => {
  return (
    <motion.button className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"></motion.button>
  );
};
