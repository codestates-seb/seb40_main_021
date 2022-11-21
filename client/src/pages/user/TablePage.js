import React from 'react';
import TableList from '../../components/AdminComponents/TableStatus/TableList';
import styled from 'styled-components';
const Table = () => {
   return (
      <MainContent>
         <TableList></TableList>
      </MainContent>
   );
};
const MainContent = styled.main`
   width: 100%;
   height: 100%;
`;

export default Table;
