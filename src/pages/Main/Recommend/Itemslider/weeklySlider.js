import React, { useState } from 'react';
import './weeklySlider.scss';

export default function WeeklySlider() {
  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [index, setIndex] = useState(0);
  const [transform, setTransform] = useState(0);

  const increment = () => {
    setIndex(index + 1);
    setTransform(previousTransform => previousTransform - 212);
  };

  const decrement = () => {
    setIndex(index - 1);
    setTransform(previousTransform => previousTransform + 212);
  };

  return (
    <div className="weeklySlider">
      <div className="sliderBox">
        <button className="btn" disabled={index === 0} onClick={decrement}>
          {'<'}
        </button>
        <div className="carouselWrapper">
          <div
            className="itemCtr"
            style={{ transform: `translateX(${transform}px)` }}
          >
            {items.map(item => (
              <div key={item} className="item">
                <div className="item-content">{item + 1}</div>
              </div>
            ))}
          </div>
        </div>
        <button className="btn" disabled={index === 4} onClick={increment}>
          {'>'}
        </button>
      </div>
    </div>
  );
}
