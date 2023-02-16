import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Productlist from '../Productlist/Productlist';
import { PURCHASE_BENEFIT } from './PURCHASE_BENEFIT';
import './ProductDetail.scss';

const ProductDetail = () => {
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

  console.log(`http://10.58.52.55:8000/cart`);
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
    <div className="productDetail">
      {[product].map(productState => {
        const {
          productId,
          productName,
          description,
          productPrice,
          productDiscountPrice,
          productMainImage,
          subcategoryName,
          categoryName,
          images,
        } = productState;
        return (
          <React.Fragment key={productId}>
            <div className="productInfo">
              <div className="productInfoContainer">
                <div className="productImage">
                  <img src={productMainImage} alt="productimage" />
                </div>
                <div className="thumb">
                  <ul>
                    {PURCHASE_BENEFIT.map(({ benefit, id }) => (
                      <li className="benufit" key={id}>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="orderContainer">
              <div className="orderHead">
                <p className="category">
                  {categoryName} &gt; {subcategoryName}
                </p>
                <h1 className="productName">{productName}</h1>
                <h3 className="productDescription">{description}</h3>
                <h2 className="productPrice">
                  {Number(productPrice).toLocaleString()}원
                </h2>
              </div>
              <div className="quantity">
                <p>구매수량</p>
                <div className="quantityBox">
                  <button onClick={decreaseQuantity}>-</button>
                  <input onChange={editQuantity} value={count} />

                  <button onClick={increaseQuantity}>+</button>
                </div>
              </div>
              <div className="grandTotal">
                <p>상품금액 합계</p>
                <p>{(count * productPrice).toLocaleString()}원</p>
              </div>
              <div className="buttonWrapper">
                <button className="moveCart" name="cart" onClick={submitCart}>
                  장바구니
                </button>
                <button className="movePayment" name="purchase">
                  바로구매
                </button>
              </div>
              <div />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProductDetail;
