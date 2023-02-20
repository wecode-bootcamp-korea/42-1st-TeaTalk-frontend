import React, { useState } from 'react';
import BtnSlider from './BtnSlider';
import './Slider.scss';

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== DATA_SLIDER.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === DATA_SLIDER.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(DATA_SLIDER.length);
    }
  };

  return (
    <div className="slider">
      {DATA_SLIDER.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? 'slide activeAnim' : 'slide'}
          >
            <img src={obj.img} alt="슬라이드 이미지" />
            <div className="alignBox">
              <div className="textBox">
                <h3 className="banTitle">{obj.title}</h3>
                <p className="onepoint">{obj.subTitle}</p>
                <p className="date">{obj.date}</p>
              </div>
              <button
                type="button"
                title="이벤트 전체보기"
                className="btnEvent"
              >
                이벤트 전체보기
              </button>
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />
    </div>
  );
}

const DATA_SLIDER = [
  {
    id: 1,
    title: 'TEA Talk 리미티드 기프트',
    subTitle: 'TEA Talk 프리미엄 초콜릿으로 특별한 발렌타인데이를 보내세요.',
    date: '02.06 - 02.19',
    img: '/images/mainSlide/mainslide1.png',
  },
  {
    id: 2,
    title: '20입 피라미드 20% 할인',
    subTitle: '베스트셀러를 다양하게 즐길 수 있는 20입 제품',
    date: '02.10 - 02.22',
    img: '/images/mainSlide/mainslide2.png',
  },
  {
    id: 3,
    title: '새로운 티톡일상과 조금 더 빨리 만나요.',
    subTitle: '새로워진 티톡일상이 여러분을 찾아옵니다.',
    date: '02.10 - 03.10',
    img: '/images/mainSlide/mainslide3.png',
  },
  {
    id: 4,
    title: '티톡일상에서 당신의 일상을 보여주세요.',
    subTitle: '티라이프 소개하고 티하우스 초대권도 받아가세요.',
    date: '02.13 - 03.05',
    img: '/images/mainSlide/mainslide4.png',
  },
  {
    id: 5,
    title: 'TEA Talk 홈카페 체험하기',
    subTitle: '멤버십 혜택 지금 TEA Talk 홈카페를 경험해보세요.',
    date: '02.15 - 03.30',
    img: '/images/mainSlide/mainslide5.png',
  },
];

export default Slider;
