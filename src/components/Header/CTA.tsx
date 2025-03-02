import React from "react";
import CV from "../../assets/Milos_Mitrovic_CV.pdf";
import { motion } from "framer-motion";

export const CTA: React.FC = () => {
  return (
    <div className="mt-10 flex gap-5 justify-center">
      <motion.a
        href={CV}
        download
        className="btn"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download CV
      </motion.a>
      <motion.a
        href="#contact"
        className="btn btn-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Let's Talk
      </motion.a>
    </div>
  );
};

export default CTA;
