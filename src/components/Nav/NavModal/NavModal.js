import React from 'react';
// import ModalMenuList from './ModalMenuList';
import './NavModal.scss';
import { NAVBAR_LIST } from '../Nav';

function NavModal({ currentMenuId, setCurrentMenuId }) {
  const NavOnMouseLeave = () => {
    setCurrentMenuId();
  };

  return (
    <div className="navModal">
      <div className="modalinner" onMouseLeave={NavOnMouseLeave}>
        <div className="modalFirstSpace" />
        {/* <ModalMenuList currentMenuId={currentMenuId} /> */}
        <div className="modalMenuList">
          {NAVBAR_LIST.map(({ id, category }) => {
            return (
              <div className="modalWrap" key={id}>
                {id === currentMenuId
                  ? category.map(({ id, list }) => (
                      <div className="navbarDropdown" key={id}>
                        <span key={id}>{list}</span>
                      </div>
                    ))
                  : null}
              </div>
            );
          })}
        </div>
        ;
        <div className="modalImgSpace">
          <div className="modalImg" />
        </div>
        <div className="modalLastSpace" />
      </div>
    </div>
  );
}

export default NavModal;

{
  /* <div className="modalMenuList">
  {NAVBAR_LIST.map(({ id, category }) => {
    return (
      <div className="modalWrap" key={id}>
        {id === currentMenuId &&
          category.map(({ id, list }) => (
            <div className="navbarDropdown" key={id}>
              <span key={id}>{list}</span>
            </div>
          ))}
      </div>
    );
  })}
</div>; */
}
