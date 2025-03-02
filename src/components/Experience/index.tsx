import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";

// This file is a module
export {};

interface SkillProps {
  name: string;
  level: string;
  delay: number;
}

export const Skill: React.FC<SkillProps> = ({ name, level, delay }) => {
  return (
    <motion.div
      className="flex gap-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      <BsPatchCheckFill className="text-primary mt-1 flex-shrink-0" />
      <div>
        <h4 className="text-base font-medium">{name}</h4>
        <small className="text-light text-sm">{level}</small>
      </div>
    </motion.div>
  );
};

export const Experience: React.FC = () => {
  const frontendSkills = [
    { name: "Next.js", level: "Intermediate", delay: 0.1 },
    { name: "CSS", level: "Intermediate", delay: 0.15 },
    { name: "Tailwind", level: "Experienced", delay: 0.2 },
    { name: "Bootstrap", level: "Intermediate", delay: 0.25 },
    { name: "JavaScript", level: "Experienced", delay: 0.3 },
    { name: "jQuery", level: "Intermediate", delay: 0.35 },
    { name: "React", level: "Experienced", delay: 0.4 },
    { name: "TypeScript", level: "Experienced", delay: 0.45 },
  ];

  const backendSkills = [
    { name: "PHP", level: "Intermediate", delay: 0.5 },
    { name: "Laravel", level: "Experienced", delay: 0.55 },
    { name: "MySQL", level: "Intermediate", delay: 0.6 },
    { name: "Node.js", level: "Intermediate", delay: 0.65 },
    { name: "Express.js", level: "Intermediate", delay: 0.7 },
    { name: "Firebase", level: "Basic", delay: 0.75 },
  ];

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-bgVariant/30 py-8 px-12 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-transparent transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -10 }}
        >
          <h3 className="text-center text-primary mb-8">
            Frontend Development
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {frontendSkills.map((skill) => (
              <Skill
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={skill.delay}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-bgVariant/30 py-8 px-12 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-transparent transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -10 }}
        >
          <h3 className="text-center text-primary mb-8">Backend Development</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {backendSkills.map((skill) => (
              <Skill
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={skill.delay}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
