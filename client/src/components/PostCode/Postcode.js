import { useDaumPostcodePopup } from 'react-daum-postcode';
import { BtnDefault } from '../../pages/Signup/StoreInfo.Style';

const Postcode = ({ setAddress }) => {
   const CURRENT_URL = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
   const open = useDaumPostcodePopup(CURRENT_URL);

   const handleComplete = data => {
      let fullAddress = data.address;
      let extraAddress = '';

      if (data.addressType === 'R') {
         if (data.bname !== '') {
            extraAddress += data.bname;
         }
         if (data.buildingName !== '') {
            extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
         }
         fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }

      setAddress(fullAddress);
   };

   const handleClick = () => {
      open({ onComplete: handleComplete });
   };

   return (
      <button onClick={handleClick}>
         <BtnDefault>우편번호 검색</BtnDefault>
      </button>
   );
};

export default Postcode;
