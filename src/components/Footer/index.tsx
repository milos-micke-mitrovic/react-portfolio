import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import logo from "../../assets/mickeLogo.png";
import { motion } from "framer-motion";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  delay: number;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, delay }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      <motion.a
        href={href}
        className="text-white hover:text-primary transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
      >
        {children}
      </motion.a>
    </motion.li>
  );
};

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
  delay: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, children, delay }) => {
  return (
    <motion.a
      href={href}
      rel="noreferrer"
      target="_blank"
      className="bg-bgColor p-3 rounded-lg text-white hover:text-primary hover:bg-transparent border border-transparent hover:border-primary transition-all duration-300 text-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -5 }}
    >
      {children}
    </motion.a>
  );
};

const Footer: React.FC = () => {
  const links = [
    { href: "/#", label: "Home", delay: 0.05 },
    { href: "#about", label: "About", delay: 0.1 },
    { href: "#experience", label: "Experience", delay: 0.15 },
    { href: "#services", label: "Services", delay: 0.2 },
    { href: "#portfolio", label: "Portfolio", delay: 0.25 },
    { href: "#testimonials", label: "Testimonials", delay: 0.3 },
    { href: "#contact", label: "Contact", delay: 0.35 },
  ];

  return (
    <footer className="bg-bgVariant py-12 text-center text-white mt-24 flex flex-col items-center">
      <motion.a
        href="/#"
        className="mb-8 inline-block"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          className="w-16 h-16 object-contain"
          src={logo}
          alt="Micke's logo"
        />
      </motion.a>

      <ul className="flex flex-wrap justify-center gap-5 mx-auto mb-8 max-w-lg">
        {links.map((link) => (
          <FooterLink key={link.label} href={link.href} delay={link.delay}>
            {link.label}
          </FooterLink>
        ))}
      </ul>

      <div className="flex justify-center gap-4 mb-10">
        <SocialLink href="https://github.com/milos-micke-mitrovic" delay={0.4}>
          <BsGithub />
        </SocialLink>

        <SocialLink
          href="https://www.linkedin.com/in/milos-micke-mitrovic/"
          delay={0.5}
        >
          <BsLinkedin />
        </SocialLink>

        <SocialLink href="https://www.instagram.com/m1zzk3" delay={0.6}>
          <AiOutlineInstagram />
        </SocialLink>
      </div>

      <motion.div
        className="mt-6 text-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <small>&copy; Micke's Sites. All rights reserved.</small>
      </motion.div>
    </footer>
  );
};

export default Footer;
