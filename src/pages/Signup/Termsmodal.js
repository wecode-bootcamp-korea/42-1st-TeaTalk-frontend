import { useEffect, useState } from 'react';

function Termsmodal({ checkAll, checkAllToggle }) {
  const [firstCheckBox, setFirstCheckBox] = useState(false);
  const [secondCheckBox, setSecondCheckBox] = useState(false);
  const [thirdCheckBox, setThirdCheckBox] = useState(false);
  const [fourthCheckBox, setFourthCheckBox] = useState(false);
  // const allBtnEvent = () => {
  //   if (checkAll === false) {
  //     setFirstCheckBox(true);
  //     setSecondCheckBox(true);
  //     setThirdCheckBox(true);
  //     setFourthCheckBox(true);
  //   } else {
  //     setFirstCheckBox(false);
  //     setSecondCheckBox(false);
  //     setThirdCheckBox(false);
  //     setFourthCheckBox(false);
  //   }
  // };
  // console.log(checkAllToggle);

  // useEffect(() => {
  //   setFirstCheckBox(checkAll);
  //   setSecondCheckBox(checkAll);
  //   setThirdCheckBox(checkAll);
  //   setFourthCheckBox(checkAll);
  // }, [checkAll]);

  const firstBoxEvent = () => {
    checkAllToggle = true;
    console.log(checkAllToggle);
    if (firstCheckBox === false) {
      console.log('트루');
      setFirstCheckBox(true);
    } else {
      console.log('풜스');
      setFirstCheckBox(false);
    }
  };

  const SecondBoxEvent = () => {
    checkAllToggle = true;
    if (secondCheckBox === false) {
      setSecondCheckBox(true);
    } else {
      setSecondCheckBox(false);
    }
  };

  const thirdBoxEvent = () => {
    checkAllToggle = true;
    if (thirdCheckBox === false) {
      setThirdCheckBox(true);
    } else {
      setThirdCheckBox(false);
    }
  };

  const fourthBoxEvent = () => {
    checkAllToggle = true;
    if (fourthCheckBox === false) {
      setFourthCheckBox(true);
    } else {
      setFourthCheckBox(false);
    }
  };

  return (
    <div>
      <div>회원 약관</div>
      <div>
        <input
          type="checkbox"
          checked={checkAllToggle ? checkAll : firstCheckBox}
          onClick={firstBoxEvent}
        />
        <span>[필수] 개인정보 제3자 제공 동의</span>
      </div>
      <br />
      <div>
        <input
          type="checkbox"
          checked={checkAllToggle ? checkAll : secondCheckBox}
          onClick={SecondBoxEvent}
        />
        <span>[필수]TeaTalk 서비스 이용약관</span>
      </div>
      <div>
        <input
          type="checkbox"
          checked={checkAllToggle ? checkAll : thirdCheckBox}
          onClick={thirdBoxEvent}
        />
        <span>[필수]개인정보 수집동의</span>
      </div>
      <div>
        <input
          type="checkbox"
          checked={checkAllToggle ? checkAll : fourthCheckBox}
          onClick={fourthBoxEvent}
        />
        <span>[선택]개인정보 수집/이용 동의</span>
      </div>
    </div>
  );
}

export default Termsmodal;
