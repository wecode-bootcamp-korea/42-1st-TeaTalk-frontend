import './ProductDetail.scss';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProducts } from '../../service/tetcher';

const ProductDetail = ({ convertPrice, cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  const handleQuantity = type => {
    if (type === 'plus') {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };
  useEffect(() => {
    getProducts().then(data => {
      setProduct(
        data.data.products.find(product => product.id === parseInt(id))
      );
    });
  }, [id]);

  const setQuantity = (id, quantity) => {
    const found = cart.filter(el => el.id === id)[0];
    const idx = cart.indexOf(found);
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      provider: product.provider,
      quantity: quantity,
      explanation: product.explanation,
    };
    setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
  };

  const handleCart = () => {
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      provider: product.provider,
      quantity: count,
      explanation: product.explanation,
    };
    const found = cart.find(el => el.id === cartItem.id);
    if (found) setQuantity(cartItem.id, found.quantity + count);
    else {
      setCart([...cart, cartItem]);
    }
  };

  return (
    product && (
      <div id="renew">
        <div id="contents">
          <div className="itemDetailTop">
            <div className="itemInfo">
              <div className="left">
                <div className="itemThumb">
                  <div className="thumb">
                    <img src={product.image} alt="product" />
                  </div>
                  <ul className="itemUl">
                    <li className="itemLi">
                      <i class="fas fa-coins" />
                      <span>뷰티포인트 230p 적립</span>
                    </li>
                    <li className="itemLi">
                      <i class="fas fa-coffee" />
                      찻잎 230p 적립
                    </li>
                    <li className="itemLi">
                      <i class="fas fa-truck" />
                      3만원 이상 무료배송
                    </li>
                    <li className="itemLi">
                      <i class="fas fa-gift" />
                      포장 가능
                    </li>
                    <li className="itemLi">
                      <i class="fas fa-suitcase" />
                      쇼핑백 동봉
                    </li>
                  </ul>
                  <div class="recommendTag">
                    <span className="tag">추천</span>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="location">
                  <a href="/tea">티제품</a>
                  <i class="fas fa-chevron-right bar" />
                  <a href="/tesset">티 세트</a>
                </div>
                <div className="productInfo">
                  <p className="explanation">{product.explanation}</p>
                  <p className="productName">{product.name}</p>
                  <p className="sellerStore">{product.provider}</p>
                  <div className="priceTag">
                    <strong className="price">
                      {convertPrice(product.price + '')}
                      <span className="unit">원</span>
                    </strong>
                  </div>
                </div>
                <div className="delivery">
                  <p>택배배송 / 무료배송</p>
                </div>

                <div className="line" />

                <div className="amount">
                  <img
                    className="minus"
                    src="/images/icon-minus-line.svg"
                    alt="minus"
                    onClick={() => handleQuantity('minus')}
                  />

                  <div className={count}>
                    <span>{count}</span>
                  </div>

                  <img
                    className="plus"
                    src="/images/icon-plus-line.svg"
                    alt="plus"
                    onClick={() => handleQuantity('plus')}
                  />
                </div>

                <div className="line" />

                <div className="sumBox">
                  <div className="sum">
                    <span className="sumPrice">상품금액 합계</span>
                  </div>

                  <div className="totalInfo">
                    <span className={cart.quantity}>총 수량 </span>
                    <span className={cart.quantity}>{count}개</span>
                    {convertPrice(product.price * count)}
                    <span className="totalUnit">원</span>
                  </div>
                </div>

                <div className="btn12">
                  <button className="btnCart" onClick={() => handleCart()}>
                    장바구니
                  </button>
                  <button className="btnBuy">바로 구매</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetail;
