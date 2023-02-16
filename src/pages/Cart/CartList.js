import './Cart.scss';

const CartList = ({
  productId,
  productName,
  productPrice,
  productMainImage,
}) => {
  return (
    <section className="cartProductList">
      <img width="200px" alt="productImg" src={productMainImage} />
      <p>{productName}</p>
      <p>{productPrice}</p>

      {/* <input
      // type="checkbox"
      // onChange={e => {
      //   handleCheckList(e.currentTa.checked, cart.id);
      // }}
      // checked={checkLists.includes(cart.id) ? true : false}
      /> */}
    </section>
  );
};

export default CartList;
