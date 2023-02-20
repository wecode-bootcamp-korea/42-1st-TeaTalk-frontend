import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import CartList from './CartList';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import CartList from './CartList';
import './Cart.scss';
export default function Cart() {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(1);
  const params = useParams();
  const productId = params.id;
  const navigate = useNavigate();
  const submitCart = () => {
    fetch(`http://10.58.52.55:8000/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: '',
      },
      body: JSON.stringify({
        productId: productId,
        quantity: count,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === '상품이 장바구니에 추가되었습니다.') {
          navigate('/pay');
        } else {
          alert('다음');
        }
      });
  };
  useEffect(() => {
    fetch(`http://10.58.52.55:8000/products/detail/17`)
      .then(response => response.json())
      .then(({ data }) => {
        setProduct(data[0]);
      });
  }, []);
  return (
    <div className="cart">
      <div key={productId} className="cartContaniner">
        <div className="left">
          <header>
            <h1>장바구니</h1>
          </header>
          {[product].map(productState => {
            const {
              productId,
              productName,
              // description,
              productPrice,
              // productDiscountPrice,
              productMainImage,
              // subcategoryName,
              // categoryName,
              // images,
            } = productState;
            return (
              <CartList
                key={productId}
                productMainImage={productMainImage}
                productId={productId}
                productName={productName}
                productPrice={productPrice}
                count={count}
                setCount={setCount}
              />
            );
          })}{' '}
          <div className="orderContainer">
            <button className="allOrder" onClick={submitCart}>
              전체상품 주문하기
            </button>
          </div>
          <div className="right">
            <ul>
              <li>
                <span>상품 금액</span>
                <span>{Number(product.productPrice).toLocaleString()}원</span>
              </li>
              <li>
                <span className="expectation">결제 예상 금액</span>
                <span className="expectation">
                  {(count * product.productPrice).toLocaleString()}원
                </span>
              </li>
              <li>
                <div className="totalOrder">
                  <span>
                    {(count * product.productPrice).toLocaleString()}원
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
