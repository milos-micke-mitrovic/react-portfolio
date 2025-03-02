import React, { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { motion } from "framer-motion";

// This file is a module
export {};

interface ContactOptionProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  isExternal?: boolean;
  delay: number;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactOption: React.FC<ContactOptionProps> = ({
  icon,
  title,
  value,
  link,
  isExternal = true,
  delay,
}) => {
  return (
    <motion.div
      className="bg-bgVariant/50 p-6 rounded-2xl text-center flex flex-col items-center border border-transparent hover:border-primary/30 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
    >
      <div className="text-primary text-2xl mb-3">{icon}</div>
      <h4 className="text-lg font-medium mb-1">{title}</h4>
      <h5 className="text-light text-sm mb-3">{value}</h5>
      <motion.a
        href={link}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="text-sm text-primary hover:text-white transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
      >
        Send a message
      </motion.a>
    </motion.div>
  );
};

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    if (form.current) {
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
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            console.log(error.text);
            toast.error("Error sending email! Try contacting me another way.");
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });

      e.currentTarget.reset();
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container grid md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-5">
          <ContactOption
            icon={<MdOutlineEmail />}
            title="Email"
            value="milos.micke.mitrovic@gmail.com"
            link="mailto:milos.micke.mitrovic@gmail.com"
            isExternal={false}
            delay={0.1}
          />

          <ContactOption
            icon={<RiMessengerLine />}
            title="Messenger"
            value="milos.m.mitrovic"
            link="https://m.me/milos.m.mitrovic/"
            delay={0.2}
          />

          <ContactOption
            icon={<AiOutlineInstagram />}
            title="Instagram"
            value="m1zzk3"
            link="https://ig.me/m/m1zzk3/"
            delay={0.3}
          />
        </div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-1">
            <motion.input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-6 rounded-lg resize-none outline-none transition-all duration-300 ${
                errors.name ? "border-red-500 !important" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
            {errors.name && (
              <span className="text-red-400 text-sm pl-2">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-6 rounded-lg resize-none outline-none transition-all duration-300 ${
                errors.email ? "border-red-500 !important" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
            {errors.email && (
              <span className="text-red-400 text-sm pl-2">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <motion.textarea
              rows={7}
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-6 rounded-lg resize-none outline-none transition-all duration-300 ${
                errors.message ? "border-red-500 !important" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            />
            {errors.message && (
              <span className="text-red-400 text-sm pl-2">
                {errors.message}
              </span>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`btn btn-primary self-start mt-2 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>

      <ToastContainer position="bottom-right" theme="dark" />
    </section>
  );
};

export default Contact;
