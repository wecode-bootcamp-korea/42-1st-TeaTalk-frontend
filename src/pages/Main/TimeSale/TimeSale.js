import React, { useState, useEffect } from 'react';
import time from './icons/time.svg';
import './TimeSale.scss';
const DAY_HOUR = 23;
const DAY_MINUTE = 59;
const DAY_SECOND = 59;
const ORIGIN_PRICE_RATE = 100;

export default function TimeSale({ timesale }) {
  const [hour, setHour] = useState(DAY_HOUR - new Date().getHours());
  const [minute, setMinute] = useState(DAY_MINUTE - new Date().getMinutes());
  const [second, setSecond] = useState(DAY_SECOND - new Date().getSeconds());
  const DIGIT_HOUR = hour < 10 ? '0' + hour : hour;
  const DIGIT_MIN = minute < 10 ? '0' + minute : minute;
  const DIGIT_SEC = second < 10 ? '0' + second : second;

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
            {DIGIT_HOUR}:{DIGIT_MIN}:{DIGIT_SEC}
          </div>
        </div>
      </div>

      <div className="timeSaleImg">
        <img src={timesale.img} />
      </div>

      <div className="timeSaleText">
        <div className="timeSaleItem">{timesale.title}</div>
        <div className="timeSaleFooter">
          <div className="timeSaleDiscount">{timesale.discount}%</div>
          <div className="timeSalePrice">
            {Number(timesale.price).toLocaleString()}
          </div>
          <div className="timeSalseEventPrice">
            {(
              timesale.price *
              ((ORIGIN_PRICE_RATE - timesale.discount) / ORIGIN_PRICE_RATE)
            ).toLocaleString()}
            원
          </div>
        </div>
      </div>
    </div>
  );
}
