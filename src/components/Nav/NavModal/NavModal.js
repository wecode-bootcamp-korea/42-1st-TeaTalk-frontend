import React from 'react';
import ModalMenuList from './ModalMenuList';
import './NavModal.scss';

function NavModal({ currentMenuId, setCurrentMenuId }) {
  const NavOnMouseLeave = () => {
    setCurrentMenuId();
  };

  return (
    <div className="navModal">
      <div className="modalinner" onMouseLeave={NavOnMouseLeave}>
        <div className="modalFirstSpace" />
        <ModalMenuList currentMenuId={currentMenuId} />
        <div className="modalImgSpace">
          <div className="modalImg" />
        </div>
        <div className="modalLastSpace" />
      </div>
    </div>
  );
}

export default NavModal;
