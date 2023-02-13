import { useState } from 'react';
import { Link } from 'react-router-dom';
import Adresslist from './Adresslist';
import './Searchadress.scss';

export default function Searchadress({ parentFunction }) {
  const [adress, setAdress] = useState('');
  const [searchModal, setSearchModal] = useState(false);

  const getAdress = e => {
    setAdress(e.target.value);
  };

  const adressfilter = ADRESS_LIST.filter(adressinfo => {
    return adressinfo.adress === adress;
  });

  const childFunction = parentFunction => {
    //console.log(parentFunction);
  };

  return (
    <>
      <div className="background" />
      <Link to="/pay">
        <div className="modalBackground" />
      </Link>
      <div className="modalWrap">
        <h1>주소찾기</h1>
        <input
          className="search"
          placeholder="주소를 입력 해 주세요"
          defaultValue={adress}
          onChange={getAdress}
        />
        <button
          onClick={() => {
            setSearchModal(!searchModal);
          }}
        >
          주소검색
        </button>
        {searchModal === true ? (
          <Adresslist
            adressfilter={adressfilter}
            childFunction={childFunction}
          />
        ) : null}
      </div>
    </>
  );
}

const ADRESS_LIST = [
  { id: 1, adress: '서울', postNum: 12345 },
  { id: 2, adress: '인천', postNum: 45745 },
  { id: 3, adress: '수원', postNum: 68975 },
  { id: 4, adress: '용인', postNum: 34575 },
  { id: 5, adress: '하남', postNum: 23434 },
  { id: 6, adress: '남양주', postNum: 45674 },
  { id: 7, adress: '파주', postNum: 23535 },
  { id: 8, adress: '일산', postNum: 68965 },
];
