import './Product.scss';
import '../../styles/common.scss';

function Product({ product }) {
  return (
    <div className="product">
      <div className="productImgBox">
        <img className="productImg" src={product.img} />
      </div>
      <div className="productInfo">
        <div className="productTitle">{product.title}</div>
        <div className="productPrice">{product.price}</div>
      </div>
    </div>
  );
}

export default Product;
