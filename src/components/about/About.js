import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import ME from "../../assets/me-about.png";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Wroking</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10 + Clients</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10 + Projects</small>
            </article>
          </div>

          <p>
            Hello! My name is Milos, and I enjoy creating things that live on
            the internet. My interest in web development started back in 2015,
            when I decided to try editing custom Tumblr themes. A custom reblog
            button taught me a lot about HTML & CSS! Fast-forward to today,
            I'have the privilege of working at small company. My main focus
            these days is to be able to actually create enjoyable interactions
            and experiences for everyone! And with a lot of effort, study and
            dedication to work, I'm now able to truly call myself a Front-End
            Developer.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
