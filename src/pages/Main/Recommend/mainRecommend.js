import React from 'react';
import BestSlider from './BestSlider/BestSlider';
import './mainRecommend.scss';

function MainRecommend() {
  return (
    <div className="mainRecommend">
      <div className="articleTitle">오늘은 어떤 차를 마셔볼까요 ? </div>{' '}
      <div className="recommendSlider">
        <BestSlider />
      </div>
      <button className="moreBtn"> 더 보기 </button>
    </div>
  );
}
export default MainRecommend;
