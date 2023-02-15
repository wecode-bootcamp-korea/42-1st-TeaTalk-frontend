import React from 'react';
import './Subscribe.scss';

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe-main">
        <div className="subscribe-title">
          <h3 className="subscribe-title-top">코드일상 구독</h3>
          <div className="subscribe-title-bottom">
            하루 한번, 나를 만나는 시간을 가져보세요.
          </div>
        </div>
      </div>
      <div className="subscribe-articles">
        <div className="subscribe-article">
          <div className="article-hover-box">
            <div className="article-hover-textbox">
              <div className="hover-textbox-top">
                새롭게 만나는 코드, 코드일상 베이직
              </div>
              <div className="hover-textbox-bottom">
                <span className="hover-textbox-bottom-front">매월</span>
                <span className="hover-textbox-bottom-price">16,000원</span>
                <span className="hover-textbox-bottom-tag">배송비 Free</span>
              </div>
            </div>
            <p>
              위코드 코드 소믈리에가 매월 그달의 테마와 어울리는 코드를 선정하여
              문제로 보내드립니다.
              <br />
              일상의 작은 순간들을 코드와 함께 새롭게 만나보세요.
            </p>
            <ul>
              <li>
                <span>3종류 이상</span>의 다양한 코드 구성
              </li>
              <li>
                <span>2만원 이상</span>정가 구성
              </li>
            </ul>
          </div>
          <div className="article-imgbox">
            <img
              src="https://images.pexels.com/photos/5946743/pexels-photo-5946743.jpeg?"
              alt="다다일상 베이직"
            />
          </div>
          <div className="article-textbox">
            <div className="textbox-top">
              새롭게 만나는 코드, 코드일상 베이직
            </div>
            <div className="textbox-bottom">
              <span className="textbox-bottom-front">매월</span>
              <span className="textbox-bottom-price">16,000원</span>
              <span className="textbox-bottom-tag">배송비 Free</span>
            </div>
          </div>
        </div>
        <div className="subscribe-article">
          <div className="article-hover-box">
            <div className="article-hover-textbox">
              <div className="hover-textbox-top">
                다르게 만나는 코드, 코드일상 홈카페
              </div>
              <div className="hover-textbox-bottom">
                <span className="hover-textbox-bottom-front">매월</span>
                <span className="hover-textbox-bottom-price">25,000원</span>
                <span className="hover-textbox-bottom-tag">배송비 Free</span>
              </div>
            </div>
            <p>
              매월 위코드가 코드를 이용한 새로운 프로젝트를
              소개해드립니다.다양한 프로젝트를 따라하면서 코드를 <br />
              색다르게 경험해보세요.
            </p>
            <ul>
              <li>
                <span>3종류 이상</span>의 다양한 코드/프로젝트 구성
              </li>
              <li>
                <span>3만 5천원 이상</span>정가 구성
              </li>
            </ul>
          </div>
          <div className="article-imgbox">
            <img
              src="https://images.pexels.com/photos/7303693/pexels-photo-7303693.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="다다일상 홈카페"
            />
          </div>
          <div className="article-textbox">
            <div className="textbox-top">
              다르게 만나는 코드, 코드일상 홈카페
            </div>
            <div className="textbox-bottom">
              <span className="textbox-bottom-front">매월</span>
              <span className="textbox-bottom-price">25,000원</span>
              <span className="textbox-bottom-tag">배송비 Free</span>
            </div>
          </div>
        </div>
        <div className="subscribe-article">
          <div className="article-hover-box">
            <div className="article-hover-textbox">
              <div className="hover-textbox-top">
                매일 만나는 코드, 정기배송
              </div>
              <div className="hover-textbox-bottom">
                <span className="hover-textbox-bottom-tag">배송비 Free</span>
              </div>
            </div>
            <p>
              원하는 코드를 집에서 매월 편하게 받아보세요.
              <br />
              위코드와 함께 편안한 코드 라이프를 즐겨보세요
            </p>
          </div>
          <div className="article-imgbox">
            <img
              src="https://images.pexels.com/photos/3563614/pexels-photo-3563614.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="정기배송"
            />
          </div>
          <div className="article-textbox">
            <div className="textbox-top">매일 만나는 차, 정기배송</div>
            <div className="textbox-bottom">
              <span className="textbox-bottom-tag">배송비 Free</span>
            </div>
          </div>
        </div>
      </div>
      <div className="article-more">
        <button>
          코드일상 자세히 보기&nbsp;
          <i className="fa-solid fa-angle-right" />
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
