import React from "react";
import "../navbar/Navbar.scss";
import Messages from "../../../assets/images/navbar/Messages.png";
import Menu1 from "../../../assets/images/navbar/Menu1.png";
import Menu2 from "../../../assets/images/navbar/Menu2.png";
import Search from "../../../assets/images/navbar/Search.png";
import Notifications from "../../../assets/images/navbar/Notifications.png";
import profile from "../../../assets/images/navbar/profile.png";
import plus from "../../../assets/images/navbar/plus.png";

import { useSelector, useDispatch } from "react-redux";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const toggelSidebar = () => {
    console.log("foooo");
    dispatch({ type: "TOGGLE-SIDEBAR" });
  };

  return (
    <div className='navbar'>
      <div className='right-side'>
        <button className='button'>
          <img className='plusImg' src={plus} />
          Add project{" "}
        </button>
        <img src={Messages} />
        <img src={Notifications} />
        <img src={profile} />
      </div>

      <div onClick={toggelSidebar} className='left-side'>
        <img className='menu' src={Menu1} />
        <img src={Search} />
      </div>
    </div>
  );
};

export default Navbar;
