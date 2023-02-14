import { useState } from 'react';

export default function Orderproduct() {
  const [amonut, setAmoutn] = useState([]);
  const [price, setPrice] = useState();

  return (
    <div>
      <div>
        <p>주문상품</p>
        <p className="nameAndPhone">{amonut}</p>
      </div>
      <div>
        <img />
        <p>상품가격 원 / 개</p>
      </div>
    </div>
  );
}
