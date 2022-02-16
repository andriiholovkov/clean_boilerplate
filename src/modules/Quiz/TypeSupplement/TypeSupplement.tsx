import React from 'react';
import HeaderLogo from '../../_common/HeaderLogo/HeaderLogo';
import './TypeSupplement.scss';
import Stepper from '../../_common/Stepper/Stepper';
import BackArrow from '../../_common/BackArrow/BackArrow';
import buttons from './defaultData';
import ROUTES from '../../../constants/routerConstants';
import Button from '../../_common/Button/Button';
import { useNavigate } from 'react-router-dom';

const TypeSupplement = () => {
  const arrayOfButtons = buttons.map((item, i) => (
    <button className="quiz__answer" key={item.title + i}>
      {item.title}
    </button>
  ));

  const buttonsWrapper = <div className="quiz__answers-wrapper">{arrayOfButtons}</div>;

  const navigate = useNavigate();

  return (
    <div>
      <HeaderLogo />
      <Stepper />
      <BackArrow title="Back" />
      <p className="quiz__question">Do you know what type of supplement you&apos;re looking for?</p>
      <p className="quiz__suggestion">We suggest trying a mild laxative first (which usually works in 1-2 days).</p>
      {buttonsWrapper}
      <div className="next__button-wrapper">
        <Button title="Next" className="next__button" clickHandler={() => navigate(ROUTES.QUIZ_QUESTION_2)} />
      </div>
    </div>
  );
};

export default TypeSupplement;
