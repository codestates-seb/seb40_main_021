export const OrderedItem = ({ data }) => {
   return (
      <li className="stored-menu">
         <div className="left">
            <div className="imgBox">
               {data.menuImage === '' ? (
                  <p>
                     이미지
                     <br />
                     준비중입니다
                  </p>
               ) : (
                  <img src={data.menuImage} alt={data.menuName} />
               )}
            </div>
            <div className="menuTxt">
               <h2>{data.menuName}</h2>
               <p>{(data.price * data.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
            </div>
         </div>
         <p className="menu-quantity">{data.quantity}개</p>
      </li>
   );
};
