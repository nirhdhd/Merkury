import "../activity/activity.scss";
import One_activity from "./one_activity/one_activity";

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
        <One_activity time='Just now' />
        <One_activity time='40 minutes ago' />
        <One_activity time='1 hour ago' />
        <One_activity time='3 hours ago' />
        <div className='timeline'></div>
      </div>
    </div>
  );
};

export default Activity;
