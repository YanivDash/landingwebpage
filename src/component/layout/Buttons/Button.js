import React from 'react';
import './Button.css';

export const Button = (props) => {
  return (
    <div className="buttonsBtn">
      <a
        href="https://twitter.com/masuwa1018"
        className="bTN effect01"
        target="_blank"
      >
        <span>{props.content}</span>
      </a>
    </div>
  );
};
