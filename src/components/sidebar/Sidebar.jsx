import React, { useState } from "react";
import "../sidebar/Sidebar.scss";
import logo from "../../assets/images/sidebar/logo.png";
import calendar from "../../assets/images/sidebar/calendar.png";
import home from "../../assets/images/sidebar/home.png";
import settings from "../../assets/images/sidebar/settings.png";
import statistics from "../../assets/images/sidebar/statistics.png";
import users from "../../assets/images/sidebar/users.png";
import workflow from "../../assets/images/sidebar/workflow.png";

const Sidebar = (props) => {
  //const [isOpen, setIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState({
    sidebar: "sidebar",
    logoDiv: "logoDiv",
    option: "option",
  });

  const toggelSidebar = () => {
    if (isOpen.sidebar == "sidebar") {
      setIsOpen({
        sidebar: "sidebar_close",
        logoDiv: "logoDiv close",
        option: "option close",
      });
    } else {
      setIsOpen({
        sidebar: "sidebar",
        logoDiv: "logoDiv",
        option: "option",
      });
    }
  };

  return (
    <div className={isOpen.sidebar}>
      <div className={isOpen.logoDiv}>
        <img onClick={toggelSidebar} className='imgLogo' src={logo} />
      </div>

      <div className='Home' className={isOpen.option}>
        <img className='icon' src={home} />
        Home
      </div>

      <div className='Workflow' className={isOpen.option}>
        <img className='icon' src={workflow} />
        Workflow
      </div>

      <div className='Statistics' className={isOpen.option}>
        <img className='icon' src={statistics} />
        Statistics
      </div>

      <div className='Calendar' className={isOpen.option}>
        <img className='icon' src={calendar} />
        Calendar
      </div>

      <div className='Users' className={isOpen.option}>
        <img className='icon' src={users} />
        Users
      </div>

      <div className='Settings' className={isOpen.option}>
        <img className='icon' src={settings} />
        Settings
      </div>
    </div>
  );
};

export default Sidebar;
