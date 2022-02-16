import React from 'react';
import './SliderCard.scss';
import PNG_ICONS from '../assets/png/png';
import SliderCardRating from '../SliderCardRating/SliderCardRating';

const SliderCard = () => {
  return (
    <div>
      <div className="recommendations__slider-card">
        <img className="slider-card__unchecked" src={PNG_ICONS.UNCHECKED} alt="Unchecked item circle" />
        <img src={PNG_ICONS.CALCIUM} className="card-image" alt="Card image" />
        <div className="card__image-rating">
          <div className="image__rating-stars">
            <SliderCardRating />
          </div>
          <div className="image__rating-mark">
            <span className="mark__average">4.3</span>
            <span className="mark__reviews">(4)</span>
          </div>
        </div>
        <div className="image__rating-underline"></div>

        <button className="image__card-category">Finest Nutrition</button>

        <p className="image__card-title">Calcium plus Vitamin D3 Tablets</p>
        <p className="image__card-subtitle">
          <span className="card-subtitle__span-text">Why it’s here:</span> you told us you have a family history of bone
          problems
        </p>
        <p className="image__card-link">Learn more</p>
      </div>
    </div>
  );
};

export default SliderCard;
