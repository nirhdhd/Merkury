import "./../main/main.scss";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import MainContent from "../home/home";
import WorkFlow from "../workFlow/workFlow";
import { Route, Switch } from "react-router";
import { useHistory } from "react-router-dom";

const Main = (props) => {
  let history = useHistory();
  history.push("/home");

  return (
    <div className='main'>
      <span>
        <Sidebar />
      </span>
      <span style={{ width: "inherit" }}>
        <Navbar />
        <Route path='/' exact component={MainContent} />
        <Route path='/home' component={MainContent} />
        <Route path='/workFlow' exact component={WorkFlow} />
      </span>
    </div>
  );
};

export default Main;
