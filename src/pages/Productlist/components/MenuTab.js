import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuModal from './MenuModal';
import './MenuTab.scss';

function MenuTab() {
  const [currentMenuId, setCurrentMenuId] = useState('');
  return (
    <div className="menuTab11">
      {CATEGORY.map(({ title, id }) => {
        return (
          <div
            className="navMenuWrap"
            key={id}
            onMouseEnter={() => setCurrentMenuId(id)}
            onMouseLeave={() => setCurrentMenuId()}
          >
            <div className="A1">
              <div className="A2"> {title}</div>
              {currentMenuId === id ? (
                <MenuModal
                  setCurrentMenuId={setCurrentMenuId}
                  currentMenuId={currentMenuId}
                />
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const CATEGORY = [
  {
    id: 1,
    title: '티제품',
    classname: 'navbarAlign1',
    category: [
      {
        id: 1,
        list: ['전체상품', '녹차', '홍차', '티세트'],
      },
    ],
  },
  {
    id: 2,
    title: '티푸드',
    classname: 'navbarAlign1',
    category: [
      {
        id: 1,
        list: ['전체상품', '과자/초콜릿', '베이커리', '아이스크림'],
      },
    ],
  },
  {
    id: 3,
    title: '라이프 스타일',
    classname: 'navbarAlign1',
    category: [
      {
        id: 1,
        list: ['전체상품', '스킨케어'],
      },
    ],
  },
  // {
  //   id: 2,
  //   title: '티푸드',
  //   classname: 'navbarAlign2',
  //   category: [
  //     {
  //       id: 1,
  //       list: ['선물추천1', '선물세트'],
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   title: '티푸드',
  //   classname: 'navbarAlign2',
  //   category: [
  //     {
  //       id: 1,
  //       list: ['선물추천1', '선물세트'],
  //     },
  //     {
  //       id: 2,
  //       list: ['선물추천2', '선물세트'],
  //     },
  //   ],
  // },
];

export default MenuTab;
