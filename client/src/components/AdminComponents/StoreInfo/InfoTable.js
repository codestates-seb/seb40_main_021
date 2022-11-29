export const InfoTable = ({ data }) => {
   return (
      <div>
         <table className="table">
            <tbody>
               <tr>
                  <th>주소</th>
                  <td>{data.address}</td>
               </tr>
               <tr>
                  <th>연락처</th>
                  <td>{data.contactNumber}</td>
               </tr>
               <tr>
                  <th>사업자 번호</th>
                  <td>{data.businessNumber}</td>
               </tr>
               <tr>
                  <th>영업시간</th>
                  <td className="sotreTimes">{data.businessHours}</td>
               </tr>
               <tr>
                  <th>가게설명</th>
                  <td>{data.about}</td>
               </tr>
            </tbody>
         </table>
      </div>
   );
};

export default InfoTable;
