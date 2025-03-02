import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import marijaImg from "../../assets/marija.png";
import lazaImg from "../../assets/laza.jpg";
import saleImg from "../../assets/sale.jpg";
import { motion } from "framer-motion";

interface TestimonialProps {
  image: string;
  name: string;
  review: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: marijaImg,
    name: "Marija Miletic",
    review:
      "From the start of the project, through to completion, Milos supported us and exceeded our expectations in every way. Not only was our experience personal and friendly, his ability to identify and present our key messages in an imaginative and creative way gave us a huge amount of confidence in him.",
  },
  {
    image: lazaImg,
    name: "Lazar Kocic",
    review:
      "He's reliable, professional and easy to work with. I can't recommend him highly enough and we look forward to continuing our working relationship together.",
  },
  {
    image: saleImg,
    name: "Aleksandar Kopanja",
    review:
      "Milos was very helpful and fast to respond to my inquiry to help with React website issues. His knowledge was comprehensive. Even better, his advice helped me enough to solve the problems and he did not accept any payment for this, very straight up guy!",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials">
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>

      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Swiper
          className="w-full py-10"
          modules={[Pagination, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center text-center bg-bgVariant/30 p-8 rounded-3xl border border-transparent hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/20">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h5 className="text-lg font-medium mb-2">{testimonial.name}</h5>

              <p className="text-light text-sm leading-relaxed max-w-2xl mx-auto">
                {testimonial.review}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Testimonials;
