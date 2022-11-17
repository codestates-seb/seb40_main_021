import { useDispatch, useSelector } from 'react-redux';
import { activateCategory } from '../../redux/actions/menuAction';

export const Category = ({ data }) => {
  const active = useSelector((store) => store.categoryReducer);
  const dispatch = useDispatch();

  return (
    <li>
      <button
        onClick={() => dispatch(activateCategory(data.id))}
        className={active === data.id ? 'active' : null}
      >
        {data.name}
      </button>
    </li>
  );
};
