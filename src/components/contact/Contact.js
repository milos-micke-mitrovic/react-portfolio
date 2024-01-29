import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_6458bnq",
        "template_ss9ghea",
        form.current,
        "CzxeMc5guLIZcqYsy"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending email! Try contacting me another way.");
        }
      );
  
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>milos.micke.mitrovic@gmail.com</h5>
            <a href="mailto:milos.micke.mitrovic@gmail.com">Send a message</a>
          </div>

          <div className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>milos.m.mitrovic</h5>
            <a
              href="https://m.me/milos.m.mitrovic/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </div>

          <div className="contact__option">
            <AiOutlineInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>m1zzk3</h5>
            <a href="https://ig.me/m/m1zzk3/" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />

          <input type="email" name="email" placeholder="Your Email" required />

          <textarea
            rows="7"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
