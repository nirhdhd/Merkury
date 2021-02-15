import React, { useState } from "react";
import "./Sidebar.scss";
import logo from "../../../assets/images/sidebar/logo.png";
import calendar from "../../../assets/images/sidebar/calendar.png";
import home from "../../../assets/images/sidebar/home.png";
import settings from "../../../assets/images/sidebar/settings.png";
import statistics from "../../../assets/images/sidebar/statistics.png";
import users from "../../../assets/images/sidebar/users.png";
import workflow from "../../../assets/images/sidebar/workflow.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

const Sidebar = (props) => {
  let history = useHistory();
  const isSidebarOpen = useSelector((state) => state.isSidebarOpen);

  const [selected, setSelected] = useState("home");

  // if (props.isSidebarOpen) {
  // }
  // console.log(props.isSidebarOpen);

  // const toggelSidebar = () => {
  //   if (sidebarState == "sidebar") {
  //     setSidebarState({
  //       sidebar: "sidebar_close",
  //       logoDiv: "logoDiv close",
  //       option: "option close",
  //     });
  //   } else {
  //     setSidebarState({
  //       sidebar: "sidebar",
  //       logoDiv: "logoDiv",
  //       option: "option",
  //     });
  //   }
  // };

  const changeRoute = (routeString) => {
    setSelected(routeString);
    history.push(`/${routeString}`);
  };

  return (
    <div className={isSidebarOpen ? "sidebar" : "sidebar_close"}>
      <div className={isSidebarOpen ? "logoDiv" : "logoDiv close"}>
        <img className='imgLogo' src={logo} />
      </div>

      <div
        id={selected == "home" ? "selected" : ""}
        className={isSidebarOpen ? "option" : "option close"}
        onClick={() => changeRoute("home")}
      >
        <img className='icon' src={home} />
        Home
      </div>

      <div
        id={selected == "workflow" ? "selected" : ""}
        className={isSidebarOpen ? "option" : "option close"}
        onClick={() => changeRoute("workflow")}
      >
        <img className='icon' src={workflow} />
        Workflow
      </div>

      <div
        id={selected == "statistics" ? "selected" : ""}
        className={isSidebarOpen ? "option" : "option close"}
        onClick={() => changeRoute("statistics")}
      >
        <img className='icon' src={statistics} />
        Statistics
      </div>

      <div
        id={selected == "calendar" ? "selected" : ""}
        className={isSidebarOpen ? "option" : "option close"}
        onClick={() => changeRoute("calendar")}
      >
        <img className='icon' src={calendar} />
        Calendar
      </div>

      <div
        id={selected == "users" ? "selected" : ""}
        className={isSidebarOpen ? "option" : "option close"}
        onClick={() => changeRoute("users")}
      >
        <img className='icon' src={users} />
        Users
      </div>

      <div
        id={selected == "settings" ? "selected" : ""}
        className={isSidebarOpen ? "option" : "option close"}
        onClick={() => changeRoute("settings")}
      >
        <img className='icon' src={settings} />
        Settings
      </div>
    </div>
  );
};

export default Sidebar;
