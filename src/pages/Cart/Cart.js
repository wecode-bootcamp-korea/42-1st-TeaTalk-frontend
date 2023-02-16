import { Link } from 'react-router-dom';
import { CartList } from './CartList';
import './Cart.scss';

function Cart() {
  return (
    <div className="cartContainer">
      <div className="left">
        <header>
          <h1>장바구니</h1>
        </header>
        <div className="selectAll">
          <span>전체선택</span>
        </div>
        <div className="list" />
        <CartList />
        <div className="orderContainer">
          <button className="pickOrder">선택상품 주문</button>
          <button className="allOrder">전체상품 주문하기</button>
        </div>
      </div>
      <div className="right">
        <div>
          <div>
            <ul>
              <li>
                <span>상품 금액</span> <span>+0원</span>
              </li>
              <li>
                <span>상품 할인</span>
                <span>-0원</span>
              </li>
              <li>
                <span>포장비</span>
                <span>+0원</span>
              </li>
              <li>
                <span>부가 쇼핑백</span> <span>+0원</span>
              </li>
              <li>
                <span>배송비</span>
                <span>+0원</span>
              </li>
              <li>
                <span>결제 예상 금액</span> <span>0원</span>
              </li>
              <li>
                <div className="totalOrder">
                  <span>0원 주문하기</span>
                </div>
              </li>
              <Link to="#" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
