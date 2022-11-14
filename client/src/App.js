import OrderAlarms from "./components/AdminComponents/StoreAlarm/OrderAlarms";
import CallAlarms from "./components/AdminComponents/StoreAlarm/CallAlarms";
import TableList from "./components/AdminComponents/TableStatus/TableList";
function App() {
  return (
    <div className="App">
      <CallAlarms></CallAlarms>
      <OrderAlarms></OrderAlarms>
      <TableList></TableList>
    </div>
  );
}

export default App;
