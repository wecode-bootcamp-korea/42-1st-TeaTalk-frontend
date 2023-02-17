import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuModal from './MenuModal';
import './MenuTab.scss';

function MenuTab() {
  const [currentMenuId, setCurrentMenuId] = useState('');
  const navigate = useNavigate();
  return (
    <div className="menuTab">
      {CATEGORY.map(({ title, id, classname }) => {
        return (
          <div
            className="menuBox"
            key={id}
            onMouseEnter={() => setCurrentMenuId(id)}
            onMouseLeave={() => setCurrentMenuId()}
          >
            <div className="menuWrap">
              {currentMenuId === id ? (
                <MenuModal
                  setCurrentMenuId={setCurrentMenuId}
                  currentMenuId={currentMenuId}
                />
              ) : null}
              <div
                className="categoryTitle"
                onClick={() => {
                  navigate(`/products/?categoryId=${classname}`);
                }}
              >
                {title}
              </div>
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
    classname: 'teashop',
    category: [
      {
        id: 1,
        list: '녹차',
        subclassname: 'greentea',
      },
      {
        id: 2,
        list: '홍차',
        subclassname: 'blacktea',
      },
      {
        id: 3,
        list: '티세트',
        subclassname: 'teaset',
      },
    ],
  },
  {
    id: 2,
    title: '티푸드',
    classname: 'teafood',
    category: [
      {
        id: 1,
        list: '케익',
        subclassname: 'cake',
      },
      {
        id: 2,
        list: '빵',
        subclassname: 'bread',
      },
    ],
  },
  {
    id: 3,
    title: '티웨어',
    classname: 'teaware',
    category: [
      {
        id: 1,
        list: '텀블러',
        subclassname: 'tumblr',
      },
    ],
  },
];

export default MenuTab;
