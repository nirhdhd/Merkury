import "../tasks/tasks.scss";
import Task from "./task/task";
import { useSelector } from "react-redux";

const Tasks = () => {
  const tasksData = useSelector((state) => state.tasksData);

  const tasksElements = () => {
    let elements = [];
    tasksData.map((item) =>
      elements.push(
        <Task letter={item.letter} header={item.header} time={item.time}>
          {" "}
        </Task>
      )
    );
    return elements;
  };

  return (
    <div>
      <div className='tasks_header'>
        Tasks
        <span className='tasks_notifications' style={{ display: "flex" }}>
          <span className='circle1'>5</span>
          <span className='circle2'>2</span>
        </span>
      </div>
      <div className='tasks_list'>{tasksElements()}</div>
    </div>
  );
};

export default Tasks;
