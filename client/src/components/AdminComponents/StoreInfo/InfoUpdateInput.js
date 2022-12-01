import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../Input';
import { changeStoreInfoData } from '../../../redux/action/action';

const InfoUpdateInput = ({ data, setIsEmptyValue }) => {
   const [storeName, setStoreNmae] = useState({ target: { value: data.businessName } });
   const [address, setAddress] = useState({ target: { value: data.address } });
   const [number, setNumber] = useState({ target: { value: data.contactNumber } });
   const [businessNum, setBusinessNum] = useState({ target: { value: data.businessNumber } });
   const [businessHours, setBusinessHours] = useState({ target: { value: data.businessHours } });
   const [description, setDescription] = useState({ target: { value: data.about } });

   const dispatch = useDispatch();

   const isEmptyInputValue = (e, name) => {
      const patchData = {
         businessName: name === 'storeName' ? e.target.value : storeName.target.value,
         address: name === 'address' ? e.target.value : address.target.value,
         number: name === 'storeNumber' ? e.target.value : number.target.value,
         businessNum: name === 'businessNumber' ? e.target.value : businessNum.target.value,
         businessHours: name === 'businessHours' ? e.target.value : businessHours.target.value,
         description: name === 'description' ? e.target.value : description.target.value
      };
      dispatch(changeStoreInfoData(patchData));
      if (e.target.value.length === 0) {
         setIsEmptyValue(false);
      } else {
         setIsEmptyValue(true);
      }
   };
   return (
      <div>
         <section className="sodivinfo">
            <div className="sotrinfo">
               <div>
                  <div>가게 이름</div>
                  <div>
                     <Input
                        name={'storeName'}
                        isEmptyInputValue={isEmptyInputValue}
                        placeholder="빈칸을 채워주세요."
                        handleValue={setStoreNmae}
                        value={storeName.target.value}
                        width="500px"></Input>
                  </div>
                  <div>주소</div>
                  <div>
                     <Input
                        name={'address'}
                        isEmptyInputValue={isEmptyInputValue}
                        placeholder="빈칸을 채워주세요."
                        handleValue={setAddress}
                        value={address.target.value}
                        width="500px"></Input>
                  </div>
               </div>
               <div>
                  <div>연락처</div>
                  <div>
                     <Input
                        name={'storeNumber'}
                        isEmptyInputValue={isEmptyInputValue}
                        placeholder="빈칸을 채워주세요."
                        handleValue={setNumber}
                        value={number.target.value}
                        width="500px"></Input>
                  </div>
               </div>
               <div>
                  <div>사업자 번호</div>
                  <div>
                     <Input
                        name={'businessNumber'}
                        isEmptyInputValue={isEmptyInputValue}
                        placeholder="빈칸을 채워주세요."
                        handleValue={setBusinessNum}
                        value={businessNum.target.value}
                        width="500px"></Input>
                  </div>
               </div>
               <div>
                  <div>영업 시간</div>
                  <div>
                     <Input
                        name={'businessHours'}
                        isEmptyInputValue={isEmptyInputValue}
                        placeholder="빈칸을 채워주세요."
                        handleValue={setBusinessHours}
                        value={businessHours.target.value}
                        width="500px"></Input>
                  </div>
               </div>
               <div>
                  <div>가게 설명</div>
                  <div>
                     <Input
                        name={'description'}
                        isEmptyInputValue={isEmptyInputValue}
                        placeholder="빈칸을 채워주세요."
                        handleValue={setDescription}
                        value={description.target.value}
                        width="500px"></Input>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default InfoUpdateInput;
