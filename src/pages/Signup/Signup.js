import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from './terms';
import './Signup.scss';

function Signup() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [checkPw, setCheckPw] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const getId = e => {
    setId(e.target.value);
  };
  const getPw = e => {
    setPw(e.target.value);
  };
  const checkPassword = e => {
    setCheckPw(e.target.value);
  };
  const getEmail = e => {
    setEmail(e.target.value);

    if (regex.test(email) === false) {
      setError('이메일 형식이 올바르지 않습니다.');
    } else {
      setError('형식에 맞는 이메일주소 입니다.');
      return true;
    }
  };
  const getPhoneNumber = e => {
    setPhoneNumber(e.target.value);
  };

  const getName = e => {
    setName(e.target.value);
  };

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  const allBtnEvent = () => {
    if (checkAll === false) {
      setCheckAll(true);
    } else {
      setCheckAll(false);
    }
  };

  const goToMain = () => {
    navigate('/main');
  };

  const waringPw = () => {
    if (pw === checkPw && checkPw.length > 0 && pw.length > 0) {
      return '비밀번호 일치';
    } else if (pw !== checkPw) {
      return '비밀번호가 일치하지 않습니다.';
    } else if (checkPw.length < 0 && pw.length < 0) {
      return null;
    }
  };

  // const checkEmail = () => {
  //   if (email.includes('@')) {
  //     return '이메일 형식이 올바르지 않습니다.';
  //   }
  // };

  const isDisabledJoin =
    id.length > 0 &&
    pw.length > 0 &&
    //regex.test(email) === false &&
    email.length > 0 &&
    phoneNumber.length > 0 &&
    name.length > 0;

  const regex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  return (
    <div>
      <div className="header">아이디 등록</div>
      <hr />
      <div className="container">
        <div className="signupGuide">회원가입 정보를 입력 해 주세요</div>
        <div className="userInfo">
          <input
            className="userId"
            type="text"
            placeholder="아이디"
            onChange={getId}
          />
          <input
            className="userName"
            type="text"
            placeholder="이름"
            onChange={getName}
          />
          <input
            type="password"
            placeholder="비밀번호 (영문, 숫자, 특수문자 조합 8자 이상)"
            onChange={getPw}
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            onChange={checkPassword}
          />
          <p className={pw === checkPw ? 'pwGreenMsg' : 'pwRedMsg'}>
            {waringPw()}
          </p>
          <input
            className="email"
            type="text"
            placeholder="이메일"
            onChange={getEmail}
          />
          <p className={regex.test(email) === false ? 'eRedMsg' : 'eGreenMsg'}>
            {error}
          </p>
          <input
            className="birthday"
            type="text"
            placeholder="생년월일(YYYY.MM.DD)"
            maxLength="10"
          />
          <input
            className="phoneNumber"
            maxLength="11"
            type="text"
            placeholder="휴대전화 ('-' 제외한 숫자만 입력해주세요)"
            onChange={getPhoneNumber}
          />
        </div>
        <div className="gender">
          <span>성별 : </span>
          <span>남</span>
          <input type="checkbox" />
          <span>여</span>
          <input type="checkbox" />
        </div>
      </div>
      <div className="checkboxWrap">
        <div className="termsCheckList">
          <input type="checkbox" checked={checkAll} onChange={allBtnEvent} />
          <span>모든 약관 및 정보 수신 동의</span>
          <button className="modalBtn" onClick={showModal}>
            더보기
          </button>
          <br />
          {modalOpen === true ? (
            <Modal setModalOpen={setModalOpen} checkBox={setCheckAll} />
          ) : null}
        </div>
      </div>
      <span className="btnWarp">
        <button className="exitSignup" onClick={goToMain}>
          다음에 하기
        </button>
        <button
          className={isDisabledJoin ? 'button' : 'disabledBtn'}
          disabled={isDisabledJoin ? false : true}
          onClick={goToMain}
        >
          동의하고 서비스 이용
        </button>
      </span>
    </div>
  );
}

export default Signup;
