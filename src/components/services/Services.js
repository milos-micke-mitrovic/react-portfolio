import { BiCheck } from "react-icons/bi";

import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        {/* UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performing CTA and primary action buttons</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Image Overlaying</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Colours & Gradients</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Text Styles and Fonts</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Error Messages</p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX */}

        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Fast and user firendly websites.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross browser compatibility websites.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Secured websites</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Clear and Effective CTAs</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimized content</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        {/* CONTENT CREATION */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>identifying a new topic user wants to write about</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Deciding which form user wants the content to take</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Formalizing users strategy (keyword or otherwise)</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Producing of well-established process</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
