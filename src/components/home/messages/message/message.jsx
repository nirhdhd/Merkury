import React, { useState } from "react";
import "./message.scss";
import arrowBack from "../../../../assets/images/messages/arrowBack.png";
import settings from "../../../../assets/images/messages/settings.png";

const Message = (props) => {
  const [divColor, setDivColor] = useState({ backgroundColor: "white" });
  const [flag, setFlag] = useState(0);

  if (flag == 0) {
    if (props.notRead == true) setDivColor({ backgroundColor: "#ececec" });
    setFlag(1);
  }

  return (
    <div style={divColor} className='message'>
      <div className='profile_Img_place'>
        <img className='profileImgStyle' src={props.pic} />
      </div>
      <div className='message_content'>
        <div className='message_name'>
          {props.name} <span className='message_time'>{props.time}</span>
        </div>
        <div className='message_txt'>{props.text}</div>
        <div className='message_options'>
          <img className='cursor' src={arrowBack}></img>
          <img className='cursor' src={settings}></img>
        </div>
      </div>
    </div>
  );
};

export default Message;
