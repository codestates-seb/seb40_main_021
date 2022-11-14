export const Cart = () => {
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
          <div className="right">
            <button className="delete">x</button>
            <div className="quantity">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>
        </li>
        <li className="stored-menu">
          <div className="left">
            <div className="imgBox"></div>
            <div className="menuTxt">
              <h2>콜라</h2>
              <p>8,000원</p>
            </div>
          </div>
          <div className="right">
            <button className="delete">x</button>
            <div className="quantity">
              <button>-</button>
              <p>4</p>
              <button>+</button>
            </div>
          </div>
        </li>
        <li className="stored-menu">
          <div className="left">
            <div className="imgBox"></div>
            <div className="menuTxt">
              <h2>콜라</h2>
              <p>8,000원</p>
            </div>
          </div>
          <div className="right">
            <button className="delete">x</button>
            <div className="quantity">
              <button>-</button>
              <p>4</p>
              <button>+</button>
            </div>
          </div>
        </li>
        <li className="stored-menu">
          <div className="left">
            <div className="imgBox"></div>
            <div className="menuTxt">
              <h2>콜라</h2>
              <p>8,000원</p>
            </div>
          </div>
          <div className="right">
            <button className="delete">x</button>
            <div className="quantity">
              <button>-</button>
              <p>4</p>
              <button>+</button>
            </div>
          </div>
        </li>
        <li className="stored-menu">
          <div className="left">
            <div className="imgBox"></div>
            <div className="menuTxt">
              <h2>콜라</h2>
              <p>8,000원</p>
            </div>
          </div>
          <div className="right">
            <button className="delete">x</button>
            <div className="quantity">
              <button>-</button>
              <p>4</p>
              <button>+</button>
            </div>
          </div>
        </li>
        <li className="stored-menu">
          <div className="left">
            <div className="imgBox"></div>
            <div className="menuTxt">
              <h2>콜라</h2>
              <p>8,000원</p>
            </div>
          </div>
          <div className="right">
            <button className="delete">x</button>
            <div className="quantity">
              <button>-</button>
              <p>4</p>
              <button>+</button>
            </div>
          </div>
        </li>
        <li className="stored-menu">
          <div className="left">
            <div className="imgBox"></div>
            <div className="menuTxt">
              <h2>콜라</h2>
              <p>8,000원</p>
            </div>
          </div>
          <div className="right">
            <button className="delete">x</button>
            <div className="quantity">
              <button>-</button>
              <p>4</p>
              <button>+</button>
            </div>
          </div>
        </li>
        <li className="stored-menu">
          <div className="left">
            <div className="imgBox"></div>
            <div className="menuTxt">
              <h2>콜라</h2>
              <p>8,000원</p>
            </div>
          </div>
          <div className="right">
            <button className="delete">x</button>
            <div className="quantity">
              <button>-</button>
              <p>4</p>
              <button>+</button>
            </div>
          </div>
        </li>
      </ul>
      <p className="total-price">총 주문 금액 : 24,000원</p>
      <button className="order-btn">주문하기</button>
    </div>
  );
};
