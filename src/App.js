import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Boxes from "./components/Boxes";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Boxes />
    </div>
  );
}

export default App;
