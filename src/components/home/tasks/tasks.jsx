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
        <Task
          letter={"N"}
          header={"New website for Symu.co"}
          time={"5 days delays"}
        ></Task>
        <Task
          letter={"F"}
          header={"Free business PSD Template "}
          time={"2 days delays"}
        ></Task>
        <Task
          letter={"N"}
          header={"New logo for JCD.pl"}
          time={"10 days left"}
        ></Task>
        <Task
          letter={"F"}
          header={"Free Icons Set vol. 3"}
          time={"10 days left"}
        ></Task>
      </div>
    </div>
  );
};

export default Tasks;
