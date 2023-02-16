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

  const decreaseQuantity = () => {
    if (count === 1) return;
    setCount(prev => prev - 1);
  };

  const increaseQuantity = () => {
    if (count >= 10) return;
    setCount(prev => prev + 1);
  };

  const editQuantity = e => {
    const switchedValueToNumber = Number(e.target.value);
    if (switchedValueToNumber >= 11) {
      alert('10보다클 수 없습니다');
      return;
    }
    setCount(switchedValueToNumber);
  };

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
          navigate('/cart');
        } else {
          alert('다시 요청 해 주세요');
        }
      });
  };
  useEffect(() => {
    fetch(`http://10.58.52.55:8000/products/detail/1`)
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
          <div className="selectAll">
            <span>전체선택</span>
          </div>
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
              // <div key={productId} className="cartContaniner">
              //   <div className="left">
              //     <header>
              //       <h1>장바구니</h1>
              //     </header>
              //     <div className="selectAll">
              //       <span>전체선택</span>
              //     </div>
              <CartList
                key={productId}
                productMainImage={productMainImage}
                productId={productId}
                productName={productName}
                productPrice={productPrice}
              />
            );
          })}{' '}
          <div className="orderContainer">
            <button className="pickOrder">선택상품 주문</button>
            <button className="allOrder" onClick={submitCart}>
              전체상품 주문하기
            </button>
          </div>
          <div className="right" />
        </div>
        <ul>
          <li>
            <span>상품 금액</span> <span>{product.productPrice}원</span>
          </li>
          <li>
            <span>상품할인</span> <span>-0원</span>
          </li>
          <li>
            <span>포장비</span> <span>+0원</span>
          </li>
          <li>
            <span>부가 쇼핑백</span> <span>+0원</span>
          </li>
          <li>
            <span>배송비</span> <span>+0원</span>
          </li>
          <li>
            <span>결제 예상 금액</span> <span>0원</span>
          </li>
          <li>
            <div className="totalOrder">
              <span>
                {(count * product.productPrice).toLocaleString()}원 주문하기
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
