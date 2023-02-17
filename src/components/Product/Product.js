import { Link } from 'react-router-dom';
import './Product.scss';

function Product({ product }) {
  return (
    <div
      className="product"
      key={product.productId}
      price={product.price}
      // onClick={() => goToDetail(product.productId)}
    >
      <Link key={product.productId} to={`/productdetail/${product.productId}`}>
        <div className="productImgBox">
          <img className="productImg" src={product.productMainImage} />
        </div>
        <div className="productInfo">
          <div className="productTitle">{product.productName}</div>
          <div className="productPrice">
            {Number(product.productPrice).toLocaleString()}원
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
