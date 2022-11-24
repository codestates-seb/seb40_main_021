import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { ModalStyle } from '../../style/menu.style';
import axios from 'axios';

export const Modal = modal => {
   const [callStaff, setCallStaff] = useState(false);

   const tableNumber = '12';

   const callStaffHandler = () => {
      setCallStaff(true);
      axios({
         method: 'POST',
         url: `/call/1/${tableNumber}`,
         body: { tableNumber }
      }).then(res => {
         if (res.status === 200) {
            alert('직원을 호출했습니다.');
         }
      });

      setTimeout(() => {
         modal.setIsModalOpen(false);
      }, 1000);
   };

   return (
      <ModalStyle>
         <div className="modal-bg"></div>
         <div className="modal">
            {callStaff ? (
               <h1>잠시만 기다려주세요...</h1>
            ) : (
               <>
                  <FontAwesomeIcon icon={faBell} />
                  <h1>직원을 부르시겠습니까?</h1>
                  <div className="inline">
                     <button className="yes" onClick={callStaffHandler}>
                        네
                     </button>
                     <button className="no" onClick={() => modal.setIsModalOpen(false)}>
                        아니오
                     </button>
                  </div>
               </>
            )}
         </div>
      </ModalStyle>
   );
};
