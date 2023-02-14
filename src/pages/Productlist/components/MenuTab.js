import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuModal from './MenuModal';
import './MenuTab.scss';

function MenuTab() {
  const [currentMenuId, setCurrentMenuId] = useState('');
  return (
    <div className="menuTab">
      <div className="menuWrap">
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
        list: ['티제품', '녹차', '홍차', '티세트'],
      },
      {
        id: 2,
        list: ['티푸드', '베이커리', '초콜릿'],
      },
      {
        id: 3,
        list: ['티웨어', '티포트', '텀블러'],
      },
    ],
  },
  {
    id: 2,
    title: '티푸드',
    classname: 'navbarAlign2',
    category: [
      {
        id: 1,
        list: ['선물추천1', '선물세트'],
      },
      {
        id: 2,
        list: ['선물추천2', '선물세트'],
      },
    ],
  },
  {
    id: 2,
    title: '티푸드',
    classname: 'navbarAlign2',
    category: [
      {
        id: 1,
        list: ['선물추천1', '선물세트'],
      },
      {
        id: 2,
        list: ['선물추천2', '선물세트'],
      },
    ],
  },
];

export default MenuTab;
