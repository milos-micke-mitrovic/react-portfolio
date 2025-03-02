import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import me from "../../assets/me.png";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const Header: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <motion.div
              className="flex items-center cursor-pointer group"
              onClick={scrollToAbout}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="font-light text-sm rotate-90 origin-bottom-right mr-2 transform translate-y-8 group-hover:text-primary transition-colors duration-300">
                Scroll Down
              </span>
              <motion.div
                className="text-primary ml-2"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FiArrowDown size={20} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
