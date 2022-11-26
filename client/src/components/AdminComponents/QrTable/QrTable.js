import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import QrList from './QrList';
import Button from './Button';
import { RiDeleteBinLine } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import {
   modifyingSavedTableNum,
   qrListAllCheck,
   savedTableListCheckBoxArr,
   clearSavedTableListCheckBoxArr,
   updateTableNumber,
   getQrData
} from '../../../redux/action/action';
import axios from 'axios';

const CreateQR = () => {
   const [qrData, setQrData] = useState([]);
   const [dummyState, setDummyState] = useState([]);
   const allChackBoxRef = useRef(null);
   const dispatch = useDispatch();
   const newTableNumArr = useSelector(state => state.adminReducer.updateTableNumber);
   const modifyingSavedTableNumState = useSelector(state => state.adminReducer.modifyingSavedTableNum);
   const savedTableListCheckBoxArrState = useSelector(state => state.adminReducer.savedTableListCheckBoxArr);
   const url = useSelector(state => state.adminReducer.apiUrl);

   //수정버튼
   const handleClickModifyingSavedTableNum = () => {
      setDummyState(!dummyState);
      dispatch(updateTableNumber());
      savedTableListCheckBoxArrState.length === 0
         ? alert('선택된 QR Table이 없습니다.')
         : dispatch(modifyingSavedTableNum(!modifyingSavedTableNumState));
   };
   //확인버튼
   const handleClickSubmitNewTableNum = () => {
      //handleClickModifyingSavedTableNum();
      savedTableListCheckBoxArrState.length === 0
         ? alert('선택된 QR Table이 없습니다.')
         : dispatch(modifyingSavedTableNum(!modifyingSavedTableNumState));

      const filter = qrData.filter((data, idx) => {
         data.beforeTableNumber = data.tableNumber;
         newTableNumArr.forEach(element => {
            if (element.idx === idx) {
               data.afterTableNumber = Number(element.newTableNum);
               data.qrUrl = `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=http://localhost:3000/usermenu/1/${element.newTableNum}`;
            }
         });

         delete data.tableNumber;
         delete data.tableId;
         delete data.createdAt;
         return savedTableListCheckBoxArrState.indexOf(idx) !== -1;
      });
      const body = {
         tableList: filter
      };
      fetch(`${url}/table/update/1`, {
         method: 'PATCH',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(body)
      })
         .then(() => {
            axios.get(`${url}/table/1/qr`).then(res => {
               dispatch(getQrData(res.data.data));
            });
         })
         .catch(err => console.log(err));
   };

   const handleClickDeleteQr = () => {
      // eslint-disable-next-line no-restricted-globals
      if (confirm('정말 삭제하시겠습니까?')) {
         const filter = qrData.filter((data, idx) => {
            delete data.qrUrl;
            delete data.tableId;
            delete data.createdAt;
            return savedTableListCheckBoxArrState.indexOf(idx) !== -1;
         });

         const body = {
            tableList: filter
         };

         fetch(`${url}/table/1`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
         })
            .then(() => {
               axios.get(`${url}/table/1/qr`).then(res => {
                  dispatch(getQrData(res.data.data));
               });
            })
            .catch(err => console.log(err));
      }
   };
   const allCheck = () => {
      if (allChackBoxRef.current.checked) {
         dispatch(clearSavedTableListCheckBoxArr());
         dispatch(qrListAllCheck(true));
         for (let idx = 0; idx < qrData.length; idx++) {
            dispatch(savedTableListCheckBoxArr(idx));
         }
      } else {
         dispatch(qrListAllCheck(false));
         dispatch(clearSavedTableListCheckBoxArr());
      }
   };

   useEffect(() => {
      axios.get(`${url}/table/1/qr`).then(res => {
         setQrData(res.data.data);
         dispatch(getQrData(res.data.data));
      });
   }, []);
   return (
      <MainContants>
         <div className="title">
            <h1>QR Table</h1>
         </div>
         <main className="mainContant">
            <div className="QrTable">
               <p>생성 완료된 QR Table</p>
               <div className="u_d_btnBox">
                  {modifyingSavedTableNumState ? (
                     <button onClick={handleClickSubmitNewTableNum} className="u_d_btn">
                        확인
                        <CiEdit size="20"></CiEdit>
                     </button>
                  ) : (
                     <button onClick={handleClickModifyingSavedTableNum} className="u_d_btn">
                        수정
                        <CiEdit size="20"></CiEdit>
                     </button>
                  )}

                  <button onClick={handleClickDeleteQr} className="u_d_btn">
                     삭제
                     <RiDeleteBinLine size="15"></RiDeleteBinLine>
                  </button>
               </div>
            </div>

            <div className="flex">
               <div className="th">
                  <div className="allCheck">
                     <input ref={allChackBoxRef} type="checkbox" onClick={allCheck}></input>
                     전체선택
                  </div>
                  <div>No.</div>
                  <div>테이블 번호</div>
                  <div>생성 날짜</div>
                  <div></div>
               </div>
            </div>
            <QrList />
            <div className="printBtn">
               <Button />
            </div>
         </main>
      </MainContants>
   );
};
const MainContants = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 90%;
   width: 100%;
   padding: 30px 50px;
   .allCheck {
      display: flex;
      justify-content: center;
      align-items: center;
      > :first-child {
         margin-right: 10px;
      }
   }
   .u_d_btn {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      border: 0;
      height: auto;
      width: auto;
      border-radius: 5px;
      font-weight: 900;
      :hover {
         color: #ff6c01;
         /* background-color: lightgray; */
      }
   }
   .u_d_btnBox {
      display: flex;
      width: 100%;
      justify-content: end;
      > :first-child {
         display: flex;
         align-items: center;

         margin-right: 30px;
         cursor: pointer;
         > :first-child {
            margin-bottom: 3px;
            margin-left: 5px;
         }
      }
      > :last-child {
         display: flex;
         align-items: center;
         cursor: pointer;
         > :first-child {
            margin-bottom: 3px;
            margin-left: 5px;
         }
      }
   }

   .printBtn {
      display: flex;
      justify-content: end;
      margin-top: 20px;
   }
   .flex {
      display: flex;
      padding: 12px 0;
      background: #838f94;
      color: white;
      border-radius: 5px 5px 0 0;
   }
   .th {
      font-size: 16px;
      width: 100%;
      display: grid;
      align-items: center;
      justify-items: center;
      grid-template-columns: repeat(5, 1fr);
      font-weight: bold;
   }
   .QrTable {
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
      > p {
         width: 100%;
      }
   }
   .title {
      display: flex;
      justify-content: start;
      align-items: center;
      margin-bottom: 30px;
      align-self: flex-start;
      p {
         font-size: 14px;
      }
      > :first-child {
         //title
         font-size: 20px;
         font-weight: bold;
         margin-right: 20px;
      }
   }
   .mainContant {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      width: 100%;
      /* height: 90%; */
      background-color: white;
      box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
      border-radius: 5px;
      padding: 30px;
      overflow: hidden;
   }
   @media screen and (max-width: 700px) {
      padding: 30px;
      font-size: 13px;
      .mainContant {
         padding: 30px 0;
         box-shadow: none;
      }
      .QrTable {
         font-size: 16px;
         margin-bottom: 15px;
      }
      .flex {
         word-break: keep-all;
         input {
            margin-left: 10px;
         }
      }
   }
`;
export default CreateQR;
