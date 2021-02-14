import "../task/task.scss";
import options from "../../../../assets/images/tasks/options.png";
import clock from "../../../../assets/images/tasks/clock.png";

const Task = (props) => {
  return (
    <div className='task'>
      <div className='task_circle'>{props.letter} </div>
      <div className='task_content'>
        <div className='task_content_header'>New website for Symu.co</div>
        <div className='task_content_time'>
          <img className='clock_img' src={clock} />
          <p>5 days delays</p>
        </div>
      </div>
      <div className='task_options'>
        <img src={options} />
      </div>
    </div>
  );
};

export default Task;
