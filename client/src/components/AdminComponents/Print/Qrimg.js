import styled from 'styled-components';
const Qrimg = ({ data }) => {
   console.log(data);
   return (
      <Img>
         <div>
            <img src={data.qrUrl} alt=""></img>
         </div>
         <div>{`테이블 번호 : ${data.tableNumber}`}</div>
      </Img>
   );
};
const Img = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   border: 1px solid lightgray;

   img {
      box-sizing: border-box;
      padding: 5px;
      width: 100%;
   }
`;
export default Qrimg;
