import "../main-content/main_content.scss";
import Tasks from "./tasks/tasks";
import Messages from "./messages/messages";
import Activity from "./activity/activity";

const MainContent = (props) => {
  return (
    <div className='main_content'>
      <div className='username'>Hello john!</div>

      <div className='content'>
        <div className='one'></div>
        <div className='two'></div>
        <div className='three'>
          <Tasks />
        </div>
        <div className='four'>
          <Messages />
        </div>
        <div className='five'>
          <Activity />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
