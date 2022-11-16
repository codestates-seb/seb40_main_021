import { Wrapper } from '../../style/menu.style';

export const Store = () => {
  return (
    <Wrapper>
      <main className="no-padding">
        <section className="store-wrapper">
          <div className="store-imgBox">
            <img
              src="https://cdn.vox-cdn.com/thumbor/OheW0CNYdNihux9eVpJ958_bVCE=/0x0:5996x4003/1200x900/filters:focal(1003x1633:1961x2591)/cdn.vox-cdn.com/uploads/chorus_image/image/51830567/2021_03_23_Merois_008.30.jpg"
              alt="가게"
            />
          </div>
          <h1>맛나요 가게</h1>
          <ul>
            <li>
              <h2>주소</h2>
              <p>월 - 토 12:00 - 23:00</p>
              <p>일 12:00 - 23:00</p>
            </li>
            <li>
              <h2>영업시간</h2>
              <p>부산 부산진구 중앙대로 680번길</p>
            </li>
            <li>
              <h2>연락처</h2>
              <p>0501-1234-5678</p>
            </li>
            <li>
              <h2>가게 설명</h2>
              <p className="store-info">
                매일 깨끗하고 신선한재료로 맛있는 퓨전요리와 경양식.고급원두를
                사용한 다양한 커피 분위기좋고 경치좋고 맛있기까지하는 맛나요
                가게로 놀러오세요~^^
              </p>
            </li>
            <li>
              <h2>사업자 번호</h2>
              <p>123132131-456541</p>
            </li>
          </ul>
        </section>
      </main>
    </Wrapper>
  );
};
