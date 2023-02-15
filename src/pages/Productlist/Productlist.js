import { useState, useEffect } from 'react';
import Product from '../../components/Product/Product';
import MenuTab from './components/MenuTab';
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
        <div className="aisde">
          <div className="asideHeader">제품</div>
          {/* <div className="menuItem"> */}
          <MenuTab />
          {/* <ul>
              <li>Category</li>
              <li>Category</li>
              <li>Category</li>
            </ul> */}
          {/* </div> */}
        </div>

        <div className="productContainer">
          <div className="sortTab">
            <div className="subCategory">subCategory</div>
            <div className="sortBtn">
              <button>sort</button>
              <button>sort</button>
              <button>sort</button>
            </div>
          </div>
          <div className="filterTab">
            <h3>총 100개의 상품이 있어</h3>
            <div className="filterBtn">
              <button>type</button>
              <button>type</button>
              <button>type</button>
              <button>type</button>
            </div>
          </div>

          <div className="itemContainer">
            {itemList.map((result, i) => {
              const product = itemList[i];
              return <Product key={i} product={product} />;
            })}
          </div>
          <div className="pageNation">pagenation</div>
        </div>
      </div>
    </div>
  );
}

export default Productlist;
