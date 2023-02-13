import { useEffect, useState } from 'react';
import './Terms.scss';
import Detailmodal from './Detailmodal';

function Terms() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [firstCheckBox, setFirstCheckBox] = useState(false);
  const [secondCheckBox, setSecondCheckBox] = useState(false);
  const [thirdCheckBox, setThirdCheckBox] = useState(false);
  const [fourthCheckBox, setFourthCheckBox] = useState(false);

  // 모달창 노출
  const showModal = () => {
    if (modalOpen === true) {
      setModalOpen(true);
    }
  };

  //모달창 닫기
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  const allBtnEvent = () => {
    if (checkAll === false) {
      setCheckAll(true);
      setFirstCheckBox(true);
      setSecondCheckBox(true);
      setThirdCheckBox(true);
      setFourthCheckBox(true);
    } else {
      setCheckAll(false);
      setFirstCheckBox(false);
      setSecondCheckBox(false);
      setThirdCheckBox(false);
      setFourthCheckBox(false);
    }
  };

  const firstBoxEvent = () => {
    if (firstCheckBox === false) {
      setFirstCheckBox(true);
    } else {
      setFirstCheckBox(false);
    }
  };

  const SecondBoxEvent = () => {
    if (secondCheckBox === false) {
      setSecondCheckBox(true);
    } else {
      setSecondCheckBox(false);
    }
  };

  const thirdBoxEvent = () => {
    if (thirdCheckBox === false) {
      setThirdCheckBox(true);
    } else {
      setThirdCheckBox(false);
    }
  };

  const fourthBoxEvent = () => {
    if (fourthCheckBox === false) {
      setFourthCheckBox(true);
    } else {
      setFourthCheckBox(false);
    }
  };

  useEffect(() => {
    if (
      firstCheckBox === true &&
      secondCheckBox === true &&
      thirdCheckBox === true &&
      fourthCheckBox === true
    ) {
      setCheckAll(true);
    } else {
      setCheckAll(false);
    }
  }, [firstCheckBox, secondCheckBox, thirdCheckBox, fourthCheckBox]);

  return (
    <div className="termsCheckList">
      <div className="allTermsAgree">
        <input type="checkbox" checked={checkAll} onClick={allBtnEvent} />
        모든 약관 및 정보 수신 동의
      </div>
      <li>회원 약관</li>
      <div className="checkboxWrap">
        <div className="firstCheckbox">
          <input
            type="checkbox"
            checked={firstCheckBox}
            onClick={firstBoxEvent}
          />
          <span>[필수] 개인정보 제3자 제공 동의</span>
          <span
            className="more"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            더보기
          </span>
          {modalOpen === true ? <Detailmodal /> : null}
        </div>
        <div>
          <input
            type="checkbox"
            checked={secondCheckBox}
            onClick={SecondBoxEvent}
          />
          <span>[필수]TeaTalk 서비스 이용약관</span>
          <span className="more">더보기</span>
        </div>
        <div>
          <input
            type="checkbox"
            checked={thirdCheckBox}
            onClick={thirdBoxEvent}
          />
          <span>[필수]개인정보 수집동의</span>
          <span className="more">더보기</span>
        </div>
        <div>
          <input
            type="checkbox"
            checked={fourthCheckBox}
            onClick={fourthBoxEvent}
          />
          <span>[선택]개인정보 수집/이용 동의</span>
          <span className="more">더보기</span>
        </div>
      </div>
    </div>
  );
}

export default Terms;

{
  /* <div className="checkboxWrap">
  <div className="termsCheckList">
    <input type="checkbox" checked={checkAll} onChange={allBtnEvent} />
    <span>모든 약관 및 정보 수신 동의</span>
    <img
      className="modalBtn"
      onClick={showModal}
      src="images/signup/more.png"
      alt="more"
    />
    <br />
    <span>모달창입니다.</span>
    <button onClick={closeModal}>X</button>
    <div>회원 약관</div>
    <div>
      <input checked={checkBox} type="checkbox" />
      <span>[필수] 개인정보 제3자 제공 동의</span>
    </div>
    <br />
    <div>오설록 회원약관</div>
    <div>
      <input checked={checkBox} type="checkbox" />
      <span>[필수]TeaTalk 서비스 이용약관</span>
    </div>
    <div>
      <input checked={checkBox} type="checkbox" />
      <span>[필수]개인정보 수집동의</span>
    </div>
    <div>
      <input type="checkbox" />
      <span>[선택]개인정보 수집/이용 동의</span>
    </div>
  </div>
</div>;

{
  modalOpen === true ? (
    <Modal setModalOpen={setModalOpen} checkBox={setCheckAll} />
  ) : null;
} */
}
