<<<<<<< HEAD

=======
>>>>>>> b9111db2bb1ffd112004ecf1914a7b7023e098da
import { Reset } from "styled-reset";
import './assets/font.css'
import Header from "./components/common/Header";
import GnbLayout from "./components/common/GnbLayout"
import OrderAlarms from "./components/AdminComponents/StoreAlarm/OrderAlarms";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderAlarms from "./components/AdminComponents/StoreAlarm/OrderAlarms";

function App() {
  return (
    <div className="App">

      <Reset />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/user' element={<GnbLayout />}>
<<<<<<< HEAD
            <Route path='/user' element={<OrderAlarms />} />
=======
           <Route path='/user' element={<OrderAlarms />}/>
>>>>>>> b9111db2bb1ffd112004ecf1914a7b7023e098da

          </Route>
        </Routes>
      </BrowserRouter>
    </div >)
}

export default App;
