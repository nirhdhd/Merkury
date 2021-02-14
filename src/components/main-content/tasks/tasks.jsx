import "../tasks/tasks.scss";
import Task from "./task/task";

const Tasks = () => {
  return (
    <div>
      <div className='tasks_header'>
        Tasks
        <span className='tasks_notifications' style={{ display: "flex" }}>
          <span className='circle1'>5</span>
          <span className='circle2'>2</span>
        </span>
      </div>
      <div className='tasks_list'>
        <Task letter={"N"}></Task>
        <Task letter={"V"}></Task>
      </div>
    </div>
  );
};

export default Tasks;
