import React from 'react';
import './HomePage.scss';
import HeaderLogo from '../_common/HeaderLogo/HeaderLogo';
import greenGrass from './assets/png/image.png';
import Button from '../_common/Button/Button';

const HomePage = () => {
  return (
    <div>
      <HeaderLogo />

      <div className="title__wrapper">
        <p className="home__page-title">Welcome!</p>
        <p className="home__page-subtitle">Help our experts recommend what’s perfect for you</p>
      </div>

      <p className="home__page-description">
        Tell us about yourself by taking a brief (5 min/ roughly 15 question survey)
      </p>

      <img src={greenGrass} className="green__grass-img" alt="Green grass" />

      <Button />
    </div>
  );
};

export default HomePage;
