import { useState, useEffect } from 'react';
import './Main.scss';
import '../../styles/common.scss';
import Slider from './Slider/Slider';
import TimeSale from './TimeSale/TimeSale';
import MainRecommend from './Recommend/mainRecommend';

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
          <div className="Coupon" />
          <div className="teaTalkStory" />
        </div>
      </div>
    </div>
  );
}

export default Main;
