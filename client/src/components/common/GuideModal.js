import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { setGuideModalState } from '../../redux/action/action';

export const GuideModal = () => {
   const dispatch = useDispatch();
   return (
      <GuideModalWrapper>
         <h1>STEP 1.</h1>
         <p>메뉴판을 먼저 제작해주세요.</p>
         <button onClick={() => dispatch(setGuideModalState(false))}>
            <FontAwesomeIcon icon={faXmark} />
         </button>
      </GuideModalWrapper>
   );
};

const boxMove = keyframes`
    0% {
        transform: translateX(0px);
    }
    100% {
        transform:translateX(10px);
    }
`;

const GuideModalWrapper = styled.div`
   min-width: 250px;
   background: #303e46;
   color: white;
   padding: 20px;
   border-radius: 5px;
   position: fixed;
   top: 400px;
   left: 300px;
   z-index: 10;
   box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
   animation: ${boxMove} 0.8s infinite alternate ease-in-out;
   &::before {
      width: 30px;
      height: 30px;
      background-color: #303e46;
      content: '';
      position: absolute;
      top: 50%;
      left: -10px;
      transform: translateY(-50%) rotate(-45deg);
      z-index: -1;
   }

   h1 {
      font-size: 20px;
      margin-bottom: 10px;
   }
   p {
      font-size: 16px;
   }
   button {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 15px;
      right: 15px;
      color: white;
      font-weight: 900;
      cursor: pointer;
      svg {
         width: 100%;
         height: 100%;
      }
   }
`;
