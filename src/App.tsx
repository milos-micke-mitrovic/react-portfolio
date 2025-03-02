import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

const App: React.FC = () => {
  return (
    <div className=" text-white font-poppins">
      <Header />
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </motion.div>
      <Footer />
    </div>
  );
};

export default App;
