import Message from "./message/message";
import "../messages/messages.scss";

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
        <Message newMessage='true' />
        <Message newMessage='true' />
        <Message />
      </div>
    </div>
  );
};

export default Messages;
