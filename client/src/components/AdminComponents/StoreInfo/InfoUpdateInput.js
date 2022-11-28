import Input from '../../Input';

const InfoUpdateInput = ({
   setAddress,
   setNumber,
   setBusinessNum,
   setBusinessTime,
   setDescription,
   address,
   number,
   businessNum,
   businessTime,
   description
}) => {
   const changeAddress = e => {
      setAddress(e.target.value);
   };
   const changeNumber = e => {
      setNumber(e.target.value);
   };
   const changeBusinessNum = e => {
      setBusinessNum(e.target.value);
   };
   const changeBusinessTime = e => {
      setBusinessTime(e.target.value);
   };
   const changeDescription = e => {
      setDescription(e.target.value);
   };

   return (
      <div>
         <section className="sodivinfo">
            <div className="sotrinfo">
               <div>
                  <div>주소</div>
                  <div>
                     <Input handleValue={changeAddress} value={address} width="500px"></Input>
                  </div>
               </div>
               <div>
                  <div>연락처</div>
                  <div>
                     <Input handleValue={changeNumber} value={number} width="500px"></Input>
                  </div>
               </div>
               <div>
                  <div>사업자 번호</div>
                  <div>
                     <Input handleValue={changeBusinessNum} value={businessNum} width="500px"></Input>
                  </div>
               </div>
               <div>
                  <div>영업시간</div>
                  <div>
                     <Input handleValue={changeBusinessTime} value={businessTime} width="500px"></Input>
                  </div>
               </div>
               <div>
                  <div>가게설명</div>
                  <div>
                     <Input handleValue={changeDescription} value={description} width="500px"></Input>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default InfoUpdateInput;
