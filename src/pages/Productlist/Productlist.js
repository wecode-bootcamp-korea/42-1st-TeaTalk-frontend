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
    <>
      <div className="background" />
      <div className="itemContainer">
        {itemList.map((result, i) => {
          const product = itemList[i];
          return <Product key={i} product={product} />;
        })}
      </div>
    </>
  );
}

export default Productlist;
