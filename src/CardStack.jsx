import  { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCreative, Navigation } from 'swiper/modules';
import './card.css';

export default function CardStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const listOfCards = [
    { title: 'CARD #1', color: 'green' },
    { title: 'CARD #2', color: 'brown' },
    { title: 'CARD #3', color: 'red' },
    { title: 'CARD #4', color: 'black' },
    { title: 'CARD #5', color: 'blue' },
    { title: 'CARD #6', color: 'purple' },
  ];

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="card-stack-container">
      <Swiper
        ref={swiperRef}
        grabCursor={true}
        loop={true}
        effect={'creative'}
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[EffectCreative, Navigation]}
        className="mySwiper2"
        onSlideChange={handleSlideChange}
      >
        {listOfCards.map((card, index) => (
          <SwiperSlide key={index} style={{ backgroundColor: card.color }}>
            {card.title}
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="button-prev" onClick={goPrev}>
        Prev
      </button>
      <button className="button-next" onClick={goNext}>
        Next
      </button>

    </div>
  );
}
