import React from 'react';
import './HeaderLogo.scss';
import PNG_ICONS from '../assets/png/png';
import SVG_ICONS from '../assets/svg/svg';

const HeaderLogo = () => {
  return (
    <div className="full__logo-wrapper">
      <a href="#" className="header__logo-link">
        <img src={PNG_ICONS.LOGO} className="header__logo-img" alt="Company logo" />

        <div className="logo__text-wrapper">
          <p className="logo__text-powered">powered by</p>
          <img src={SVG_ICONS.SYMBOL} className="logo__text-symbol" alt="Logo color symbol" />
          <img src={SVG_ICONS.OPTIMA} className="logo__text-optima" alt="Text salus optima" />
        </div>
      </a>
    </div>
  );
};

export default HeaderLogo;
