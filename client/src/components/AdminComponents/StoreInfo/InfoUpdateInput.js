import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../Input';
import { changStoreInfoData } from '../../../redux/action/action';

// eslint-disable-next-line no-unused-vars
const InfoUpdateInput = ({ data, setIsEmptyValue }) => {
   const [storeName, setStoreNmae] = useState({ target: { value: data.businessName } });
   const [address, setAddress] = useState({ target: { value: data.address } });
   const [number, setNumber] = useState({ target: { value: data.contactNumber } });
   const [businessNum, setBusinessNum] = useState({ target: { value: data.businessNumber } });
   const [businessTime, setBusinessTime] = useState({ target: { value: data.businessHours } });
   const [description, setDescription] = useState({ target: { value: data.about } });

   const patchData = {
      businessName: storeName.target.value,
      address: address.target.value,
      number: number.target.value,
      businessNum: businessNum.target.value,
      businessTime: businessTime.target.value,
      description: description.target.value
   };
   const dispatch = useDispatch();

   const isEmptyInputValue = value => {
      if (value.length === 0) {
         console.log(value);
         setIsEmptyValue(false);
      } else {
         console.log(value);
         setIsEmptyValue(true);
      }
      dispatch(changStoreInfoData(patchData));
   };
   return (
      <div>
         <section className="sodivinfo">
            <div className="sotrinfo">
               <div>
                  <div>가게 이름</div>
                  <div>
                     <Input
                        isEmptyInputValue={isEmptyInputValue}
                        placeholder="빈칸을 채워주세요."
                        handleValue={setStoreNmae}
                        value={storeName.target.value}
                        width="500px"></Input>
                  </div>
                  <div>주소</div>
                  <div>
                     <Input
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
                        isEmptyInputValue={isEmptyInputValue}
                        placeholder="빈칸을 채워주세요."
                        handleValue={setBusinessTime}
                        value={businessTime.target.value}
                        width="500px"></Input>
                  </div>
               </div>
               <div>
                  <div>가게 설명</div>
                  <div>
                     <Input
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
