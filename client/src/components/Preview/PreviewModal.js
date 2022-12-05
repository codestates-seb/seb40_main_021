import styled from 'styled-components';
import PreviewContent from './PreviewContent';
const PreviewLayout = styled.div`
   width: 100%;
   height: 100vh;
   position: absolute;
   overflow: hidden;
   top: 0%;
   left: 0;
   z-index: 9999;
   display: flex;
   align-items: center;
   background-color: rgba(0, 0, 0, 0.5);
`;
const PreviewModal = ({ now }) => {
   return (
      <PreviewLayout>
         <PreviewContent now={now} />
      </PreviewLayout>
   );
};

export default PreviewModal;
