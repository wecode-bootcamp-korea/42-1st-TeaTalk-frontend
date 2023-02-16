import './Product.scss';

function Product({ product }) {
  return (
    <div className="product">
      <div className="productImgBox">
        <img className="productImg" src={product.productMainImage} />
      </div>
      <div className="productInfo">
        <div className="productTitle">{product.productName}</div>
        <div className="productPrice">{product.productPrice}</div>
      </div>
    </div>
  );
}

export default Product;
