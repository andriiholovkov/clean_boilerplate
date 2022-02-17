import React, { useRef, useEffect } from 'react';
import './Slider.scss';
import SliderCard from '../SliderCard/SliderCard';
import PNG_ICONS from '../assets/png/png';
import sliderCardData from '../SliderCard/sliderCardData';
import Slider from 'react-slick';

const SliderRender = () => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    console.log(sliderRef);
  }, []);

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          dots: false,
          infinite: false,
          speed: 500,
          initialSlide: 1,
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderSlides = () =>
    sliderCardData.map(({ unchecked, image, category, title, subtitle, span_text, link }, index) => (
      <SliderCard
        key={index}
        unchecked={unchecked}
        image={image}
        category={category}
        title={title}
        subtitle={subtitle}
        span_text={span_text}
        link={link}
      />
    ));

  return (
    <div>
      <div className="recommendations__slider-wrapper">
        <div className="recommendations__slider-arrow__left" onClick={() => sliderRef?.current?.slickPrev()}>
          <img className="slider-arrow__left" src={PNG_ICONS.LEFT_ARROW} alt="Slider arrow left" />
        </div>

        <div className="recommendations__card-wrapper">
          <Slider ref={sliderRef} {...settings}>
            {renderSlides()}
          </Slider>
        </div>

        <div className="recommendations__slider-arrow__right" onClick={() => sliderRef?.current?.slickNext()}>
          <img className="slider-arrow__right" src={PNG_ICONS.RIGHT_ARROW} alt="Slider arrow right" />
        </div>
      </div>
    </div>
  );
};

export default SliderRender;
