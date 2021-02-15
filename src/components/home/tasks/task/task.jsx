import "../task/task.scss";
import options from "../../../../assets/images/tasks/options.png";
import clock from "../../../../assets/images/tasks/clock.png";
import clock_img from "../../../../assets/images/activity/clock_grey.png";

const Task = (props) => {
  return (
    <div className='task'>
      <div className='task_circle'>{props.letter} </div>
      <div className='task_content'>
        <div className='task_content_header'>{props.header}</div>
        <div className='task_content_time'>
          <img
            className='clock_img'
            src={props.time.includes("left") ? clock_img : clock}
          />
          <p
            style={{
              color: props.time.includes("left") ? "#8492af" : "#f83c7b",
            }}
          >
            {props.time}
          </p>
        </div>
      </div>
      <div className='task_options'>
        <img className='cursor' src={options} />
      </div>
    </div>
  );
};

export default Task;
