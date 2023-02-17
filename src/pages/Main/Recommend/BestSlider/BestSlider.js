import React, { useState, useEffect } from 'react';
import RecommendItem from '../RecoomendItem/RecommendItem';
import './BestSlider.scss';

const IMG_WIDTH = 212;

export default function BestSlider() {
  const [index, setIndex] = useState(0);
  const [transform, setTransform] = useState(0);
  const [itemList, setItemList] = useState([]);
  const isReachedEnd = index === 3;

  useEffect(() => {
    fetch('/data/recommenditemdata.json')
      .then(response => response.json())
      .then(result => setItemList(result));
  }, []);

  const nextSlde = () => {
    setIndex(index + 1);
    setTransform(previousTransform => previousTransform - IMG_WIDTH);
  };

  const prevSlide = () => {
    setIndex(index - 1);
    setTransform(previousTransform => previousTransform + IMG_WIDTH);
  };

  return (
    <div className="bestSlider">
      <div className="sliderBox">
        <button className="btn" disabled={index === 0} onClick={prevSlide}>
          {'<'}
        </button>
        <div className="carouselWrapper">
          <div
            className="itemCtr"
            style={{ transform: `translateX(${transform}px)` }}
          >
            {itemList.map(({ id, img, title, price }) => {
              return (
                <div className="itemContent">
                  <RecommendItem
                    key={id}
                    img={img}
                    title={title}
                    price={price}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <button className="btn" disabled={isReachedEnd} onClick={nextSlde}>
          &gt;
        </button>
      </div>
    </div>
  );
}
