import React from 'react';
import './Slider.scss';
import SliderCard from '../SliderCard/SliderCard';
import PNG_ICONS from '../assets/png/png';
import sliderCardData from '../SliderCard/sliderCardData';
// import Slider from 'react-slick';

const Slider = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
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
        <div className="recommendations__slider-arrow__left">
          <img className="slider-arrow__left" src={PNG_ICONS.LEFT_ARROW} alt="Slider arrow left" />
        </div>

        <div className="recommendations__card-wrapper">
          {/*<Slider {...settings}>{renderSlides()}</Slider>*/}
          {renderSlides()}
        </div>

        <div className="recommendations__slider-arrow__right">
          <img className="slider-arrow__right" src={PNG_ICONS.RIGHT_ARROW} alt="Slider arrow right" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
