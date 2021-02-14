import Message from "./message/message";
import "./messages.scss";

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
        <Message notRead={true} />
        <Message notRead={true} />
        <Message />
        <Message />
      </div>
    </div>
  );
};

export default Messages;
