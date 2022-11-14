import OrderAlarms from "./components/AdminComponents/StoreAlarm/OrderAlarms";
import CallAlarms from "./components/AdminComponents/StoreAlarm/CallAlarms";
function App() {
  return (
    <div className="App">
      <CallAlarms></CallAlarms>
      <OrderAlarms></OrderAlarms>
    </div>
  );
}

export default App;
