import "../activity/activity.scss";
import One_activity from "./one_activity/one_activity";
import profile_3 from "../../../assets/images/profilesImages/profile_3.png";
import profile_4 from "../../../assets/images/profilesImages/profile_4.png";
import profile_5 from "../../../assets/images/profilesImages/profile_5.png";
import profile_6 from "../../../assets/images/profilesImages/profile_6.png";

const Activity = () => {
  return (
    <div>
      <div className='activity_header'>
        Activity
        <span className='activity_notifications' style={{ display: "flex" }}>
          <span className='circle1'>10</span>
        </span>
      </div>
      <div className='activity_list'>
        <One_activity
          name={"Nina Jones"}
          action={"added a new project"}
          task={" Free UI Kit"}
          pic={profile_3}
          time='Just now'
        />
        <One_activity
          name={"James Smith"}
          action={"commented project"}
          task={"Free PSD Template"}
          pic={profile_6}
          time='40 minutes ago'
        />
        <One_activity
          name={"Alex Clooney"}
          action={"completed task"}
          task={"Symu Website"}
          pic={profile_5}
          time='1 hour ago'
        />
        <One_activity
          name={"Alexandra Spears"}
          action={"added a new project"}
          task={" Free PSD"}
          pic={profile_4}
          time='3 hours ago'
        />
        <div className='timeline'></div>
      </div>
    </div>
  );
};

export default Activity;
