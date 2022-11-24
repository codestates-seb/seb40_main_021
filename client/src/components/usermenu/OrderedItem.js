export const OrderedItem = ({ data }) => {
   return (
      <li className="stored-menu">
         <div className="left">
            <div className="imgBox">
               <img src={data.img} alt={data.menuName} />
            </div>
            <div className="menuTxt">
               <h2>{data.menuName}</h2>
               <p>{data.price * data.quantity}원</p>
            </div>
         </div>
         <p className="menu-quantity">{data.quantity}개</p>
      </li>
   );
};
