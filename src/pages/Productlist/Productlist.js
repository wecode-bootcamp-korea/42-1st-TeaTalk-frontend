import { useState, useEffect } from 'react';
import Product from '../../components/Product/Product';
import MenuTab from './components/MenuTab';
import './Productlist.scss';

function Productlist() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.55:8000/products')
      .then(response => response.json())
      .then(({ data }) => setProduct(data));
  }, []);
  return (
    <div className="productList">
      <div className="background" />

      <div className="productWrap">
        <div className="aisde">
          <div className="asideHeader">제품</div>
          <MenuTab />
        </div>

        <div className="productContainer">
          <div className="sortTab">
            <div className="subCategory">제품 리스트</div>
            <div className="sortBtn">
              <button>신상품순</button>
              <button>높은 가격순</button>
              <button>낮은 가격순</button>
            </div>
          </div>
          <div className="filterTab">
            <h3>총 {product.length}개의 상품이 있습니다.</h3>
            <div className="filterBtn">
              <button>type</button>
              <button>type</button>
              <button>type</button>
              <button>type</button>
            </div>
          </div>

          <div className="itemContainer">
            {product.map((product, productId) => {
              return (
                // <div className="itemBox">
                <Product key={productId} product={product} />
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productlist;
