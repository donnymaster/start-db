import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = ({ msg }) => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent droids to fix it) <br />
      </span>
      <div>
        <span
          className="text-center font-weight-bold text-danger"
        >Status code: { msg }</span>
      </div>
    </div>
  );
};

export default ErrorIndicator;
