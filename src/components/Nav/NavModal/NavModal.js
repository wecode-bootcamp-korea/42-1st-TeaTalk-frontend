import './NavModal.scss';
import { NAVBAR_LIST } from '../Nav';

function NavModal({ currentMenuId, setCurrentMenuId }) {
  // const [currentMenuId, setCurrentMenuId] = useState();

  return (
    <div className="navModal">
      <div className="modalinner" onMouseLeave={() => setCurrentMenuId()}>
        <div className="modalFirstSpace" />
        <div className="modalMenu">
          {NAVBAR_LIST.map(({ id, category }) => {
            return (
              <div className="modalWrap" key={id}>
                {id === currentMenuId &&
                  category.map(({ id, list }) => (
                    <div className="navbarDropdown" key={id}>
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
        <div className="modalImgSpace">
          <div className="modalImg" />
        </div>
        <div className="modalLastSpace" />
      </div>
    </div>
  );
}

export default NavModal;
