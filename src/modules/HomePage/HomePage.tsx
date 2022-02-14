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
        <p className="home__page-title">Welcome to the Vitamin & Supplement Navigator tool*</p>
      </div>

      <p className="home__page-description">
        We&apos;re here to help you find a product that&apos;s best suited to your needs
      </p>

      <div className="green__grass-wrapper">
        <img src={greenGrass} className="green__grass-img" alt="Green grass" />
      </div>

      <Button />

      <div className="tool__tip-wrapper">
        <p className="tool__tip-text">* This tool is not intended to diagnose or treat any chronic conditions.</p>
        <p className="tool__tip-text">
          Before taking any medications or supplements, please check packaging for safety information including warnings
          to those for whom the product may not be suitable.
        </p>
        <p className="tool__tip-text">
          If you are pregnant, have a chronic or diagnosed digestive condition, please seek advice from your doctor or
          health care practitioner.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
