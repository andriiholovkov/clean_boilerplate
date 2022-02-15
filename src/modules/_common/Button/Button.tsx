import React from 'react';
import './Button.scss';

interface Props {
  title: string;
  className: string;
  clickHandler?: () => void;
}

const Button = ({ title, className, clickHandler }: Props) => {
  return (
    <button className={className} onClick={clickHandler}>
      {title}
    </button>
  );
};

export default Button;
