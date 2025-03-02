import React from "react";
import reactPlaygroundImg from "../../assets/react-ts-playground.png";
import doorKonfiguratorImg from "../../assets/door-konfigurator.png";
import { motion } from "framer-motion";

interface PortfolioItemProps {
  title: string;
  image: string;
  github?: string;
  demo?: string;
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  image,
  github,
  demo,
  index,
}) => {
  return (
    <motion.article
      className="bg-bgVariant/20 p-5 rounded-2xl border border-transparent hover:border-primary/40 transition-all duration-300 flex flex-col h-[400px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -10 }}
    >
      <div className="rounded-2xl overflow-hidden mb-5 h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
        />
      </div>

      <div className="flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-medium mb-4 text-center">{title}</h3>

        <div className="flex gap-4 justify-center mt-auto">
          {github && (
            <motion.a
              href={github}
              className="btn"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          )}

          {demo && (
            <motion.a
              href={demo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      title: "React TS Playground",
      image: reactPlaygroundImg,
      github: "https://github.com/milos-micke-mitrovic/react-playground",
      demo: "https://react-ts-playground.vercel.app",
    },
    {
      title: "Door konfigurator",
      image: doorKonfiguratorImg,
      demo: "https://konfigurator.algreen.rs/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={index}
            title={item.title}
            image={item.image}
            github={item.github}
            demo={item.demo}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
