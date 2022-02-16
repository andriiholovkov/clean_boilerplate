import React from 'react';
import './Button.scss';

interface ButtonProps {
  title: string;
  className: string;
  clickHandler?: () => void;
}

const Button = ({ title, className, clickHandler }: ButtonProps) => {
  return (
    <button className={className} onClick={clickHandler}>
      {title}
    </button>
  );
};

export default Button;
