import { useState } from 'react';
import './Pay.scss';

function Pay() {
  const [orderName, setOrderName] = useState('');
  const [phoneNumber, setPhonNumber] = useState('');

  const getOrederName = e => {
    setOrderName(e.target.value);
  };
  const getPhoneNumber = e => {
    setPhonNumber(e.target.value);
  };

  const sameAdressWithOrder = () => {};

  return (
    <div className="pay">
      <div className="allWrap" />
      <h1>결제하기</h1>
      <div className="firstSubTitle">
        <p>주문고객정보</p>
        <p>
          {orderName}/{phoneNumber}
        </p>
      </div>
      <section className="orderInfo">
        <tr>
          <th>이름</th>
          <td>
            <input type="text" onChange={getOrederName} />
          </td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>
            <div>
              <input type="text" />
              <span>@</span>
              <div className="emailSelect">
                <select>
                  <option>naver.com</option>
                  <option>hanmail.net</option>
                  <option>gmail.net</option>
                  <option>nate.com</option>
                  <option>직접입력</option>
                  <option />
                </select>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th>휴대전화</th>
          <td>
            <div>
              <input
                type="number"
                placeholder="'-'없이 휴대폰번호 입력"
                onChange={getPhoneNumber}
              />
            </div>
          </td>
        </tr>
        <tr>
          <th>보내는분</th>
          <td>
            <div>
              <input type="text" placeholder="보내는 분 입력" />
              <div>
                <ul>
                  <li>
                    보내는 분 별도 표기하더라도 고객님 정보보호를 위해 마스킹
                    처리되어 발송됩니다.
                    <span>예) 이종혁 -> 이*혁 / 가나다라 -> 가나**</span>
                  </li>
                </ul>
              </div>
            </div>
          </td>
        </tr>
      </section>
      <div className="secondSubTitle">
        <p>배송지 정보</p>
        <button onClick={sameAdressWithOrder}>주문 고객과 동일</button>
      </div>
      <section className="deliveryInfo">
        <tr>
          <th>받는분</th>
          <td>
            <div>
              <input type="text" />
            </div>
          </td>
        </tr>
        <tr>
          <th>연락처</th>
          <div>
            <input type="number" placeholder="'-'없이 휴대폰번호 입력" />
          </div>
        </tr>
        <tr>
          <th>주소</th>
          <input type="text" readOnly="readonly" />
          <button>우편번호 찾기</button>
          <div>
            <input type="text" />
            <input type="text" placeholder="상세주소 입력" />
          </div>
        </tr>
        <div>
          <p>배송 요청사항</p>
          <select>
            <option>배송 요청사항 선택</option>
            <option>경비실에 맡겨주세요</option>
            <option>배송전에 미리 연락주세요</option>
            <option>직접입력</option>
          </select>
          <input type="text" />
        </div>
      </section>
      <div />
    </div>
  );
}

export default Pay;
