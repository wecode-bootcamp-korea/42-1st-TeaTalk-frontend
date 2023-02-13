import './Productlist';
import { useState, useEffect } from 'react';
import './Productlist.scss';
import '../../styles/common.scss';
import Product from '../Product/Product';

function Productlist() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch('/data/productList.json')
      .then(response => response.json())
      .then(result => setItemList(result));
  }, []);

  return (
    <div className="main-bg">
      <div className="main-recommend" />
      <div className="main-best-item">
        {itemList.map((result, i) => {
          const product = itemList[i];
          return <Product key={i} product={product} />;
        })}
      </div>
    </div>
  );
}

export default Productlist;
