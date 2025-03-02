import React from "react";
import { BiCheck } from "react-icons/bi";
import { motion } from "framer-motion";

interface ServiceItemProps {
  title: string;
  items: string[];
  delay: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, items, delay }) => {
  return (
    <motion.article
      className="bg-bgVariant/30 rounded-b-2xl border border-primary/20 hover:bg-transparent hover:border-primary/40 transition-all duration-300 h-fit"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
    >
      <div className="bg-primary p-6 rounded-t-2xl">
        <h3 className="text-bgColor text-lg font-medium text-center">
          {title}
        </h3>
      </div>

      <ul className="p-8 flex flex-col gap-3">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="flex gap-3 items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + 0.1 * index }}
          >
            <BiCheck className="text-primary text-2xl mt-0.5 flex-shrink-0" />
            <p className="text-light text-sm">{item}</p>
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
};

const Services: React.FC = () => {
  const uiUxServices = [
    "User interface design with a focus on usability",
    "Responsive layouts that work on all devices",
    "Interactive prototypes and wireframes",
    "Design system creation and implementation",
    "Accessibility-focused design principles",
  ];

  const webDevServices = [
    "Custom React application development",
    "TypeScript integration for type safety",
    "Modern CSS with Tailwind and animations",
    "Performance optimization and code splitting",
    "Progressive Web App (PWA) development",
    "State management with Redux or Context API",
  ];

  const contentServices = [
    "Content strategy and planning",
    "SEO optimization for better visibility",
    "Technical documentation and guides",
    "Blog post writing for technical topics",
    "Content management system integration",
  ];

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceItem title="UI/UX Design" items={uiUxServices} delay={0.1} />
        <ServiceItem
          title="Web Development"
          items={webDevServices}
          delay={0.2}
        />
        <ServiceItem
          title="Content Creation"
          items={contentServices}
          delay={0.3}
        />
      </div>
    </section>
  );
};

export default Services;
