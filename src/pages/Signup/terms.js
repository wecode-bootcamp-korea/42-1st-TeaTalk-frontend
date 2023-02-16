import { useEffect, useState } from 'react';
import './Terms.scss';
import Detailmodal from './Detailmodal';

function Terms() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isOfferPrivacyBox, setIsOfferPrivacyBox] = useState(false);
  const [isTermsOfUseBox, setIsTermsOfUseBox] = useState(false);
  const [isPrivacyCollectionBox, setIsPrivacyCollectionBox] = useState(false);
  const [isUsePrivacyBox, setIsUsePrivacyBox] = useState(false);

  //코드 수정중
  // const [termsCheckbox, setTermsCehckbox] = useState({
  //   isOfferPrivacyBox: false,
  //   isTermsOfUseBox: false,
  //   isPrivacyCollectionBox: false,
  //   isUsePrivacyBox: false,
  // });

  // const checkBoxEventHandler = () => {
  //   setTermsCehckbox({ ...termsCheckbox, isOfferPrivacyBox: true });
  //   setTermsCehckbox({ ...termsCheckbox, isTermsOfUseBox: true });
  //   setTermsCehckbox({ ...termsCheckbox, isPrivacyCollectionBox: true });
  //   setTermsCehckbox({ ...termsCheckbox, isUsePrivacyBox: true });
  // };

  const allBtnEvent = () => {
    if (isCheckAll === false) {
      setIsCheckAll(true);
      setIsOfferPrivacyBox(true);
      setIsTermsOfUseBox(true);
      setIsPrivacyCollectionBox(true);
      setIsUsePrivacyBox(true);
    } else {
      setIsCheckAll(false);
      setIsOfferPrivacyBox(false);
      setIsTermsOfUseBox(false);
      setIsPrivacyCollectionBox(false);
      setIsUsePrivacyBox(false);
    }
  };

  const offerPrivacyEvent = () => {
    if (isOfferPrivacyBox === false) {
      setIsOfferPrivacyBox(true);
    } else {
      setIsOfferPrivacyBox(false);
    }
  };

  const termsOfUseEvent = () => {
    if (isTermsOfUseBox === false) {
      setIsTermsOfUseBox(true);
    } else {
      setIsTermsOfUseBox(false);
    }
  };

  const privacyCollectionEvent = () => {
    if (isPrivacyCollectionBox === false) {
      setIsPrivacyCollectionBox(true);
    } else {
      setIsPrivacyCollectionBox(false);
    }
  };

  const usePrivacyEvent = () => {
    if (isUsePrivacyBox === false) {
      setIsUsePrivacyBox(true);
    } else {
      setIsUsePrivacyBox(false);
    }
  };

  useEffect(() => {
    if (
      isOfferPrivacyBox === true &&
      isTermsOfUseBox === true &&
      isPrivacyCollectionBox === true &&
      isUsePrivacyBox === true
    ) {
      setIsCheckAll(true);
    } else {
      setIsCheckAll(false);
    }
  }, [
    isOfferPrivacyBox,
    isTermsOfUseBox,
    isPrivacyCollectionBox,
    isUsePrivacyBox,
  ]);

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
            checked={isOfferPrivacyBox}
            onChange={offerPrivacyEvent}
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
            checked={isTermsOfUseBox}
            onChange={termsOfUseEvent}
          />
          <span>[필수]TeaTalk 서비스 이용약관</span>
          <span className="more">더보기</span>
        </div>
        <div>
          <input
            type="checkbox"
            checked={isPrivacyCollectionBox}
            onChange={privacyCollectionEvent}
          />
          <span>[필수]개인정보 수집동의</span>
          <span className="more">더보기</span>
        </div>
        <div>
          <input
            type="checkbox"
            checked={isUsePrivacyBox}
            onChange={usePrivacyEvent}
          />
          <span>[선택]개인정보 수집/이용 동의</span>
          <span className="more">더보기</span>
        </div>
      </div>
    </div>
  );
}

export default Terms;
