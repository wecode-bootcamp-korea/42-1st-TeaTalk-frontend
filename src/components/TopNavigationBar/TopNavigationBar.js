import './TopNavigationBar.scss';
import { Link } from 'react-router-dom';

export const TopNavigationBar = ({ cart }) => {
  return (
    <header className="header">
      <div className="inner">
        <Link to="/">
          <h1 className="logo">
            <img src="/images/logo.png" alt="logo" />
          </h1>
        </Link>
        <div className="inputWrap">
          <input type="text" placeholder="상품을 검색해보세요!" />
          <img src="/images/icon-search.svg" alt="search" />
        </div>
      </div>

      <div className="menu">
        <Link to="/cart">
          <div className="shoppingCart">
            <img src="/images/icon-shopping-cart.svg" alt="cart" />
            <span>장바구니</span>
            {cart.length >= 1 ? (
              <div className="newShoppingCart">
                <p>{cart.length}</p>
              </div>
            ) : (
              ''
            )}
          </div>
        </Link>
        <Link to="">
          <div className="myPage">
            <img src="/images/icon-user.svg" alt="user" />
            <span>로그인</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
