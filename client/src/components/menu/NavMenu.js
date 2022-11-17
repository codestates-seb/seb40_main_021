import { Search } from './Search';
import { useSelector } from 'react-redux';
import { Category } from './Category';

export const NavMenu = () => {
  const category = useSelector((store) => store.menuReducer.category);
  return (
    <div className="nav-wrapper">
      <Search />
      <ul>
        {category.map((category, idx) => (
          <Category key={idx} data={category} />
        ))}
      </ul>
    </div>
  );
};
