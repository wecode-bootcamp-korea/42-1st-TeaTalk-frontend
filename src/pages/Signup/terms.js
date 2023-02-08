function Modal({ setModalOpen, setCheckAll }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="termsWrap">
      <span>모달창입니다.</span>
      <button onClick={closeModal}>X</button>
      <div>회원 약관</div>
      <div>
        <input type="checkbox" />
        <span>[필수] 개인정보 제3자 제공 동의</span>
      </div>
      <br></br>
      <div>오설록 회원약관</div>
      <div>
        <input type="checkbox" />
        <span>[필수]TeaTalk 서비스 이용약관</span>
      </div>
      <div>
        <input type="checkbox" />
        <span>[필수]개인정보 수집동의</span>
      </div>
      <div>
        <input type="checkbox" />
        <span>[선택]개인정보 수집/이용 동의</span>
      </div>
    </div>
  );
}

export default Modal;
