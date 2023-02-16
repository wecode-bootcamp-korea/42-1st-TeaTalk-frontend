import React, { useState, useEffect } from 'react';
import time from './icons/time.svg';
import './TimeSale.scss';
const DAY_HOUR = 23;
const DAY_MINUTE = 59;
const DAY_SECOND = 59;
const ORIGIN_PRICE_RATE = 100;

export default function TimeSale({ title, price, discount, img }) {
  const [hour, setHour] = useState(DAY_HOUR - new Date().getHours());
  const [minute, setMinute] = useState(DAY_MINUTE - new Date().getMinutes());
  const [second, setSecond] = useState(DAY_SECOND - new Date().getSeconds());
  const digitHour = hour < 10 ? '0' + hour : hour;
  const digitMin = minute < 10 ? '0' + minute : minute;
  const digitSec = second < 10 ? '0' + second : second;

  useEffect(() => {
    const id = setInterval(() => {
      setHour(DAY_HOUR - new Date().getHours());
      setMinute(DAY_MINUTE - new Date().getMinutes());
      setSecond(DAY_SECOND - new Date().getSeconds());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="timeSale">
      <div className="timeSaleHeader">
        <div className="timeSaleTitle"> 오늘만 이가격 </div>
        <div className="timer">
          <div>
            <img className="timeImg" src={time} />
          </div>
          <div>
            {digitHour}:{digitMin}:{digitSec}
          </div>
        </div>
      </div>

      <div className="timeSaleImg">
        <img src={img} />
      </div>

      <div className="timeSaleText">
        <div className="timeSaleItem">{title}</div>
        <div className="timeSaleFooter">
          <div className="timeSaleDiscount">{discount}%</div>
          <div className="timeSalePrice">{Number(price).toLocaleString()}</div>
          <div className="timeSalseEventPrice">
            {(
              price *
              ((ORIGIN_PRICE_RATE - discount) / ORIGIN_PRICE_RATE)
            ).toLocaleString()}
            원
          </div>
        </div>
      </div>
    </div>
  );
}
