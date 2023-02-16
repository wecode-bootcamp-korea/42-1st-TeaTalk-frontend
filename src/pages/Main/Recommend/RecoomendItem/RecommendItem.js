import './RecommendItem.scss';
import { useState } from 'react';

function RecommendItem({ img, title, price }) {
  const [itemList, setItemList] = useState([]);

  // useEffect(() => {
  //   fetch('/data/productList.json')
  //     .then(response => response.json())
  //     .then(result => setItemList(result));
  // }, []);

  return (
    <div className="product">
      <div className="productImgBox">
        <img className="productImg" src={img} />
      </div>

      <div className="productInfo">
        <div className="productTitle">{title}</div>
        <div className="productPrice">{price}</div>
      </div>
    </div>
  );
}

export default RecommendItem;
