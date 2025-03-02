import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me-about.png";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[35%_50%] gap-8 md:gap-16 items-center mx-auto">
        <motion.div
          className="w-2/3 md:w-full aspect-square rounded-3xl bg-gradient-to-tr from-transparent to-primary grid place-items-center mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-3xl overflow-hidden rotate-12 hover:rotate-0 transition-all duration-500">
            <img src={ME} alt="About Me" />
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.article
              className="bg-bgVariant/30 rounded-2xl p-6 border border-transparent hover:border-primary/40 hover:bg-transparent transition-all duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <FaAward className="text-primary text-2xl mb-4" />
              <h5 className="text-base font-medium">Experience</h5>
              <small className="text-light text-sm">5+ Years Working</small>
            </motion.article>

            <motion.article
              className="bg-bgVariant/30 rounded-2xl p-6 border border-transparent hover:border-primary/40 hover:bg-transparent transition-all duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <FiUsers className="text-primary text-2xl mb-4" />
              <h5 className="text-base font-medium">Clients</h5>
              <small className="text-light text-sm">10+ Worldwide</small>
            </motion.article>

            <motion.article
              className="bg-bgVariant/30 rounded-2xl p-6 border border-transparent hover:border-primary/40 hover:bg-transparent transition-all duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <VscFolderLibrary className="text-primary text-2xl mb-4" />
              <h5 className="text-base font-medium">Projects</h5>
              <small className="text-light text-sm">10+ Completed</small>
            </motion.article>
          </div>

          <motion.p
            className="text-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Frontend developer with a passion for creating beautiful,
            responsive, and user-friendly websites. I specialize in React,
            TypeScript, and modern CSS frameworks like Tailwind. With a strong
            eye for design and attention to detail, I deliver high-quality code
            that meets client needs and exceeds expectations.
          </motion.p>

          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
