import React from 'react';
import './testimonials.css';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar: AVTR1,
    name: 'Yina Simo',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eum porro provident voluptates nobis tempore asperiores quae rem magni blanditiis, natus eius nulla praesentium fuga ad placeat similique fugit adipisci?'
  },
  {
    avatar: AVTR2,
    name: 'Rami Rimo',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eum porro provident voluptates nobis tempore asperiores quae rem magni blanditiis, natus eius nulla praesentium fuga ad placeat similique fugit adipisci?'
  },
  {
    avatar: AVTR3,
    name: 'Sina Mimo',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eum porro provident voluptates nobis tempore asperiores quae rem magni blanditiis, natus eius nulla praesentium fuga ad placeat similique fugit adipisci?'
  },
  {
    avatar: AVTR4,
    name: 'Sara Rami',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eum porro provident voluptates nobis tempore asperiores quae rem magni blanditiis, natus eius nulla praesentium fuga ad placeat similique fugit adipisci?'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
         modules={[ Pagination ]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="" />
            </div>
            <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials