import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';

export const CartItem = ({ data }) => {
  return (
    <li className="stored-menu">
      <div className="left">
        <div className="imgBox">
          <img src={data.img} alt={data.name} />
        </div>
        <div className="menuTxt">
          <h2>{data.name}</h2>
          <p>{data.price * data.quantity}원</p>
        </div>
      </div>
      <div className="right">
        <button className="delete">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="quantity">
          <button>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <p>{data.quantity}</p>
          <button>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </li>
  );
};
