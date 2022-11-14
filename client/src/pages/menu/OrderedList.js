export const OrderedList = () => {
  return (
    <div className="menu-container">
      <h1>총 주문 메뉴: 2개</h1>
      <ul>
        <li className="stored-menu">
          <div className="left">
            <div className="imgBox"></div>
            <div className="menuTxt">
              <h2>맛있는 치킨</h2>
              <p>16,000원</p>
            </div>
          </div>
          <p className="menu-quantity">1개</p>
        </li>
        <li className="stored-menu">
          <div className="left">
            <div className="imgBox"></div>
            <div className="menuTxt">
              <h2>콜라</h2>
              <p>8,000원</p>
            </div>
          </div>
          <p className="menu-quantity">4개</p>
        </li>
      </ul>
      <p className="total-price">총 주문 금액 : 24,000원</p>
    </div>
  );
};
