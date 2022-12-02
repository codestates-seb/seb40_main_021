import styled from 'styled-components';
import qrScanIcon from '../../../assets/img/qrScanIcon.png';

const Qrimg = ({ data }) => {
   return (
      <Img>
         <div className="imgBorder">
            <img style={{ width: 165 }} className="qrImg" src={data.qrUrl} alt=""></img>
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
   border: 1px dotted lightgray;
   width: 100%;
   height: 280.75px;
   padding: 20px 40px 30px 40px;
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
      position: relative;
      top: -10;
      color: white;
      width: 110%;
      height: 55px;
      background-color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: bold;
      margin-top: -23px;
      z-index: 0;
   }
   .imgBorder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 90%;
      height: 100%;
      border: 4px solid black;
      border-bottom: 20px solid black;
      background-color: white;
      border-radius: 5px 5px 15px 15px;
      overflow: hidden;
      padding: 5px 5px 0 5px;
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
