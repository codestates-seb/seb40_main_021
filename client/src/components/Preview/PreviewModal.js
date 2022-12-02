import { useEffect, useRef } from 'react';
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
   const hi = useRef();
   // var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

   // function preventDefault(e) {
   //    e.preventDefault();
   // }

   // function preventDefaultForScrollKeys(e) {
   //    if (keys[e.keyCode]) {
   //       preventDefault(e);
   //       return false;
   //    }
   // }

   // // modern Chrome requires { passive: false } when adding event
   // var supportsPassive = false;
   // try {
   //    window.addEventListener(
   //       'test',
   //       null,
   //       Object.defineProperty({}, 'passive', {
   //          // eslint-disable-next-line getter-return
   //          get: function () {
   //             supportsPassive = true;
   //          }
   //       })
   //    );
   // } catch (e) {
   //    e;
   // }

   // var wheelOpt = supportsPassive ? { passive: false } : false;
   // var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

   // // call this to Disable
   // function disableScroll() {
   //    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
   //    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
   //    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
   //    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
   // }

   // // call this to Enable
   // function enableScroll() {
   //    window.removeEventListener('DOMMouseScroll', preventDefault, false);
   //    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
   //    window.removeEventListener('touchmove', preventDefault, wheelOpt);
   //    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
   // }
   useEffect(() => {
      //scroll top
      window.scrollTo(0, 0);
      // modal이 떠 있을 땐 스크롤 막음
      // disableScroll();

      // modal 닫히면 다시 스크롤 가능하도록 함
      // return () => enableScroll();
   }, []);

   return (
      <PreviewLayout>
         <PreviewContent ref={hi} now={now} />
      </PreviewLayout>
   );
};

export default PreviewModal;
