import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import logo from "../../assets/mickeLogo.png";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        <img className="footer__img" src={logo} alt="Mickes logo" />
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
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://github.com/milos-micke-mitrovic"
          rel="noreferrer"
          target="_blank"
        >
          <BsGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/milos-micke-mitrovic/"
          rel="noreferrer"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://www.instagram.com/m1zzk3"
          rel="noreferrer"
          target="_blank"
        >
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
