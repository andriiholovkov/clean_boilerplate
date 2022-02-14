import React from 'react';
import HeaderLogo from '../../_common/HeaderLogo/HeaderLogo';
// import Button from '../../_common/Button/Button';
import './TypeSupplement.scss';
import Stepper from '../../_common/Stepper/Stepper';
import BackArrow from '../../_common/BackArrow/BackArrow';
import buttons from './defaultData';
import NextButton from '../../_common/NextButton/NextButton';

const TypeSupplement = () => {
  const arrayOfButtons = buttons.map((item, i) => (
    <button className="quiz__answer" key={item.title + i}>
      {item.title}
    </button>
  ));

  const buttonsWrapper = <div className="quiz__answers-wrapper">{arrayOfButtons}</div>;

  return (
    <div>
      <HeaderLogo />
      <Stepper />
      <BackArrow />
      <p className="quiz__question">Do you know what type of supplement you&apos;re looking for?</p>
      <p className="quiz__suggestion">We suggest trying a mild laxative first (which usually works in 1-2 days).</p>
      {buttonsWrapper}
      <NextButton />
    </div>
  );
};

export default TypeSupplement;
