import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main/main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Main />
      </div>
    </Router>
  );
}

export default App;
