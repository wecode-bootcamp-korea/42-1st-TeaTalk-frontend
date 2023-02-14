import React, { useState, useEffect } from 'react';
import time from './Icon/time.svg';
import './TimeSale.scss';

export default function TimeSale({ timesale }) {
  const DAY_HOUR = 24;
  const DAY_MINUTE = 59;
  const DAY_SECOND = 59;
  const [hour, setHour] = useState(DAY_HOUR - new Date().getHours());
  const [minute, setMinute] = useState(DAY_MINUTE - new Date().getMinutes());
  const [second, setSecond] = useState(DAY_SECOND - new Date().getSeconds());

  useEffect(() => {
    const id = setInterval(() => {
      setHour(23 - new Date().getHours());
      setMinute(59 - new Date().getMinutes());
      setSecond(59 - new Date().getSeconds());
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
            {hour < 10 ? '0' + hour : hour}:
            {minute < 10 ? '0' + minute : minute}:
            {second < 10 ? '0' + second : second}
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
              ((100 - timesale.discount) / 100)
            ).toLocaleString()}
            원
          </div>
        </div>
      </div>
    </div>
  );
}
