import  { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { A11y, EffectCreative, Navigation, Pagination } from 'swiper/modules';
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




  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div className="card-stack-container">
      <Swiper
              ref={swiperRef}
              navigation={false}
              pagination={false}
       modules={[ EffectCreative,Navigation]}
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
        // modules={[EffectCreative, Navigation]}
        className="mySwiper2"
        onSlideChange={handleSlideChange}
      >
        {listOfCards.map((card, index) => (
          <SwiperSlide key={index} style={{ backgroundColor: card.color }}>
            {card.title}
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <button onClick={handlePrev}>PREV</button>
        <button onClick={handleNext}>NEXT</button>
      </div>

    </div>
  );
}
