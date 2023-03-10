import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavModal from './NavModal/NavModal';
import Navlogin from './NavModal/Navlogin/Navlogin';
import NavInfo from './NavModal/Nabinfo/Navinfo';
import cart from './icon/cart.svg';
import info from './icon/info.svg';
import './Nav.scss';

function Nav() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [currentMenuId, setCurrentMenuId] = useState(0);

  const navOnMouseLeave = () => {
    setCurrentMenuId(0);
  };

  const navOnMouseEnter = id => {
    setCurrentMenuId(id);
  };

  const infoOnMouse = () => {
    setIsInfoOpen(prev => !prev);
  };
  const loginOnMouse = () => {
    setIsLoginOpen(prev => !prev);
  };

  return (
    <div className="nav">
      <div className="startHeader">
        <Link to="/">
          <img className="logo" src="images/nav/Logo.PNG" alt="Logo" />
        </Link>
      </div>

      <div className="secondHeader">
        {NAVBAR_LIST.map(({ title, id }) => {
          return (
            <div
              className="navMenuWrap"
              key={id}
              onMouseEnter={() => {
                navOnMouseEnter(id);
              }}
              onMouseLeave={navOnMouseLeave}
            >
              <div className="navMenu">
                <Link to="/productlist">
                  <div className="navMenuTitle"> {title}</div>
                </Link>
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
        <div className="infoWrap" onMouseLeave={infoOnMouse}>
          <img
            className="infoImg"
            src={info}
            alt="info"
            onMouseOver={infoOnMouse}
          />
          {isInfoOpen === true ? <NavInfo /> : null}
        </div>
      </div>
      <div className="endHeader">
        <div className="loginWrap" onMouseLeave={loginOnMouse}>
          <div className="loginBtn" onMouseOver={loginOnMouse}>
            ?????????
          </div>
          {isLoginOpen === true ? <Navlogin /> : null}
        </div>
      </div>
    </div>
  );
}

export default Nav;

export const NAVBAR_LIST = [
  {
    id: 1,
    title: '?????????',
    classname: 'teashop',
    category: [
      {
        id: 1,
        list: '??????',
        subclassname: 'greentea',
      },
      {
        id: 2,
        list: '??????',
        subclassname: 'blacktea',
      },
      {
        id: 3,
        list: '?????????',
        subclassname: 'teaset',
      },
      {
        id: 4,
        list: '??????????????????',
        subclassname: 'teaset',
      },
    ],
  },
  {
    id: 2,
    title: '?????????',
    classname: 'teafood',
    category: [
      {
        id: 1,
        list: '??????',
        subclassname: 'cake',
      },
      {
        id: 2,
        list: '????????????',
        subclassname: 'bread',
      },
      {
        id: 3,
        list: '???????????????',
        subclassname: 'bread',
      },
    ],
  },
  {
    id: 3,
    title: '?????????',
    classname: 'teaware',
    category: [
      {
        id: 1,
        list: '?????????',
        subclassname: 'tumblr',
      },
      {
        id: 2,
        list: '????????? ??????',
        subclassname: 'tumblr',
      },
    ],
  },
];
