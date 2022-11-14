import { useRef } from 'react';
import IconSearch from './../../assets/image/search.svg';

export const Search = () => {
  const wrapperRef = useRef();

  const searchHandeler = () => {
    wrapperRef.current.classList.toggle('active');
  };
  return (
    <div className="search-wrapper" ref={wrapperRef}>
      <input type="text" name="search" placeholder="메뉴를 입력해주세요." />
      <button className="search-btn" onClick={searchHandeler}>
        <img src={IconSearch} alt="search" />
      </button>
    </div>
  );
};
