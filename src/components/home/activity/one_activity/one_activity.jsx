import "../one_activity/one_activity.scss";
import clock from "../../../../assets/images/activity/clock_grey.png";

const One_activity = (props) => {
  return (
    <div className='activity'>
      <div className='activity_userProfile'>
        <img className='profileImgStyle' src={props.pic} />
      </div>
      <div className='activity_content'>
        <div className='activity_message'>
          <span className='activity_message_name'>{props.name} </span>&nbsp;
          <span className='activity_message_action'>{props.action} </span>
          &nbsp;
          <span className='activity_message_subject'>{props.task}</span>
        </div>
        <div className='activity_content_time'>
          <img className='clock_img' src={clock} />
          <p>{props.time}</p>
        </div>
      </div>
    </div>
  );
};

export default One_activity;
