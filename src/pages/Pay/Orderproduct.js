import './Orderproduct.scss';

export default function Orderproduct({
  product,
  getTotalPrice,
  getTotalAmount,
}) {
  getTotalPrice(product.productPrice);
  getTotalAmount(product.totalAmount);
  return (
    <div className="orderProduct">
      <div className="productWrap">
        <div className="leftSection">
          <img src={product.productImg} alt="orderproduct" />
          <p>{product.productName}</p>
        </div>
        <div className="priceWrap">
          <p>{product.productPrice}원/</p>
          <p>{product.totalAmount}개</p>
        </div>
      </div>
    </div>
  );
}
