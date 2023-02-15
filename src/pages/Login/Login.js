import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [id, setId] = useState(' ');
  const [pw, setPw] = useState(' ');

  const [userInfo, setUserInfo] = useState({ id: '', pw: '' });
  const navigate = useNavigate();

  const getUserId = e => {
    setId(e.target.value);
  };

  const getUserPw = e => {
    setPw(e.target.value);
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  const goToMain = () => {
    fetch('http://10.58.52.197:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        account: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.accessToken);
        if (localStorage.getItem('token') !== 'undefined') {
          navigate('/');
        } else {
          alert('이이디 또는 비밀번호가 들렸습니다.');
        }
      });
  };

  const isDisabled = id.length > 0 && pw.length > 1;

  return (
    <div className="login">
      <div className="header">로그인</div>
      <section className="container">
        <div className="loginGuide">
          <span>
            TeaTalk
            <br />
            아이디로 로그인해주세요.
          </span>
        </div>
        <div className="loginWrap">
          <form>
            <input
              type="text"
              className="inputId"
              placeholder="아이디 입력"
              onChange={getUserId}
            />
            <input
              type="password"
              className="inputPw"
              placeholder="비밀번호 입력 (영문, 숫자, 특수문자 조합)"
              onChange={getUserPw}
            />
            <div className="checkBox">
              <input type="checkbox" className="saveId" />
              <span>아이디 저장</span>
            </div>
            <button
              type="button"
              className={isDisabled ? 'loginBtn' : 'disabledBtn'}
              onClick={goToMain}
              disabled={isDisabled ? false : true}
            >
              로그인
            </button>
            <hr />
          </form>
          <div className="findMenu">
            <Link to="/">아이디 찾기</Link>
            <span>|</span>
            <Link to="/">비밀번호 찾기</Link>
            <span>|</span>
            <Link to="/">비회원 주문/조회</Link>
          </div>
          <button onClick={goToSignUp} className="joinMember">
            <span>아직 회원이 아니세요?</span>
            <span> 회원가입</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Login;
