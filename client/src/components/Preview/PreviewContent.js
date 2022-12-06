import styled from 'styled-components';
import IconCloseWhite from './../../assets/img/icon_close_white_bold.png';
import { useDispatch, useSelector } from 'react-redux';
import { previewToggleState } from '../../redux/action/action';
import MenuAppPreview from './menuAppPreview';

const ContentWrap = styled.div`
   width: 100%;
   height: 100vh;
   margin: 0 auto;
   z-index: 121212;
   overflow: hidden;
   position: relative;
   & iframe {
      width: 100%;
      height: 100vh;
   }
`;
const CloseButton = styled.button`
   background-color: none;
   border: none;
   position: absolute;
   z-index: 99999;
   right: 50px;
   top: 25px;
`;
const PreviewContent = ({ now }) => {
   const dispatch = useDispatch();
   const viewPreview = useSelector(state => state.previewToggleReducer);
   const ClosePreview = () => {
      dispatch(previewToggleState(!viewPreview));
   };
   return (
      <ContentWrap>
         <MenuAppPreview now={now} />
         <CloseButton onClick={ClosePreview}>
            <img src={IconCloseWhite} alt={'closeBtn'} />
         </CloseButton>
      </ContentWrap>
   );
};

export default PreviewContent;
