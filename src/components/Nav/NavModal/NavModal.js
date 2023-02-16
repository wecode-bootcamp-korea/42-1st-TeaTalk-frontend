import React from 'react';
import './NavModal.scss';
import { NAVBAR_LIST } from '../Nav';

function NavModal({ currentMenuId, setCurrentMenuId }) {
  const navOnMouseLeave = () => {
    setCurrentMenuId();
  };

  return (
    <div className="navModal">
      <div className="modalinner" onMouseLeave={navOnMouseLeave}>
        <div className="modalFirstSpace" />
        <div className="modalMenuList">
          {NAVBAR_LIST.map(({ id, category }) => {
            return (
              <div className="modalWrap" key={id}>
                {id === currentMenuId
                  ? category.map(({ id, list }) => (
                      <div className="navContents" key={id}>
                        {list}
                      </div>
                    ))
                  : null}
              </div>
            );
          })}
        </div>
        <div className="modalEndSpace" />;
      </div>
    </div>
  );
}

export default NavModal;
