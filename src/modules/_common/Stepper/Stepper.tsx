import React from 'react';
import './Stepper.scss';

const Stepper = () => {
  return (
    <div>
      <div className="progress__bar-wrapper">
        <div className="progress__bar">
          <div className="progress__bar-step" />
        </div>
      </div>
    </div>
  );
};

export default Stepper;
