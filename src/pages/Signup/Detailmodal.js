import './Detailmodal.scss';

export default function Detailmodal(setModalOpen) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="background">
      <div className="aa" onClick={closeModal}>
        modal
      </div>
    </div>
  );
}
