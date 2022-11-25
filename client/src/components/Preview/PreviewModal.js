import styled from 'styled-components';
import PreviewContent from './PreviewContent';
const PreviewLayout = styled.div`
   width: 100%;
   height: 100vh;
   position: absolute;
   top: 0%;
   left: 0;
   z-index: 9999;
`;
const PreviewModal = () => {
   return (
      <PreviewLayout>
         <PreviewContent />
      </PreviewLayout>
   );
};

export default PreviewModal;
