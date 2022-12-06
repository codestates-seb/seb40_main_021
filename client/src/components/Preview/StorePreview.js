import { Wrapper } from '../../style/menu.style';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { StoreInfo } from '../usermenu/StoreInfo';
import { useEffect } from 'react';
import { setStoreInfo } from '../../redux/actions/menuAction';
import axios from 'axios';

export const StorePreview = ({ now }) => {
   const API_BASE_URL = process.env.REACT_APP_API_ROOT;
   const store = useSelector(store => store.menuReducer.store);
   const dispatch = useDispatch();

   // 가게 정보 불러오기
   useEffect(() => {
      axios
         .get(`${API_BASE_URL}/member/${sessionStorage.getItem('userId')}`)
         // .get(`/member/1`)
         .then(res => {
            const storeInfo = res.data.data;
            dispatch(setStoreInfo(storeInfo));
         })
         .catch(err => err);
   }, []);

   return (
      <Wrapper>
         <motion.main
            className="no-padding"
            initial={{
               opacity: 0
            }}
            animate={{
               opacity: 1,
               transition: { duration: 0.3 }
            }}>
            <section className={now === 'store' ? 'store-wrapper preview' : 'store-wrapper'}>
               <div className="store-imgBox">
                  {store.userImage === null ? (
                     <p>
                        이미지
                        <br />
                        준비중입니다
                     </p>
                  ) : (
                     <img src={store.userImage} alt="가게" />
                  )}
               </div>
               <h1>{store.businessName}</h1>
               <ul>
                  <StoreInfo name="주소" data={store.address} />
                  <StoreInfo name="영업시간" data={store.businessHours} />
                  <StoreInfo name="연락처" data={store.contactNumber} />
                  <StoreInfo name="가게 설명" data={store.about} />
                  <StoreInfo name="사업자 번호" data={store.businessNumber} />
               </ul>
            </section>
         </motion.main>
      </Wrapper>
   );
};
