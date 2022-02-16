import React from 'react';
import HeaderLogo from '../_common/HeaderLogo/HeaderLogo';
import BackArrow from '../_common/BackArrow/BackArrow';
import Button from '../_common/Button/Button';
import './Recommendations.scss';
import Slider from './Slider/Slider';

const Recommendations = () => {
  return (
    <div>
      <HeaderLogo />
      <BackArrow title="Back to quiz" />

      <h2 className="recommendations__title">Here are some options for you to choose from</h2>
      <p className="recommendations__subtitle">It’s all based on what you told us during the quiz</p>

      <Slider />

      <div className="recommendations__button-wrapper">
        <Button title="Add & Continue" className="button__add-continue" />
      </div>
    </div>
  );
};

export default Recommendations;
