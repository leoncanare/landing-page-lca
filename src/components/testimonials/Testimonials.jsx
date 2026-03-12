import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/images/avatars/avatar1.jpg";
import AVTR2 from "../../assets/images/avatars/avatar2.jpg";
import AVTR3 from "../../assets/images/avatars/avatar3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";

const testimonialsData = [
  {
    avatar: AVTR1,
    name: "Martina Mils",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur quasi obcaecati reprehenderit omnis ut, debitis repellendus qui accusamus nostrum laboriosam voluptatibus iste voluptates fugit esse quis laudantium asperiores. Officiis.",
  },
  {
    avatar: AVTR2,
    name: "Fernando Rich",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur quasi obcaecati reprehenderit omnis ut, debitis repellendus qui accusamus nostrum laboriosam voluptatibus iste voluptates fugit esse quis laudantium asperiores. Officiis.",
  },
  {
    avatar: AVTR3,
    name: "Cristian Juls",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat pariatur quasi obcaecati reprehenderit omnis ut, debitis repellendus qui accusamus nostrum laboriosam voluptatibus iste voluptates fugit esse quis laudantium asperiores. Officiis.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5> Feedback about my work </h5>
      <h2> Opinions </h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="container testimonials__container">
        {testimonialsData.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
