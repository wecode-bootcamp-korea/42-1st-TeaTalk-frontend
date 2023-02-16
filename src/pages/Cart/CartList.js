import './Cart.scss';

const CartList = ({
  productId,
  productName,
  productPrice,
  productMainImage,
}) => {
  const decreaseQuantity = () => {
    if (count === 1) return;
    setCount(prev => prev - 1);
  };

  const increaseQuantity = () => {
    if (count >= 10) return;
    setCount(prev => prev + 1);
  };

  const editQuantity = e => {
    const switchedValueToNumber = Number(e.target.value);
    if (switchedValueToNumber >= 11) {
      alert('10보다클 수 없습니다');
      return;
    }
    setCount(switchedValueToNumber);
  };

  return (
    <section className="cartProductList">
      <img width="200px" alt="productImg" src={productMainImage} />
      <p>{productName}</p>
      <p>{productPrice}</p>
      <div className="quantity">
        <p>구매수량</p>
        <div className="quantityBox">
          <button onClick={decreaseQuantity}>-</button>
          <input onChange={editQuantity} value={count} />
          <button onClick={increaseQuantity}>+</button>
        </div>
      </div>
    </section>
  );
};

export default CartList;
