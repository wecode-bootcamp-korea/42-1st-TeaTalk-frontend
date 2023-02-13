import { useEffect, useState } from 'react';
import './Terms.scss';
import Detailmodal from './Detailmodal';

function Terms() {
  // 모달창 노출 여부 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isFirstCheckBox, setIsFirstCheckBox] = useState(false);
  const [isSecondCheckBox, setIsSecondCheckBox] = useState(false);
  const [isThirdCheckBox, setIsThirdCheckBox] = useState(false);
  const [isFourthCheckBox, setIsFourthCheckBox] = useState(false);

  // 모달창 노출
  const showModal = () => {
    if (isModalOpen === true) {
      setIsModalOpen(true);
    }
  };

  //모달창 닫기
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  const allBtnEvent = () => {
    if (isCheckAll === false) {
      setIsCheckAll(true);
      setIsFirstCheckBox(true);
      setIsSecondCheckBox(true);
      setIsThirdCheckBox(true);
      setIsFourthCheckBox(true);
    } else {
      setIsCheckAll(false);
      setIsFirstCheckBox(false);
      setIsSecondCheckBox(false);
      setIsThirdCheckBox(false);
      setIsFourthCheckBox(false);
    }
  };

  const firstBoxEvent = () => {
    if (isFirstCheckBox === false) {
      setIsFirstCheckBox(true);
    } else {
      setIsFirstCheckBox(false);
    }
  };

  const SecondBoxEvent = () => {
    if (isSecondCheckBox === false) {
      setIsSecondCheckBox(true);
    } else {
      setIsSecondCheckBox(false);
    }
  };

  const thirdBoxEvent = () => {
    if (isThirdCheckBox === false) {
      setIsThirdCheckBox(true);
    } else {
      setIsThirdCheckBox(false);
    }
  };

  const fourthBoxEvent = () => {
    if (isFourthCheckBox === false) {
      setIsFourthCheckBox(true);
    } else {
      setIsFourthCheckBox(false);
    }
  };

  useEffect(() => {
    if (
      isFirstCheckBox === true &&
      isSecondCheckBox === true &&
      isThirdCheckBox === true &&
      isFourthCheckBox === true
    ) {
      setIsCheckAll(true);
    } else {
      setIsCheckAll(false);
    }
  }, [isFirstCheckBox, isSecondCheckBox, isThirdCheckBox, isFourthCheckBox]);

  return (
    <div className="termsCheckList">
      <div className="allTermsAgree">
        <input type="checkbox" checked={isCheckAll} onChange={allBtnEvent} />
        모든 약관 및 정보 수신 동의
      </div>
      <li>회원 약관</li>
      <div className="checkboxWrap">
        <div className="firstCheckbox">
          <input
            type="checkbox"
            checked={isFirstCheckBox}
            onChange={firstBoxEvent}
          />
          <span>[필수] 개인정보 제3자 제공 동의</span>
          <span
            className="more"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            더보기
          </span>
          {isModalOpen === true ? (
            <Detailmodal setIsModalOpen={setIsModalOpen} />
          ) : null}
        </div>
        <div>
          <input
            type="checkbox"
            checked={isSecondCheckBox}
            onChange={SecondBoxEvent}
          />
          <span>[필수]TeaTalk 서비스 이용약관</span>
          <span className="more">더보기</span>
        </div>
        <div>
          <input
            type="checkbox"
            checked={isThirdCheckBox}
            onChange={thirdBoxEvent}
          />
          <span>[필수]개인정보 수집동의</span>
          <span className="more">더보기</span>
        </div>
        <div>
          <input
            type="checkbox"
            checked={isFourthCheckBox}
            onChange={fourthBoxEvent}
          />
          <span>[선택]개인정보 수집/이용 동의</span>
          <span className="more">더보기</span>
        </div>
      </div>
    </div>
  );
}

export default Terms;
