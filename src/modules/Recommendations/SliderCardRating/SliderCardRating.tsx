import React from 'react';
import './SliderCardRating.scss';
import SVG_ICONS from '../assets/svg/svg';

const SliderCardRating = () => {
  return (
    <div>
      <div className="image__rating-stars">
        <img src={SVG_ICONS.DARKBLUE_STAR} className="star" alt="Image rating star" />
        <img src={SVG_ICONS.DARKBLUE_STAR} className="star" alt="Image rating star" />
        <img src={SVG_ICONS.DARKBLUE_STAR} className="star" alt="Image rating star" />
        <img src={SVG_ICONS.DARKBLUE_STAR} className="star" alt="Image rating star" />
        <img src={SVG_ICONS.GREY_STAR} className="star" alt="Image rating star" />
      </div>
    </div>
  );
};

export default SliderCardRating;
