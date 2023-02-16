import { useEffect, useState } from 'react';
import Orderproduct from './Orderproduct';
import './Pay.scss';

function Pay() {
  const [orderName, setOrderName] = useState('');
  const [phoneNumber, setPhonNumber] = useState('');
  const [receiver, setReceiver] = useState('');
  const [receiverPhoneNum, setReceiverPhoneNum] = useState('');
  const [selected, setSelected] = useState('');
  const [request, setrequest] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  const [orderProduct, setOrderProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // const [deliveryFee, setdeliveryFee] = useState(0);
  // const [mileage, setMileage] = useState(0);
  // const [mileageBalance, setMileageBalance] = useState(0);

  // const getMileageBalance = e => {
  //   setMileageBalance(e.target.value);
  // };

  // const getDeliveryFee = e => {
  //   setMileage(e.target.value);
  // };

  // const getMileage = e => {
  //   setdeliveryFee(e.target.value);
  // };

  const getReceiverName = e => {
    setReceiver(e.target.value);
  };
  const getOrederName = e => {
    setOrderName(e.target.value);
  };
  const getPhoneNumber = e => {
    setPhonNumber(e.target.value);
  };

  const sameAdressWithOrder = () => {
    setReceiver(orderName);
    setReceiverPhoneNum(phoneNumber);
  };

  const onChangeSelect = e => {
    setSelected(e.target.value);
  };

  const onChangeRequest = e => {
    setrequest(e.target.value);
  };

  const getAgree = () => {
    setIsAgree(!isAgree);
  };

  const getTotalPrice = e => {
    setTotalPrice(e);
    console.log(e);
  };

  const getTotalAmount = x => {
    console.log(x);
  };

  useEffect(() => {
    fetch('/data/data.json', {
      //fetch('http://10.58.52.197:8000/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setOrderProduct(data);
      });
  }, []);

  const payMentBtn =
    orderName.length > 0 &&
    phoneNumber.length > 0 &&
    receiver.length > 0 &&
    receiverPhoneNum.length > 0 &&
    //selected.length > 0 &&
    request.length > 0 &&
    isAgree === true;

  return (
    <div className="pay">
      <div className="allWrap">
        <div>
          <h1>결제하기</h1>
          <section className="orderInfo">
            <div className="firstSubTitle">
              <p>주문고객정보</p>
              <p className="nameAndPhone">
                {orderName}/{phoneNumber}
              </p>
            </div>
            <div className="orderName">
              <p>이름</p>
              <input
                type="text"
                onChange={getOrederName}
                defaultValue={orderName}
              />
            </div>
            <div className="emailDiv">
              <p className="email">이메일</p>
              <div className="emailInputWrap">
                <input type="text" />
                <p className="Character">@</p>
                <select
                  className="select"
                  onChange={onChangeSelect}
                  value={selected}
                >
                  <option value="naver">naver.com</option>
                  <option value="hanmail">hanmail.net</option>
                  <option value="gmail">gmail.net</option>
                  <option value="nate">nate.com</option>
                  <option value="self">직접입력</option>
                </select>

                {selected === 'self' && (
                  <input className="addInput" type="text" />
                )}
              </div>
            </div>
            <div className="phoneContainer">
              <p>휴대전화</p>
              <div className="phoneWrap">
                <input
                  type="number"
                  placeholder="'-'없이 휴대폰번호 입력"
                  onChange={getPhoneNumber}
                />
              </div>
            </div>
            <div className="orederContainer">
              <p>보내는분</p>
              <div>
                <input type="text" placeholder="보내는 분 입력" />
              </div>
            </div>
            <div className="info">
              <div>
                <li>
                  보내는 분 별도 표기하더라도 고객님 정보보호를 위해 마스킹
                  처리되어 발송됩니다.
                </li>
                <p>
                  예) 이종혁 -{'>'} 이*혁 / 가나다라 -{'>'} 가나**
                </p>
              </div>
            </div>
          </section>
          <section className="deliveryInfo">
            <div className="secondSubTitle">
              <p>배송지 정보</p>
              <button onClick={sameAdressWithOrder}>주문 고객과 동일</button>
            </div>
            <div className="reciverContainer">
              <p>받는분</p>
              <div className="reciverWrap">
                <input
                  type="text"
                  onChange={getReceiverName}
                  defaultValue={receiver}
                />
              </div>
            </div>
            <div className="phoneNumContainer">
              <p>연락처</p>
              <div className="phoneNumWrap">
                <input
                  type="number"
                  placeholder="'-'없이 휴대폰번호 입력"
                  defaultValue={receiverPhoneNum}
                />
              </div>
            </div>
            <div className="adressContainer">
              <p>주소</p>
              <div className="postNum">
                <input type="text" placeholder="상세주소 입력" />
              </div>
            </div>
            <div className="orderRequest">
              <p>배송 요청사항</p>
              <select
                className="selectRequest"
                onChange={onChangeRequest}
                value={request}
              >
                <option value="select">배송 요청사항 선택</option>
                <option value="keep">경비실에 맡겨주세요</option>
                <option value="call">배송전에 미리 연락주세요</option>
                <option value="self">직접입력</option>
              </select>
              {request === 'self' && <input type="text" />}
            </div>
          </section>
          <section className="orderProductList">
            <div className="orderWrap">
              <div className="title">
                <p>주문상품</p>
                <p>총 건</p>
              </div>
              <div className="orderProductWrap">
                {orderProduct.map(product => {
                  return (
                    <Orderproduct
                      product={product}
                      getTotalPrice={getTotalPrice}
                      getTotalAmount={getTotalAmount}
                    />
                  );
                })}
              </div>
            </div>
          </section>
          <section className="agreement">
            <div className="agreementWarp">
              <div className="agreementCheckbox">
                <input type="checkbox" checked={isAgree} onChange={getAgree} />
                <span>
                  위 상품의 판매조건을 명확히 확인하였으며, 구매 진행에 동의
                  합니다.
                </span>
              </div>
              <ul className="agreementInfo">
                <li>
                  - 할인쿠폰 적용 후 총 결제 금액(배송비, 쇼핑백 환경부담금
                  제외)가 3만원 이상인 경우 무료 배송이 적용됩니다. (단,
                  티웨어는 브랜드별로 무료배송기준이 상이하오니, 제품고시정보
                  내의 배송안내 확인부탁드립니다.)
                </li>
                <li>
                  - 배송 정보(=수취인정보)가 동일할 경우 자동으로 합배송(1개의
                  송장번호) 될 수 있습니다. (반드시 제품 수령 후, 송장번호
                  기입하시어 1:1 상담 게시판을 통해 배송비 환불 요청해주세요.)
                  <br />
                  예) 2건의 주문 건 중 무료배송 주문 건과 배송료를 지불한 주문
                  건이 합배송되었을 경우 1건의 배송료 환불
                </li>
                <li>
                  - 다수의 주문건에 쿠폰 할인을 받는 대신 배송료를 결제하는
                  경우, 합배송 환불에서 제외 될 수도 있습니다.
                  <br />
                  예) 2건의 주문 건 모두 배송료를 지불하였을 경우 1건의 배송료만
                  환불
                  <br />* 단, 합배송 개별 신청은 불가능합니다.
                </li>
              </ul>
            </div>
          </section>
          <aside className="aside">
            <div className="totalPrice">
              <div className="productPrice">
                <p>총 상품 금액</p>
                <p onChange={getTotalPrice}>{totalPrice}원</p>
              </div>
              <div className="deliveryFee">
                <p>배송비</p>
                <p>원</p>
              </div>
              <div className="mileage">
                <p>보유 마일리지</p>
                <p>원</p>
              </div>
              <div className="mileageBalance">
                <p>결제후 마일리지</p>
                <p>원</p>
              </div>
              <div className="totalPrice">
                <p>최종 결제 금액</p>
                <p>원</p>
              </div>
            </div>
            <div className="payBtn">
              <button
                className={payMentBtn ? 'turnOn' : 'turnOff'}
                type="button"
                disabled={payMentBtn ? false : true}
              >
                결제하기
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Pay;
