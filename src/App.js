import "./App.css";
import Header from "./Header";
import "./Header.css";
import Mainbaord from "./Mainbaord";
function App() {
  return (
    <div className="App">
      <div className="app__header">
        <Header></Header>
      </div>
      <div className="app__body">
        <Mainbaord></Mainbaord>
      </div>
    </div>
  );
}

export default App;
