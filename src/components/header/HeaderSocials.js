import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/milos-micke-mitrovic/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>

      <a
        href="https://github.com/milos-micke-mitrovic"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
