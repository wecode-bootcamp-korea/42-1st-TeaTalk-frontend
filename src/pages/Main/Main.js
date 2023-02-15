import React, { useState, useEffect } from 'react';
import Slider from './Slider/Slider';
import MainRecommend from './Recommend/mainRecommend';
import TimeSale from './TimeSale/TimeSale';
import Notice from './Notice/Notice';
import './Main.scss';
import Subscribe from './Susbscribe/Subscribe';

function Main() {
  const [timeSale, setTimeSale] = useState([]);

  useEffect(() => {
    fetch('/data/timesaledata.json')
      .then(response => response.json())
      .then(result => setTimeSale(result));
  }, []);

  return (
    <div className="main">
      <div>
        <Slider />
        <Notice />
        <MainRecommend />
      </div>

      <div className="mainEvent">
        <div className="todaySaleBox">
          {timeSale.map((result, i) => {
            const timesale = timeSale[i];
            return <TimeSale key={i} timesale={timesale} />;
          })}
        </div>
        <div className="mainEventLeft">
          <div className="coupon">
            <div className="couponText">
              <div className="couponName">2월 출석체크</div>
              <div className="couponDate">02.01 ~ 02.28</div>
            </div>
          </div>
          <div className="teaTalkStory" />
        </div>
      </div>

      <Subscribe />
    </div>
  );
}

export default Main;
