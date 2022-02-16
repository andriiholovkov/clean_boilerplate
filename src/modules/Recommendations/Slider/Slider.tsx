import React from 'react';
import './Slider.scss';
import SliderCard from '../SliderCard/SliderCard';
import PNG_ICONS from '../assets/png/png';

const Slider = () => {
  return (
    <div>
      <div className="recommendations__slider-wrapper">
        <div className="recommendations__slider-arrow__left">
          <img className="slider-arrow__left" src={PNG_ICONS.LEFT_ARROW} alt="Slider arrow left" />
        </div>

        <div className="recommendations__card-wrapper">
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
        </div>

        <div className="recommendations__slider-arrow__right">
          <img className="slider-arrow__right" src={PNG_ICONS.RIGHT_ARROW} alt="Slider arrow right" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
