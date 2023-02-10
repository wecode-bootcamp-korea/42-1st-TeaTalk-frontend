import { Route, Link } from 'react-router-dom';
import './Navinfo.scss';

function Navinfo() {
  return (
    <div
      className="navinfo
    "
    >
      <ul>
        <Link to="/Login">
          <li>고객센터</li>
        </Link>
        <Link to="/Signup">
          <li>주문배송조회</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navinfo;
