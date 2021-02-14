import React, { useState } from "react";
import "./message.scss";
import arrowBack from "../../../../assets/images/messages/arrowBack.png";
import settings from "../../../../assets/images/messages/settings.png";
import profile_2 from "../../../../assets/images/profilesImages/profile_2.jpg";

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
        <img className='profileImgStyle' src={profile_2} />
      </div>
      <div className='message_content'>
        <div className='message_name'>
          david nekrutman <span className='message_time'>5 minutes ago</span>
        </div>
        <div className='message_txt'>
          Hey! I attached some new PSD files for (...)
        </div>
        <div className='message_options'>
          <img src={arrowBack}></img>
          <img src={settings}></img>
        </div>
      </div>
    </div>
  );
};

export default Message;
