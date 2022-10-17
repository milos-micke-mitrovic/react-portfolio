import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        LOGO
      </a>

      <ul className="footer__permalinks">
        <li>
          <a href="/#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#testimonials">Testimonials</a>
        </li>

        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <BsFacebook />
        </a>

        <a href="https://instagram.com">
          <AiOutlineInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Micke's Sites. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
