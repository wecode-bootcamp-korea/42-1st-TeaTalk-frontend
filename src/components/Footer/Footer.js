import { Link, useNavigate } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/signup');
  };

  return (
    <div className="footer">
      <div className="footerTop">
        <button onClick={goToLogin}>로그인</button>
        <img src="images/footer/tiktok.png" />
        <img src="images/footer/youtube.png" />
        <img src="images/footer/instagram.png" />
      </div>
      <div className="contactInfo">
        <div className="customerService">
          <p>고객상담센터 · 주문/배송문의</p>
          <p>080-805-5555</p>
          <p>평일 09:30 - 17:00 (점심 11:30 - 13:00)</p>
        </div>
        <div className="order">
          <p>특판, 대량구매 문의</p>
          <a href="">as13ljh@ghlgmail.com</a>
          <p>카카오톡ID : TeaTalkmall</p>
          <p>평일 09:30 - 17:00 (점심 11:30 - 13:00)</p>
        </div>
        <div className="imgWrap">
          <div className="linkWrap">
            {FOOTER_IMGLINK_LIST.map(info => {
              return <img key={info.id} src={info.src} />;
            })}
          </div>
          <div className="textWrap">
            {FOOTER_IMGLINK_LIST.map(info => {
              return <div key={info.id}>{info.content}</div>;
            })}
          </div>
        </div>
      </div>

      <div className="companyInfo">
        <div className="footer">
          {FOOTER_INFO_LIST.map(info => {
            return (
              <Link to="/" key={info.id} style={{ textDecoration: 'none' }}>
                {info.content}
              </Link>
            );
          })}
        </div>
        <div>
          (주)TeaTalk
          <br />
          대표이사:이종혁 주소:서울특별시 테헤란로 427 위워크타워 10층
          사업자등록번호: 123-12-12345
          <br />
          통신판매업신고번호:1234-서울용산-1111호 호스팅제공자: ㈜TeaTalk
          <br />
          <br />
          (주)TeaTalk은 TeaTalk 브랜드를 제외한 입점 브랜드에 대해서는
          통신판매중개자 이며 통신판매의 당사자가 아닙니다.
          <br />
          따라서 입점판매자가 등록한 상품정보 및 거래에 대해 책임을 지지
          않습니다.
        </div>
      </div>
    </div>
  );
}

export default Footer;

const FOOTER_INFO_LIST = [
  { id: 1, content: '회사소개 | ' },
  { id: 2, content: '서비스 이용약관 | ' },
  { id: 3, content: '개인정보 처리방침 | ' },
  { id: 4, content: '영상정보 처리방침 | ' },
  { id: 5, content: '포인트 | ' },
  { id: 6, content: '임직원할인 | ' },
  { id: 7, content: '사이트맵 | ' },
  { id: 8, content: '전자공고' },
];

const FOOTER_IMGLINK_LIST = [
  { id: 1, content: '매장안내', src: 'images/footer/compass.png' },
  { id: 2, content: '멤버쉽', src: 'images/footer/benefit.png' },
  { id: 3, content: 'FAQ', src: 'images/footer/question.png' },
  { id: 4, content: '1:1문의', src: 'images/footer/talk.png' },
];
