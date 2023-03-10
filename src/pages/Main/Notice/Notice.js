import React from 'react';
import './Notice.scss';

const Notice = () => {
  const noticeArr = [
    '⚙️ 공지사항을 입력해주세요 ⚙️',
    '⚙️ 공지사항을 입력해주세요 ⚙️',
    '⚙️ 공지사항을 입력해주세요 ⚙️',
    '⚙️ 공지사항을 입력해주세요 ⚙️',
    '⚙️ 공지사항을 입력해주세요 ⚙️',
    '⚙️ 공지사항을 입력해주세요 ⚙️',
    '⚙️ 공지사항을 입력해주세요 ⚙️',
    '⚙️ 공지사항을 입력해주세요 ⚙️',
    '⚙️ 공지사항을 입력해주세요 ⚙️',
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
