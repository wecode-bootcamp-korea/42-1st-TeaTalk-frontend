import './Pay.scss';

function Pay() {
  return (
    <div>
      <h1>결제하기</h1>
      <div>
        <p>주문고객정보</p>
        <p>주문자/010-0000-0000</p>
      </div>
      <div className="orderInfo">
        <tr>
          <th>이름</th>
          <td>
            <input type="text" />
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
              <input type="number" placeholder="'-''없이 휴대폰번호 입력'" />
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
      </div>
    </div>
  );
}

export default Pay;
