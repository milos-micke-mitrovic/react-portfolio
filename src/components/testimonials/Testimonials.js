import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import testImg from "../../assets/test.jpg";
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
            <img src={testImg} alt="test" />
          </div>

          <h5 className="testimonial__clienet-name">Ernest Achiever</h5>

          <small className="testimonial__clienet-review">
            Lorem, ipsum dolor sit amet consecteture elit. Lorem, ipsum dolor
            sit amet consecteture elit. Lorem, ipsum dolor sit amet consecteture
            elit.Lorem, ipsum dolor sit amet consecteture elit.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="testimonial__client-avatar">
            <img src={testImg} alt="test" />
          </div>

          <h5 className="testimonial__clienet-name">Ernest Achiever</h5>

          <small className="testimonial__clienet-review">
            Lorem, ipsum dolor sit amet consecteture elit. Lorem, ipsum dolor
            sit amet consecteture elit. Lorem, ipsum dolor sit amet consecteture
            elit.Lorem, ipsum dolor sit amet consecteture elit.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="testimonial__client-avatar">
            <img src={testImg} alt="test" />
          </div>

          <h5 className="testimonial__clienet-name">Ernest Achiever</h5>

          <small className="testimonial__clienet-review">
            Lorem, ipsum dolor sit amet consecteture elit. Lorem, ipsum dolor
            sit amet consecteture elit. Lorem, ipsum dolor sit amet consecteture
            elit.Lorem, ipsum dolor sit amet consecteture elit.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
