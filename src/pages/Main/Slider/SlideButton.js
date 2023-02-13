import React from 'react';
import './Slider.scss';
import rightArrow from './icon/right-arrow.svg';
import leftArrow from './icon/left-arrow.svg';

export default function BtnSlider({ direction, moveslide }) {
  return (
    <button
      key={moveslide}
      onClick={moveslide}
      className={direction === 'next' ? 'btnSlide next' : 'btnSlide prev'}
    >
      <img src={direction === 'next' ? rightArrow : leftArrow} alt="Arrow" />
    </button>
  );
}
