import React from 'react';
import './Notice.scss';

const Notice = () => {
  const noticeArr = [
    '💛 WECODE 42기 빠이팅 💛',
    '마이솔 내사랑을 받아줘요🙆🏻‍♂️ -찬이가-',
    '42기 1차 프로젝트 고생하셨습니다👏🏻',
  ];

  return (
    <div className="notice">
      <div className="mainNotice">
        <p className="notice">공지사항</p>
        <div className="noticeListInfo">
          <ul className="noticeList">
            {noticeArr.map((notice, index) => {
              return <li key={index}>{notice}</li>;
            })}
          </ul>
          <p className="noticeInfo">
            <i className="fa-solid fa-angle-right" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notice;
