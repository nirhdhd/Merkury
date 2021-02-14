import "../one_activity/one_activity.scss";
import clock from "../../../../assets/images/activity/clock_grey.png";
import profile_1 from "../../../../assets/images/profilesImages/profile_1.jpg";

const One_activity = (props) => {
  return (
    <div className='activity'>
      <div className='activity_userProfile'>
        <img className='profileImgStyle' src={profile_1} />
      </div>
      <div className='activity_content'>
        <div className='activity_message'>
          <span className='activity_message_name'>Nina Jones </span>&nbsp;
          <span className='activity_message_action'>added a new project </span>
          &nbsp;
          <span className='activity_message_subject'>Free UI Kit</span>
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
