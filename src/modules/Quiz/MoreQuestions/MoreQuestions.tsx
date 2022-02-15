import React from 'react';
import HeaderLogo from '../../_common/HeaderLogo/HeaderLogo';
import './MoreQuestions.scss';
import greenGrass from './assets/png/green-grass.png';
import Stepper from '../../_common/Stepper/Stepper';
import BackArrow from '../../_common/BackArrow/BackArrow';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../constants/routerConstants';
import Button from '../../_common/Button/Button';

const MoreQuestions = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderLogo />
      <Stepper />
      <BackArrow title={'Back'} />

      <p className="more__question-title">Would you like to answer a few more questions for better results?</p>
      <p className="more__question-subheading">It’s just a couple more minutes!</p>

      <div className="more__question-buttons__wrapper">
        <Button title={'Continue with questions'} className={'continue__button'} />
        <Button
          title={'See recommendations'}
          className={'recommendations__button'}
          clickHandler={() => navigate(ROUTES.RECOMMENDATION_PAGE)}
        />
      </div>

      <div className="green__grass-wrapper">
        <img src={greenGrass} className="green__grass-more" alt="Green grass" />
      </div>
    </div>
  );
};

export default MoreQuestions;
