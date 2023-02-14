import { CATEGORY, NAVBAR_LIST } from './MenuTab';
import './MenuModal.scss';

function MenuModal({ currentMenuId, setCurrentMenuId }) {
  return (
    <div className="MenuModal">
      <div className="MenuModalinner" onMouseLeave={() => setCurrentMenuId()}>
        <div className="MenuModalMenu">
          {CATEGORY.map(({ id, category }) => {
            return (
              <div className="MenuModalWrap" key={id}>
                {id === currentMenuId &&
                  category.map(({ id, list }) => (
                    <div className="MenuNavbarDropdown" key={id}>
                      {list.map(list => {
                        return (
                          <ul>
                            <li>{list}</li>
                          </ul>
                        );
                      })}
                    </div>
                  ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default MenuModal;
