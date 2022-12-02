export const InfoTable = ({ userInfo }) => {
   return (
      <div>
         <table className="table">
            <tbody>
               <tr>
                  <th>주소</th>
                  <td>{userInfo.address}</td>
               </tr>
               <tr>
                  <th>연락처</th>
                  <td>{userInfo.contactNumber}</td>
               </tr>
               <tr>
                  <th>사업자 번호</th>
                  <td>{userInfo.businessNumber}</td>
               </tr>
               <tr>
                  <th>영업시간</th>
                  <td>{userInfo.businessHours}</td>
               </tr>
               <tr>
                  <th>가게설명</th>
                  <td>{userInfo.about}</td>
               </tr>
            </tbody>
         </table>
      </div>
   );
};

export default InfoTable;
