import { useState } from 'react';
import '../../../styles/common.scss';

import './mainRecommend.scss';
import BestSlider from './Itemslider/bestSlider';
import WeeklySlider from './Itemslider/weeklySlider';

function MainRecommend() {
  const [tab, setTab] = useState(0);

  return (
    <div className="mainRecommend">
      <div className="articleTitle">
        오늘은 어떤 차를 마셔볼까요 ?
        <button className="recommendBtn" onClick={() => setTab(0)}>
          {' '}
          베스트{' '}
        </button>
        <button className="recommendBtn" onClick={() => setTab(1)}>
          {' '}
          이번 주 인기 제품
        </button>
      </div>{' '}
      <div className="recommendSlider">
        {tab == 0 ? <BestSlider /> : <WeeklySlider />}
      </div>
      <button className="moreBtn"> 더 보기 </button>
    </div>
  );
}
export default MainRecommend;
