import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../Input';
import { changeStoreInfoData } from '../../../redux/action/action';
import MenuImg from '../../Menu/MenuImg';

const InfoUpdateInput = ({ data, setIsEmptyValue }) => {
   const [storeName, setStoreNmae] = useState({ target: { value: data.businessName } });
   const [address, setAddress] = useState({ target: { value: data.address } });
   const [number, setNumber] = useState({ target: { value: data.contactNumber } });
   const [businessNum, setBusinessNum] = useState({ target: { value: data.businessNumber } });
   const [businessHours, setBusinessHours] = useState({ target: { value: data.businessHours } });
   const [description, setDescription] = useState({ target: { value: data.about } });
   const [img, setImg] = useState(data.userImage);
   const dispatch = useDispatch();

   const isEmptyInputValue = (e, name) => {
      const patchData = {
         businessName: name === 'storeName' ? e.target.value : storeName.target.value,
         address: name === 'address' ? e.target.value : address.target.value,
         number: name === 'storeNumber' ? e.target.value : number.target.value,
         businessNum: name === 'businessNumber' ? e.target.value : businessNum.target.value,
         businessHours: name === 'businessHours' ? e.target.value : businessHours.target.value,
         description: name === 'description' ? e.target.value : description.target.value,
         userImage: img
      };
      dispatch(changeStoreInfoData(patchData));

      if (name !== 'name') {
         if (e.target.value.length === 0) {
            setIsEmptyValue(false);
         } else {
            setIsEmptyValue(true);
         }
      }
   };

   useEffect(() => {
      isEmptyInputValue(null, 'name');
   }, [img]);

   return (
      <div className="storeDataUpdate">
         <div className="inputContainner">
            <p>가게 이미지</p>
            <div className="inputBox">
               <MenuImg setImg={setImg} value={data.userImage} />
            </div>
         </div>
         <div className="inputContainner">
            <p>가게 이름</p>
            <div className="inputBox">
               <Input
                  name={'storeName'}
                  isEmptyInputValue={isEmptyInputValue}
                  placeholder="빈칸을 채워주세요."
                  handleValue={setStoreNmae}
                  value={storeName.target.value}></Input>
            </div>
         </div>
         <div className="inputContainner">
            <p>주소</p>
            <div className="inputBox">
               <Input
                  name={'address'}
                  isEmptyInputValue={isEmptyInputValue}
                  placeholder="빈칸을 채워주세요."
                  handleValue={setAddress}
                  value={address.target.value}></Input>
            </div>
         </div>
         <div className="inputContainner">
            <p>연락처</p>
            <div className="inputBox">
               <Input
                  name={'storeNumber'}
                  isEmptyInputValue={isEmptyInputValue}
                  placeholder="빈칸을 채워주세요."
                  handleValue={setNumber}
                  value={number.target.value}></Input>
            </div>
         </div>
         <div className="inputContainner">
            <p>사업자 번호</p>
            <div className="inputBox">
               <Input
                  name={'businessNumber'}
                  isEmptyInputValue={isEmptyInputValue}
                  placeholder="빈칸을 채워주세요."
                  handleValue={setBusinessNum}
                  value={businessNum.target.value}></Input>
            </div>
         </div>
         <div className="inputContainner">
            <p>영업 시간</p>
            <div className="inputBox">
               <Input
                  name={'businessHours'}
                  isEmptyInputValue={isEmptyInputValue}
                  placeholder="빈칸을 채워주세요."
                  handleValue={setBusinessHours}
                  value={businessHours.target.value}></Input>
            </div>
         </div>
         <div className="inputContainner">
            <p>가게 설명</p>
            <div className="inputBox">
               <Input
                  name={'description'}
                  isEmptyInputValue={isEmptyInputValue}
                  placeholder="빈칸을 채워주세요."
                  handleValue={setDescription}
                  value={description.target.value}></Input>
            </div>
         </div>
      </div>
   );
};

export default InfoUpdateInput;
