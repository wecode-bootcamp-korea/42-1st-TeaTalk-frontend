import { Route, Link } from 'react-router-dom';
import './Navlogin.scss';

function Navlogin({ setNavlogin }) {
  return (
    <div className="navlogin">
      <ul>
        <Link to="/Login">
          <li>로그인</li>
        </Link>
        <Link to="/Signup">
          <li>회원가입</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navlogin;
