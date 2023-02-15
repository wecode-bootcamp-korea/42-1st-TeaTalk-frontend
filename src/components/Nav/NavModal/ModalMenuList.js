import React from 'react';
import { NAVBAR_LIST } from '../Nav';
import './ModalMenuList.scss';

function ModalMenuList({ currentMenuId }) {
  return (
    <div className="modalMenuList">
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
    </div>
  );
}

export default ModalMenuList;
