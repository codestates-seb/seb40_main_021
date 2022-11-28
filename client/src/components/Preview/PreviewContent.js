import styled from 'styled-components';
import MenuAppPreview from './menuAppPreview';
import IconCloseWhite from './../../assets/img/icon_close_white_bold.png';
import { useDispatch, useSelector } from 'react-redux';
import { previewToggleState } from '../../redux/action/action';

const ContentWrap = styled.div`
   width: 500px;
   margin: 0 auto;
   z-index: 121212;
   position: relative;
`;
const CloseButton = styled.button`
   background-color: none;
   border: none;
   position: absolute;
   right: -75px;
   top: 25px;
`;
const PreviewContent = () => {
   const dispatch = useDispatch();
   const viewPreview = useSelector(state => state.previewToggleReducer);
   const ClosePreview = () => {
      dispatch(previewToggleState(!viewPreview));
   };
   return (
      <ContentWrap>
         <MenuAppPreview />
         <CloseButton onClick={ClosePreview}>
            <img src={IconCloseWhite} alt={'closeBtn'} />
         </CloseButton>
      </ContentWrap>
   );
};

export default PreviewContent;
