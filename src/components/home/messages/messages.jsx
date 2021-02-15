import Message from "./message/message";
import "./messages.scss";
import profile_3 from "../../../assets/images/profilesImages/profile_3.png";
import profile_6 from "../../../assets/images/profilesImages/profile_6.png";

const Messages = () => {
  return (
    <div>
      <div className='messages_header'>
        Messages
        <span className='messages_notifications'>
          <span className='circle1'>2</span>
        </span>
      </div>
      <div className='messages_list'>
        <Message
          pic={profile_3}
          name={"Nina Jones"}
          time={"5 minutes ago"}
          text={"Hey You! It’s me again :-) I attached new (...)"}
          notRead={true}
        />
        <Message
          pic={profile_3}
          name={"Nina Jones"}
          time={"About 20 hours ago"}
          text={"Hey! I attached some new PSD files for (...)"}
          notRead={true}
        />
        <Message
          pic={profile_6}
          name={"James Smith"}
          time={"2 days ago"}
          text={"Good morning, you are fired!"}
        />
        <Message
          pic={profile_3}
          name={"Nina Jones"}
          time={"About 2 weeks ago"}
          text={"Hello! Could You bring me coffee please?"}
        />
      </div>
    </div>
  );
};

export default Messages;
