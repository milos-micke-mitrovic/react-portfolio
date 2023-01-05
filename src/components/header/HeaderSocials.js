import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";

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

      {/* <a
        href="https://www.facebook.com/milos.m.mitrovic"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
