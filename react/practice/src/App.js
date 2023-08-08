import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header.jsx";
import DayList from "./component/DayList";
import Days from "./component/Days";
function App() {
  return (
    <div className="App">
      <Header />
      <DayList />
      <Days />
    </div>
  );
}

export default App;
