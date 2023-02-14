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

  const NavOnMouseEnter = () => {
    setCurrentMenuId(NAVBAR_LIST[0].id);
  };
  const NavOnMouseLeave = () => {
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
              onMouseEnter={NavOnMouseEnter}
              onMouseLeave={NavOnMouseLeave}
            >
              <div className="navMenu">
                <div className="navMenuTitle"> {title}</div>
                {currentMenuId === id && (
                  <NavModal
                    setCurrentMenuId={setCurrentMenuId}
                    currentMenuId={currentMenuId}
                  />
                )}
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
    title: '제품',
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
    title: '선물추천',
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
