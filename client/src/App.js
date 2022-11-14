import { Reset } from "styled-reset";
import "./assets/font.css";
import Header from "./components/common/Header";
import GnbLayout from "./components/common/GnbLayout";
import AlarmPage from "./pages/user/Alarm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Reset />
      <BrowserRouter>
        <Header />
        {/* 레아이웃 컴포넌트 추가 했습니다.*/}
        <Layout>
          <GnbLayout />
          <Routes>
            <Route path="/alarm" element={<AlarmPage />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
export default App;
