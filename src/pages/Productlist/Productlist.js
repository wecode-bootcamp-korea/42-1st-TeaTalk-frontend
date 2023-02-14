import { useState, useEffect } from 'react';
import Product from '../../components/Product/Product';
import './Productlist.scss';

function Productlist() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch('/data/productList.json')
      .then(response => response.json())
      .then(result => setItemList(result));
  }, []);

  return (
    <div className="productList">
      <div className="background" />

      <div className="productWrap">
        <div className="menuTab">
          <div />
          <div />
        </div>

        <div className="productContainer">
          <div />
          <div />
        </div>
      </div>

      <div className="itemContainer">
        {itemList.map((result, i) => {
          const product = itemList[i];
          return <Product key={i} product={product} />;
        })}
      </div>
    </div>
  );
}

export default Productlist;
