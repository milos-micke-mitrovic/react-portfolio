import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import me from "../../assets/me.png";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <header className="h-screen pt-28 overflow-hidden">
      <div className="container h-full relative">
        <div className="text-center">
          <motion.h5
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello I'm
          </motion.h5>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Milos Mitrovic
          </motion.h1>
          <motion.h5
            className="text-light"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Frontend Developer
          </motion.h5>
          <CTA />
          <HeaderSocials />

          <div className="flex justify-center">
            <motion.div
              className="bg-gradient-to-b from-primary to-transparent w-80 h-[30rem] absolute mt-16 rounded-t-full overflow-hidden pt-12"
              style={{ left: "calc(50% - 160px)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img src={me} alt="me" className="w-full" />
            </motion.div>
          </div>

          <motion.div
            className="absolute right-0 bottom-20 flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="font-light text-sm rotate-90 origin-bottom-right mr-2 transform translate-y-8">
              Scroll Down
            </span>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
