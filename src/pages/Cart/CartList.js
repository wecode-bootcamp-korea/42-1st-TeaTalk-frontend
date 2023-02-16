import './Cart.scss';

const CartList = ({ productId, productName, productPrice }) => {
  return (
    <section className="cartProductList">
      <p>{productId}</p>
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
