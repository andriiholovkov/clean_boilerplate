import React from 'react';
import './HeaderLogo.scss';
import companyLogo from './assets/png/walgreens-logo.png';
import logoSymbol from './assets/svg/symbol.svg';
import optima from './assets/svg/salus_optima.svg';

const HeaderLogo = () => {
  return (
    <div className="full__logo-wrapper">
      <a href="#" className="header__logo-link">
        <img src={companyLogo} className="header__logo-img" alt="Company logo" />

        <div className="logo__text-wrapper">
          <p className="logo__text-powered">powered by</p>
          <img src={logoSymbol} className="logo__text-symbol" alt="Logo color symbol" />
          <img src={optima} className="logo__text-optima" alt="Text salus optima" />
        </div>
      </a>
    </div>
  );
};

export default HeaderLogo;
