import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Input from '../../Input';  보류
import styled from 'styled-components';
import Button from './Button';

const InputTable = () => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const navigate = useNavigate();
   const [tableValue, setTableValue] = useState('');
   const [thereIsMenu, setThereIsMenu] = useState(false);
   const hadleClickCreateQR = e => {
      setTableValue(e.target.value);
   };
   axios
      .get(`${API_BASE_URL}/category/${sessionStorage.getItem('userId')}`, {
         headers: { Authorization: sessionStorage.getItem('Authorization') }
      })
      .then(res => {
         if (res.data.length !== 0) {
            setThereIsMenu(true);
         }
      });
   return (
      <InputTableBox>
         {thereIsMenu ? (
            <div className="createQrBox">
               <h2 className="label">테이블 수</h2>
               <div className="input">
                  <div>
                     <input
                        type="text"
                        placeholder="테이블 수를 입력하세요"
                        onChange={e => {
                           hadleClickCreateQR(e);
                        }}></input>
                  </div>
                  <div>
                     <Button text={'QR 등록'} num={tableValue}></Button>
                  </div>
               </div>
            </div>
         ) : (
            <div className="createQrBox">
               <h2 className="label">메뉴판</h2>
               <div className="noMenu">현재 메뉴판이 없습니다.</div>
               <button
                  onClick={() => {
                     navigate('/user/menusetting');
                  }}>
                  메뉴판 등록하러 가기{' >'}
               </button>
            </div>
         )}
      </InputTableBox>
   );
};
const InputTableBox = styled.div`
   .createQrBox {
      display: flex;
      align-items: center;
      justify-content: start;
      margin-bottom: 20px;
      .input {
         display: flex;
      }
      .label {
         min-width: 120px;
         font-weight: bold;
         font-size: 16px;
      }
      input {
         font-size: 14px;
         border: none;
         background: #f4f4f4;
         padding: 10px 20px;
         border-bottom: 2px solid #b6b6b6;
         border-radius: 5px 5px 0 0;
      }
      input:focus {
         outline: none;
         border-bottom: 2px solid #666666;
      }
      .noMenu {
         font-size: 14px;
         color: gray;
         margin-right: 40px;
      }

      a {
         font-size: 14px;
         font-weight: 700;
         color: rgb(255, 107, 0);
      }
   }
   @media screen and (max-width: 900px) {
      .createQrBox {
         flex-direction: column;
         align-items: flex-start;
      }
      button {
         margin: 0;
         margin-top: 15px;
      }
      .input {
         margin-top: 15px;
         display: flex;
         flex-direction: column;
         justify-content: flex-start;
         align-items: flex-start;
      }
   }
`;
export default InputTable;
