import './Product.scss';

function Product({ product }) {
  return (
    <div className="product">
      <div className="productImgBox">
        <img className="productImg" src={product.product_main_image} />
      </div>
      <div className="productInfo">
        <div className="productTitle">{product.product_name}</div>
        <div className="productPrice">{product.product_price}</div>
      </div>
    </div>
  );
}

export default Product;
