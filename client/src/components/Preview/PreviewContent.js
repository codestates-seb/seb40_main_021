import styled from 'styled-components';
import MenuAppPreview from './menuAppPreview';

const ContentWrap = styled.div`
   width: 500px;
   margin: 0 auto;
   z-index: 121212;
`;
const CloseButton = styled.button`
   background-color: none;
   border: none;
`;
const PreviewContent = () => {
   return (
      <ContentWrap>
         <MenuAppPreview />
         <CloseButton>X</CloseButton>
      </ContentWrap>
   );
};

export default PreviewContent;
