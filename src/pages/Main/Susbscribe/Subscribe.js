import React from 'react';
import './Subscribe.scss';

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribeMain">
        <div className="subscribeTitle">
          <h3 className="subscribeTitleTop">TEA TALK 구독</h3>
          <div className="subscribeTitleBottom">
            하루 한번, 나를 만나는 시간을 가져보세요.
          </div>
        </div>
      </div>

      <div className="subscribeArticles">
        <div className="subscribeArticle">
          <div className="articleHoverBox">
            <div className="articleHoverTextbox">
              <div className="hoverTextboxTop">TEA-TALK BASIC</div>
              <div className="hoverTextboxBottom">
                <span className="hoverTextboxBottomFront">매월</span>
                <span className="hoverTextboxBottomPrice">16,000원</span>
                <span className="hoverTextboxBottomTag">배송비 Free</span>
              </div>
            </div>
            <p>
              TEA TALK에서 매월 그달의 테마와 어울리는 차를 선정하여
              보내드립니다.
              <br />
              일상의 작은 순간들을 차와 함께 새롭게 만나보세요.
            </p>
            <ul>
              <li>
                <span>3종류 이상</span>의 다양한 티세츠 구성
              </li>
              <li>
                <span>2만원 이상</span>정가 구성
              </li>
            </ul>
          </div>
          <div className="articleImgbox">
            <img
              src="https://images.pexels.com/photos/912413/pexels-photo-912413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="다다일상 베이직"
            />
          </div>
          <div className="articleTextbox">
            <div className="textboxTop">TEA-TALK BASIC</div>
            <div className="textboxBottom">
              <span className="textboxBottomFront">매월</span>
              <span className="textboxBottomPrice">16,000원</span>
              <span className="textboxBottomTag">배송비 Free</span>
            </div>
          </div>
        </div>

        <div className="subscribeArticle">
          <div className="articleHoverBox">
            <div className="articleHoverTextbox">
              <div className="hoverTextboxTop">TEA-TALK BASIC</div>
              <div className="hoverTextboxBottom">
                <span className="hoverTextboxBottomFront">매월</span>
                <span className="hoverTextboxBottomPrice">16,000원</span>
                <span className="hoverTextboxBottomTag">배송비 Free</span>
              </div>
            </div>
            <p>
              TEA TALK에서 매월 그달의 테마와 어울리는 차를 선정하여
              보내드립니다.
              <br />
              일상의 작은 순간들을 차와 함께 새롭게 만나보세요.
            </p>
            <ul>
              <li>
                <span>3종류 이상</span>의 다양한 티세츠 구성
              </li>
              <li>
                <span>2만원 이상</span>정가 구성
              </li>
            </ul>
          </div>
          <div className="articleImgbox">
            <img
              src="https://images.pexels.com/photos/990349/pexels-photo-990349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="다다일상 베이직"
            />
          </div>
          <div className="articleTextbox">
            <div className="textboxTop">TEA-TALK BASIC</div>
            <div className="textboxBottom">
              <span className="textboxBottomFront">매월</span>
              <span className="textboxBottomPrice">16,000원</span>
              <span className="textboxBottomTag">배송비 Free</span>
            </div>
          </div>
        </div>

        <div className="subscribeArticle">
          <div className="articleHoverBox">
            <div className="articleHoverTextbox">
              <div className="hoverTextboxTop">TEA-TALK BASIC</div>
              <div className="hoverTextboxBottom">
                <span className="hoverTextboxBottomFront">매월</span>
                <span className="hoverTextboxBottomPrice">16,000원</span>
                <span className="hoverTextboxBottomTag">배송비 Free</span>
              </div>
            </div>
            <p>
              TEA TALK에서 매월 그달의 테마와 어울리는 차를 선정하여
              보내드립니다.
              <br />
              일상의 작은 순간들을 차와 함께 새롭게 만나보세요.
            </p>
            <ul>
              <li>
                <span>3종류 이상</span>의 다양한 티세츠 구성
              </li>
              <li>
                <span>2만원 이상</span>정가 구성
              </li>
            </ul>
          </div>
          <div className="articleImgbox">
            <img
              src="https://images.pexels.com/photos/3094224/pexels-photo-3094224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="다다일상 베이직"
            />
          </div>
          <div className="articleTextbox">
            <div className="textboxTop">TEA-TALK BASIC</div>
            <div className="textboxBottom">
              <span className="textboxBottomFront">매월</span>
              <span className="textboxBottomPrice">16,000원</span>
              <span className="textboxBottomTag">배송비 Free</span>
            </div>
          </div>
        </div>
      </div>
      <div className="articleMore">
        <button>
          TEA TALK 구독하기 &nbsp;
          <i className="fa-solid fa-angle-right" />
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
