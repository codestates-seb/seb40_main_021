import styled from 'styled-components';
import qrScanIcon from '../../../assets/img/qrScanIcon.png';

const Qrimg = ({ data }) => {
   return (
      <Img>
         <div className="imgBorder">
            <img style={{ width: 135 }} className="qrImg" src={data.qrUrl} alt=""></img>
            <div className="imgTextBox">
               <img className="qrScanIcon" src={qrScanIcon} alt=""></img>
               <div className="text">스캔 후 주문</div>
            </div>
         </div>
         <div className="tableNum">{`테이블 번호 : ${data.tableNumber}`}</div>
      </Img>
   );
};
const Img = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   border: 1px solid lightgray;
   width: 100%;
   height: 240px;
   padding: 20px 30px 10px 30px;
   box-sizing: border-box;
   .tableNum {
      margin-top: 5px;
      font-size: 20px;
      font-weight: bold;
   }
   .text {
      margin-top: 8px;
   }
   .qrScanIcon {
      margin-right: 10px;
      margin-top: 8px;
      width: 25px;
   }
   .imgTextBox {
      color: white;
      width: 110%;
      height: 50px;
      background-color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: bold;
      margin-top: -26px;
      z-index: 0;
   }
   .imgBorder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 85%;
      height: 100%;
      border: 4px solid black;
      background-color: black;
      border-radius: 5px 5px 15px 15px;
      overflow: hidden;
      padding: 5px;
   }
   .qrImg {
      position: relative;
      margin: 0;
      padding: 0;
      top: -15px;

      object-fit: cover;
   }
`;
export default Qrimg;
