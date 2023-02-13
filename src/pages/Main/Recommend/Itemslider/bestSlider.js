import React, { useState, useEffect } from 'react';
import Product from '../../../../components/Product/Product';
import './bestSlider.scss';

export default function BestSlider() {
  const IMG_WIDTH = 212;
  const [index, setIndex] = useState(0);
  const [transform, setTransform] = useState(0);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch('/data/productList.json')
      .then(response => response.json())
      .then(result => setItemList(result));
  }, []);

  const increment = () => {
    setIndex(index + 1);
    setTransform(previousTransform => previousTransform - IMG_WIDTH);
  };

  const decrement = () => {
    setIndex(index - 1);
    setTransform(previousTransform => previousTransform + IMG_WIDTH);
  };

  return (
    <div className="bestSlider">
      <div className="sliderBox">
        <button className="btn" disabled={index === 0} onClick={decrement}>
          {'<'}
        </button>
        <div className="carouselWrapper">
          <div
            className="itemCtr"
            style={{ transform: `translateX(${transform}px)` }}
          >
            {itemList.map((result, i) => {
              const product = itemList[i];
              return (
                <div className="itemContent">
                  <Product key={i} product={product} />
                </div>
              );
            })}
          </div>
        </div>
        <button className="btn" disabled={index === 2} onClick={increment}>
          {'>'}
        </button>
      </div>
    </div>
  );
}
