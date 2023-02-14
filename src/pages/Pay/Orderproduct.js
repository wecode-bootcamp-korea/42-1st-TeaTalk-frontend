import { useState } from 'react';
import './Orderproduct.scss';

export default function Orderproduct() {
  const [productAmount, setProductAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const [productName, setProductName] = useState('');

  const getProductName = e => {
    setProductName(e.target.value);
  };
  const getPrice = e => {
    setPrice(e.target.value);
  };
  const getProductAmount = e => {
    setProductAmount(e.target.value);
  };

  return (
    <div className="orderProduct">
      <div className="productWrap">
        <div className="leftSection">
          <img src="images/productList/IMG_8576.PNG" alt="orderproduct" />
          <p onChange={getProductName}>ddd{productName}</p>
        </div>
        <div className="priceWrap">
          <p onChange={getPrice}>{price}원/</p>
          <p onChange={getProductAmount}>{productAmount}개</p>
        </div>
      </div>
    </div>
  );
}
