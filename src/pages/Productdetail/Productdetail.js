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
  //장바구니 버튼 누르면, productId,qudntity 담아서 서버에 요청하는 fetch
  const submitCart = () => {
    fetch(`http://127.0.01:8000/detail/${productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        productId,
        quantity: count,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
    //if(백엔드 reponse조건에 따라서){
    // navigate('/cart')}
  };
  //mount 되면 데이터 받아오는 fetch
  useEffect(() => {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => setProduct(data.data));
  }, []);

  return (
    <div className="productDetail">
      {product.map(productState => {
        const {
          id,
          product_name,
          price,
          title_image,
          subcategory_name,
          category_name,
          description,
        } = productState;
        return (
          <React.Fragment key={id}>
            <div className="productInfoContainer">
              <div className="productImage">
                <img src={title_image} alt="" />
              </div>
              <div>
                <ul className="benefit">
                  {PURCHASE_BENEFIT.map(({ benefit, id }) => (
                    <li key={id}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="orderContainer">
              <div className="orderHead">
                <p>
                  {category_name} &gt; {subcategory_name}
                </p>
                <h1>{product_name}</h1>
                <h3>{description}</h3>
                <h2 className="price">{price.toLocaleString()}원</h2>
              </div>
              <div className="quantity">
                <p>구매수량</p>
                <div>
                  <button onClick={decreaseQuantity}>-</button>
                  <input onChange={editQuantity} value={count} />

                  <button onClick={increaseQuantity}>+</button>
                </div>
              </div>
              <div className="grandTotal">
                <p>상품금액 합계</p>
                <p>{(count * price).toLocaleString()}원</p>
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
