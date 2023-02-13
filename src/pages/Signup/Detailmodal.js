import './Detailmodal.scss';

export default function Detailmodal({ setIsModalOpen }) {
  return (
    <div className="detailModal">
      <div className="modalWrap">
        상세약관
        <p>...</p>
        <button onClick={() => setIsModalOpen(false)}>닫기</button>
      </div>
    </div>
  );
}
