export const StoreInfo = props => {
   return (
      <li>
         <h2>{props.name}</h2>
         <p className={props.name === '가게 설명' ? 'store-info' : null}>{props.data}</p>
      </li>
   );
};
