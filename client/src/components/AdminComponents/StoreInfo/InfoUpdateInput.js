import Input from '../../Input';

const InfoUpdateInput = () => {
   return (
      <div>
         <section className="sodivinfo">
            <div className="sotrinfo">
               <div>
                  <div>주소</div>
                  <div>
                     <Input width="500px"></Input>
                  </div>
               </div>
               <div>
                  <div>연락처</div>
                  <div>
                     <Input width="500px"></Input>
                  </div>
               </div>
               <div>
                  <div>사업자 번호</div>
                  <div>
                     <Input width="500px"></Input>
                  </div>
               </div>
               <div>
                  <div>영업시간</div>
                  <div>
                     <Input width="500px"></Input>
                  </div>
               </div>
               <div>
                  <div>가게설명</div>
                  <div>
                     <Input width="500px"></Input>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default InfoUpdateInput;
