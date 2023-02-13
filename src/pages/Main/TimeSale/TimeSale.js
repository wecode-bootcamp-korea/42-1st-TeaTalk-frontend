import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../../../../styles/common.scss';
import './TimeSale.scss';

import time from './Icon/time.svg';

export default function TimeSale({ timesale }) {
  // console.log({ timeSale });
  const [hour, setHour] = useState(23 - new Date().getHours());
  const [minute, setMinute] = useState(59 - new Date().getMinutes());
  const [second, setSecond] = useState(59 - new Date().getSeconds());

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
      {/* <img className="timeSaleImg" scr={timesale.img} art={timesale.title} /> */}
      {/* <img className="timeSaleImg" src="/public/images/main/item2.jpg" /> */}
    </div>
  );
}
