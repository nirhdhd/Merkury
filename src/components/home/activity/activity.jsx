import "../activity/activity.scss";
import One_activity from "./one_activity/one_activity";
import { useSelector } from "react-redux";

const Activity = () => {
  const activityData = useSelector((state) => state.activityData);

  const activityElements = () => {
    let elements = [];
    if (activityData == "undifined") return;
    activityData.map((item) =>
      elements.push(
        <One_activity
          name={item.name}
          action={item.action}
          task={item.task}
          pic={item.pic}
          time={item.time}
        />
      )
    );
    return elements;
  };

  return (
    <div>
      <div className='activity_header'>
        Activity
        <span className='activity_notifications' style={{ display: "flex" }}>
          <span className='circle1'>10</span>
        </span>
      </div>
      <div className='activity_list'>
        {activityElements()}
        <div className='timeline'></div>
      </div>
    </div>
  );
};

export default Activity;
