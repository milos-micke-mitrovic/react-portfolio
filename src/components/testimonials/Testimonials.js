import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import marijaImg from "../../assets/marija.png";
import lazaImg from "../../assets/laza.jpg";
import saleImg from "../../assets/sale.jpg";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviewes From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide className="testimonial">
          <div className="testimonial__client-avatar">
            <img src={marijaImg} alt="Marija" />
          </div>

          <h5 className="testimonial__clienet-name">Marija Miletic</h5>

          <small className="testimonial__clienet-review">
            From the start of the project, through to completion, Milos
            supported us and exceeded our expectations in every way. Not only
            was our experience personal and friendly, his ability to identify
            and present our key messages in an imaginative and creative way gave
            us a huge amount of confidence in him.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="testimonial__client-avatar">
            <img src={lazaImg} alt="Lazar" />
          </div>

          <h5 className="testimonial__clienet-name">Lazar Kocic</h5>

          <small className="testimonial__clienet-review">
            He's reliable, professional and easy to work with. I can’t recommend
            him highly enough and we look forward to continuing our working
            relationship together.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="testimonial__client-avatar">
            <img src={saleImg} alt="Sale" />
          </div>

          <h5 className="testimonial__clienet-name">Aleksandar Kopanja</h5>

          <small className="testimonial__clienet-review">
            Milos was very helpful and fast to respond to my inquiry to help
            with React website issues. His knowledge was comprehensive. Even
            better, his advice helped me enough to solve the problems and he did
            not accept any payment for this, very straight up guy!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
