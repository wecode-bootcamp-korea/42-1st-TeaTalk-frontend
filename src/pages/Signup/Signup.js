import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Terms from './Terms';
import './Signup.scss';

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    email: '',
    phoneNumber: '',
    birthday: '',
    name: '',
    id: '',
    pw: '',
    checkPw: '',
  });
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  const getSignupInfo = event => {
    const { name, value } = event.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const getGender = e => {
    setToggle(!toggle);
  };

  const goToMain = () => {
    fetch('http://10.58.52.55:8000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        account: signupInfo.id,
        password: signupInfo.pw,
        email: signupInfo.email,
        name: signupInfo.name,
        phoneNum: signupInfo.phoneNumber,
        birthdate: signupInfo.birthday,
        gender: toggle,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        navigate('/');
      });
  };
  const waringPw = () => {
    if (
      signupInfo.pw === signupInfo.checkPw &&
      signupInfo.checkPw.length > 0 &&
      signupInfo.pw.length > 0
    ) {
      return '비밀번호 일치';
    } else if (signupInfo.pw !== signupInfo.checkPw) {
      return '비밀번호가 일치하지 않습니다.';
    } else if (signupInfo.checkPw.length < 0 && signupInfo.pw.length < 0) {
      return null;
    }
  };

  const waringEmail = () => {
    if (
      regexEmail.test(signupInfo.email) === false &&
      signupInfo.email.length > 0
    ) {
      return '이메일 형식이 올바르지 않습니다.';
    } else if (regexEmail.test(signupInfo.email) === true) {
      return '형식에 맞는 이메일주소 입니다.';
    } else if (signupInfo.email.length === 0) {
      return null;
    }
  };

  const regexEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const regexPw = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/i;

  const isDisabledJoin =
    signupInfo.id.length > 0 &&
    regexPw.test(signupInfo.pw) === true &&
    regexEmail.test(signupInfo.email) === true &&
    signupInfo.phoneNumber.length > 0 &&
    signupInfo.name.length > 0 &&
    (toggle === true || toggle === false);

  return (
    <div className="signup">
      <div className="header">아이디 등록</div>
      <hr />
      <div className="container">
        <div className="signupGuide">회원가입 정보를 입력 해 주세요</div>
        <div className="userInfo">
          <input
            className="userId"
            type="text"
            placeholder="아이디"
            onChange={getSignupInfo}
            name="id"
          />
          <input
            className="userName"
            type="text"
            placeholder="이름"
            onChange={getSignupInfo}
            name="name"
          />
          <input
            type="password"
            placeholder="비밀번호 (영문, 숫자, 특수문자 조합 8자 이상)"
            onChange={getSignupInfo}
            name="pw"
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            onChange={getSignupInfo}
            name="checkPw"
          />
          <p
            className={
              signupInfo.pw === signupInfo.checkPw ? 'pwGreenMsg' : 'pwRedMsg'
            }
          >
            {waringPw()}
          </p>
          <input
            className="email"
            type="text"
            placeholder="이메일"
            onChange={getSignupInfo}
            name="email"
          />
          <p
            className={
              regexEmail.test(signupInfo.email) === false
                ? 'eRedMsg'
                : 'eGreenMsg'
            }
          >
            {waringEmail()}
          </p>
          <input
            className="birthday"
            type="text"
            placeholder="생년월일(YYYY.MM.DD)"
            maxLength="10"
            onChange={getSignupInfo}
            name="birthday"
          />
          <input
            className="phoneNumber"
            maxLength="11"
            type="text"
            placeholder="휴대전화 ('-' 제외한 숫자만 입력해주세요)"
            onChange={getSignupInfo}
            name="phoneNumber"
          />
        </div>
        <div className="gender">
          <span>성별 : </span>
          <span>남</span>
          <input type="checkbox" onChange={getGender} checked={toggle} />
          <span>여</span>
          <input type="checkbox" onChange={getGender} checked={!toggle} />
        </div>
      </div>
      <Terms />
      <span className="btnWarp">
        <Link to="/">
          <button className="exitSignup">다음에 하기</button>
        </Link>
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
