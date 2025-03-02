import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Nav: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>("/#");

  return (
    <div className="fixed bottom-8 w-full flex justify-center z-10">
      <motion.nav
        className="bg-black/20 py-3 px-7 flex gap-3 rounded-full backdrop-blur-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.a
          href="/#"
          className={`bg-transparent p-4 rounded-full flex text-lg ${
            activeNav === "/#" ? "bg-bgVariant text-primary" : "text-light"
          } hover:bg-bgVariant/50 transition-all duration-300`}
          onClick={() => setActiveNav("/#")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AiOutlineHome />
        </motion.a>

        <motion.a
          href="#about"
          className={`bg-transparent p-4 rounded-full flex text-lg ${
            activeNav === "#about" ? "bg-bgVariant text-primary" : "text-light"
          } hover:bg-bgVariant/50 transition-all duration-300`}
          onClick={() => setActiveNav("#about")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AiOutlineUser />
        </motion.a>

        <motion.a
          href="#experience"
          className={`bg-transparent p-4 rounded-full flex text-lg ${
            activeNav === "#experience"
              ? "bg-bgVariant text-primary"
              : "text-light"
          } hover:bg-bgVariant/50 transition-all duration-300`}
          onClick={() => setActiveNav("#experience")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <BiBook />
        </motion.a>

        <motion.a
          href="#services"
          className={`bg-transparent p-4 rounded-full flex text-lg ${
            activeNav === "#services"
              ? "bg-bgVariant text-primary"
              : "text-light"
          } hover:bg-bgVariant/50 transition-all duration-300`}
          onClick={() => setActiveNav("#services")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <RiServiceLine />
        </motion.a>

        <motion.a
          href="#contact"
          className={`bg-transparent p-4 rounded-full flex text-lg ${
            activeNav === "#contact"
              ? "bg-bgVariant text-primary"
              : "text-light"
          } hover:bg-bgVariant/50 transition-all duration-300`}
          onClick={() => setActiveNav("#contact")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <BiMessageSquareDetail />
        </motion.a>
      </motion.nav>
    </div>
  );
};

export default Nav;
