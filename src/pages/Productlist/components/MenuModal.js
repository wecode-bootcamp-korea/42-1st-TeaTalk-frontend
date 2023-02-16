import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORY } from './MenuTab';
import './MenuModal.scss';

function MenuModal({ currentMenuId, setCurrentMenuId }) {
  const navigate = useNavigate();
  return (
    <div className="menuModal">
      <div className="menuModalinner" onMouseLeave={() => setCurrentMenuId()} />

      <div className="menuModalContainer">
        {CATEGORY.map(({ category, id, classname }) => {
          return (
            <div className="menuModalWrap" key={id}>
              {id === currentMenuId
                ? category.map(({ id, subclassname, list }) => (
                    <span
                      key={id}
                      onClick={() => {
                        navigate(
                          `/Productlist/?categoryId=${classname}&subCategoryId=${subclassname}`
                        );
                      }}
                    >
                      {list}
                    </span>
                  ))
                : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MenuModal;
