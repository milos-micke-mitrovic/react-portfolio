import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const HeaderSocials = () => {
  return (
    <div className="flex flex-col items-center gap-3 absolute left-0 bottom-12 after:content-[''] after:w-[1px] after:h-8 after:bg-primary">
      <motion.a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <BsLinkedin className="text-xl" />
      </motion.a>
      <motion.a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.2 }}
      >
        <BsGithub className="text-xl" />
      </motion.a>
    </div>
  );
};

export default HeaderSocials;
