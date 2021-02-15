import Message from "./message/message";
import "./messages.scss";
import { useSelector } from "react-redux";

const Messages = () => {
  const messagesData = useSelector((state) => state.MessagesData);

  const messagesElements = () => {
    let elements = [];
    messagesData.map((item) =>
      elements.push(
        <Message
          pic={item.pic}
          name={item.name}
          time={item.time}
          text={item.text}
          notRead={item.notRead}
        />
      )
    );
    return elements;
  };

  return (
    <div>
      <div className='messages_header'>
        Messages
        <span className='messages_notifications'>
          <span className='circle1'>2</span>
        </span>
      </div>
      <div className='messages_list'>{messagesElements()}</div>
    </div>
  );
};

export default Messages;
