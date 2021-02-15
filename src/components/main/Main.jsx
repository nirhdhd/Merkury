import "./../main/main.scss";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import MainContent from "../home/home";
import WorkFlow from "../workFlow/workFlow";
import { Route, Switch } from "react-router";

const Main = (props) => {
  return (
    <div className='main'>
      <span>
        <Sidebar />
      </span>
      <span style={{ width: "inherit" }}>
        <Navbar />
        <Route
          path='https://nirhdhd.github.io/Merkury-ui-home-task/'
          exact
          component={MainContent}
        />{" "}
        <Route path='/' exact component={MainContent} />
        <Route path='/home' component={MainContent} />
        <Route path='/workFlow' exact component={WorkFlow} />
      </span>
    </div>
  );
};

export default Main;
