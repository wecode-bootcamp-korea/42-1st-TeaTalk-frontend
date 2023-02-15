import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavModal from './NavModal/NavModal';
import Navlogin from './NavModal/Navlogin';
import Navinfo from './NavModal/Navinfo';
import cart from './icon/cart.svg';
import info from './icon/info.svg';
import './Nav.scss';

function Nav() {
  const [navlogin, setNavlogin] = useState(false);
  const [navinfo, setNavinfo] = useState(false);
  const [currentMenuId, setCurrentMenuId] = useState('');

  const navOnMouseEnter = () => {
    setCurrentMenuId(NAVBAR_LIST[0].id);
  };
  const navOnMouseLeave = () => {
    setCurrentMenuId();
  };
  const infoOnMouseLeave = () => {
    setNavinfo(false);
  };
  const infoOnMouseEnter = () => {
    setNavinfo(true);
  };
  const loginOnMouseLeave = () => {
    setNavlogin(false);
  };
  const loginOnMouseOver = () => {
    setNavlogin(true);
  };

  return (
    <div className="nav">
      <div className="startHeader">
        <Link to="/Main">
          <img className="logo" src="images/nav/Logo.PNG" alt="Logo" />
        </Link>
      </div>

      <div className="secondHeader">
        {NAVBAR_LIST.map(({ title, id }) => {
          return (
            <div
              className="navMenuWrap"
              key={id}
              onMouseEnter={navOnMouseEnter}
              onMouseLeave={navOnMouseLeave}
            >
              <div className="navMenu">
                <div className="navMenuTitle"> {title}</div>
                {currentMenuId === id ? (
                  <NavModal
                    setCurrentMenuId={setCurrentMenuId}
                    currentMenuId={currentMenuId}
                  />
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      <div className="thirdHeader">
        <div className="cartWrap">
          <Link to="/cart">
            <img className="cartImg" src={cart} alt="cart" />
          </Link>
        </div>
        <div className="infoWrap" onMouseLeave={infoOnMouseLeave}>
          <img
            className="infoImg"
            src={info}
            alt="info"
            onMouseOver={infoOnMouseEnter}
          />
          {navinfo === true ? <Navinfo /> : null}
        </div>
      </div>
      <div className="endHeader" onMouseLeave={loginOnMouseLeave}>
        <div className="endHeaderLogin" onMouseOver={loginOnMouseOver}>
          로그인
          {navlogin === true ? <Navlogin /> : null}
        </div>
      </div>
    </div>
  );
}

export default Nav;

export const NAVBAR_LIST = [
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
