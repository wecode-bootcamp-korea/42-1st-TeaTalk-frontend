import './Cart.scss';

const CartList = ({ list, handleRemove, checkLists }) => {
  return (
    <section className="cartProductList">
      <input
      // type="checkbox"
      // onChange={e => {
      //   handleCheckList(e.currentTa.checked, cart.id);
      // }}
      // checked={checkLists.includes(cart.id) ? true : false}
      />
    </section>
  );
};

export default CartList;
