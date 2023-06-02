import reactPlaygroundImg from "../../assets/react-ts-playground.png";
import reactShoppingCartImg from "../../assets/react-shopping-cart.png";
import reactHangmanImg from "../../assets/react-ts-hangman.png";
import reactNotesImg from "../../assets/react-ts-notes.png";
import nextjsBlogImg from "../../assets/nextjs-blog.png";
import nextjsAuthImg from "../../assets/nextjs-auth.png";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={reactPlaygroundImg} alt="react-ts-select" />
          </div>

          <div className="portfolio__item-cta-and-title">
            <h3>React TS Playground</h3>

            <div className="portfolio__item-cta">
              <a
                href="https://github.com/milos-micke-mitrovic/react-playground"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
              href="https://react-ts-playground.vercel.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={reactShoppingCartImg} alt="react-ts-shopping-cart" />
          </div>

          <div className="portfolio__item-cta-and-title">
            <h3>React TS Shopping Cart</h3>

            <div className="portfolio__item-cta">
              <a
                href="https://github.com/milos-micke-mitrovic/react-ts-shopping-cart"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              {/* <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a> */}
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={reactHangmanImg} alt="ract-ts-hangman" />
          </div>

          <div className="portfolio__item-cta-and-title">
            <h3>React TS Hangman</h3>

            <div className="portfolio__item-cta">
              <a
                href="https://github.com/milos-micke-mitrovic/react-ts-hangman"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              {/* <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a> */}
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={nextjsBlogImg} alt="Next.js blog" />
          </div>

          <div className="portfolio__item-cta-and-title">
            <h3>Next.js Blog</h3>

            <div className="portfolio__item-cta">
              <a
                href="https://github.com/milos-micke-mitrovic/react-nextjs-blog"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              {/* <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a> */}
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={nextjsAuthImg} alt="Next.js auth" />
          </div>

          <div className="portfolio__item-cta-and-title">
            <h3>Next.js Auth</h3>

            <div className="portfolio__item-cta">
              <a
                href="https://github.com/milos-micke-mitrovic/react-nextjs-auth"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              {/* <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a> */}
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={reactNotesImg} alt="test" />
          </div>

          <div className="portfolio__item-cta-and-title">
            <h3>React TS Notes</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/milos-micke-mitrovic/react-ts-notes"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              {/* 
  <a
    href="https://dribbble.com/Alien_pixels"
    className="btn btn-primary"
    target="_blank"
    rel="noreferrer"
  >
    Live Demo
  </a> */}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
