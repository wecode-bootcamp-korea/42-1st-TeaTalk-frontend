import React from 'react';
import rightArrow from './icon/right-arrow.svg';
import leftArrow from './icon/left-arrow.svg';
import './Slider.scss';

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      key={moveSlide}
      onClick={moveSlide}
      className={direction === 'next' ? 'btnSlide next' : 'btnSlide prev'}
    >
      <img src={direction === 'next' ? rightArrow : leftArrow} alt="Arrow" />
    </button>
  );
}
