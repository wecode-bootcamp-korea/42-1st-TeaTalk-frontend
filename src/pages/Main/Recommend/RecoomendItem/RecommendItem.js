import './RecommendItem.scss';

function RecommendItem({ img, title, price }) {
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
